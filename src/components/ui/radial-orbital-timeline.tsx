
"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: number;
  title: string;
  content: string;
  icon: React.ElementType;
  relatedIds: number[];
  status?: "completed" | "in-progress" | "pending";
  energy?: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  centerColor?: string;
  height?: string;
  className?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  centerColor = "from-blue-600 via-blue-500 to-blue-700",
  height = "h-[70vh]",
  className = "",
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    // Increased radius for better spacing
    const radius = 240;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity };
  };

  const getStatusStyles = (status?: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-blue-600 border-blue-400";
      case "in-progress":
        return "text-slate-900 bg-blue-300 border-blue-400";
      case "pending":
        return "text-white bg-slate-600/60 border-slate-500/50";
      default:
        return "text-white bg-blue-600/80 border-blue-500/50";
    }
  };

  return (
    <div 
      className={`w-full ${height} flex flex-col items-center justify-center bg-transparent overflow-hidden ${className}`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
          }}
        >
          {/* Central hub with enhanced glow effect */}
          <div className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${centerColor} flex items-center justify-center z-10`}>
            {/* Multiple layers of glow for better visibility */}
            <div className="absolute w-32 h-32 rounded-full bg-blue-500/20 animate-pulse"></div>
            <div className="absolute w-28 h-28 rounded-full bg-blue-500/15 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="absolute w-24 h-24 rounded-full border border-blue-400/40 animate-ping opacity-70"></div>
            <div 
              className="absolute w-32 h-32 rounded-full border border-blue-400/30 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-blue-100/90 backdrop-blur-md shadow-lg shadow-blue-500/50"></div>
          </div>

          {/* Orbit paths with enhanced visibility */}
          <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-blue-400/20"></div>
          <div className="absolute w-[510px] h-[510px] rounded-full border border-blue-300/15"></div>
          <div className="absolute w-[490px] h-[490px] rounded-full border border-blue-500/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Enhanced glow effect for better visibility */}
                <div
                  className="absolute rounded-full animate-pulse duration-1000"
                  style={{
                    background: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 70%)`,
                    width: "100px",
                    height: "100px",
                    left: "-30px",
                    top: "-30px",
                  }}
                ></div>

                {/* Node with enhanced visibility */}
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${isExpanded ? "bg-blue-500 text-white" : "bg-blue-600/90 text-white"}
                    border-2 
                    ${isExpanded ? "border-blue-300 shadow-lg shadow-blue-500/50" : "border-blue-400/70"}
                    transition-all duration-300 transform shadow-md shadow-blue-500/30
                    ${isExpanded ? "scale-150" : "hover:scale-125"}
                  `}
                >
                  <Icon size={20} className="drop-shadow-md" />
                </div>

                {/* Title with enhanced visibility */}
                <div
                  className={`
                    absolute top-14 whitespace-nowrap
                    text-base font-semibold tracking-wider
                    transition-all duration-300 drop-shadow-md
                    ${isExpanded ? "text-blue-100 scale-125" : "text-blue-100/90"}
                  `}
                >
                  {item.title}
                </div>

                {/* Content card that appears when expanded */}
                {isExpanded && (
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 w-80 bg-slate-900/95 backdrop-blur-lg border border-blue-500/40 shadow-xl shadow-blue-500/20 rounded-xl overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-blue-400/70"></div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-3 text-blue-100">{item.title}</h3>
                      <p className="text-md text-blue-100/90">{item.content}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
