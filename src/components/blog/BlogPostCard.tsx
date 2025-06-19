import React from "react";
import { Calendar, MessageSquare, Bookmark, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  comments: number;
  featured: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const isResearchReport = post.category === "Research Report";

  // Enhanced image overlay based on category with more distinct visuals
  const getCategoryOverlay = () => {
    switch (post.category) {
      case "Research Report":
        return "bg-gradient-to-b from-indigo-900/40 to-indigo-900/80 mix-blend-multiply";
      case "Data Breaches":
        return "bg-gradient-to-b from-rose-900/40 to-rose-900/80 mix-blend-multiply";
      case "Weekly Roundup":
        return "bg-gradient-to-b from-amber-900/40 to-amber-900/80 mix-blend-multiply";
      case "API Security":
        return "bg-gradient-to-b from-emerald-900/40 to-emerald-900/80 mix-blend-multiply";
      default:
        return "bg-gradient-to-b from-blue-900/40 to-blue-900/80 mix-blend-multiply";
    }
  };

  // Enhanced category style based on post category
  const getCategoryStyle = () => {
    return cn(
      "absolute top-4 left-4 z-10 px-3 py-1.5 text-xs font-bold text-white rounded-full border backdrop-blur-md shadow-md",
      isResearchReport ? "bg-indigo-600/90 border-indigo-500/70 shadow-indigo-500/30" :
      post.category === "Data Breaches" ? "bg-rose-600/90 border-rose-500/70 shadow-rose-500/30" :
      post.category === "Weekly Roundup" ? "bg-amber-600/90 border-amber-500/70 shadow-amber-500/30" :
      post.category === "API Security" ? "bg-emerald-600/90 border-emerald-500/70 shadow-emerald-500/30" : 
      "bg-blue-600/90 border-blue-500/70 shadow-blue-500/30"
    );
  };

  // Enhanced category-specific visual elements for richer thumbnails
  const getCategoryPattern = () => {
    switch (post.category) {
      case "Research Report": 
        return (
          <>
            {/* Simple overlay for the new images */}
            <div className="absolute top-0 right-0 w-full h-full bg-indigo-900/20 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-indigo-900/95 via-indigo-900/70 to-transparent"></div>
          </>
        );
      case "Data Breaches":
        return (
          <>
            {/* Simple overlay for the new images */}
            <div className="absolute top-0 right-0 w-full h-full bg-rose-900/20 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-rose-900/95 via-rose-900/70 to-transparent"></div>
          </>
        );
      case "Weekly Roundup":
        return (
          <>
            {/* Simple overlay for the new images */}
            <div className="absolute top-0 right-0 w-full h-full bg-amber-900/20 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-900/95 via-amber-900/70 to-transparent"></div>
          </>
        );
      case "API Security":
        return (
          <>
            {/* Simple overlay for the new images */}
            <div className="absolute top-0 right-0 w-full h-full bg-emerald-900/20 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-900/95 via-emerald-900/70 to-transparent"></div>
          </>
        );
      default:
        return (
          <>
            {/* Default overlay */}
            <div className="absolute top-0 right-0 w-full h-full bg-blue-900/20 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-transparent"></div>
          </>
        );
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
        <div className="relative">
          <div className={getCategoryStyle()}>
            {post.category}
          </div>
          {post.featured && (
            <div className="absolute top-4 right-4 z-10 bg-indigo-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-500/50 shadow-md shadow-indigo-500/20 flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" />
              Featured
            </div>
          )}
          <div className="relative h-60 overflow-hidden group-hover:shadow-lg group-hover:shadow-blue-500/20">
            {/* Enhanced image treatment with futuristic overlay */}
            <div className={`absolute inset-0 ${getCategoryOverlay()} z-10`}></div>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Category-specific patterns and overlays */}
            {getCategoryPattern()}
            
            {/* Grid lines */}
            <div className="absolute inset-0 bg-grid-white/[0.03] z-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-60 z-20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 z-10"></div>
            
            {/* Special treatment for research reports */}
            {isResearchReport && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/80 to-transparent p-3 text-xs font-semibold text-white z-30 flex items-center justify-between">
                <span>Comprehensive Research</span>
                <span>500+ Statistics</span>
              </div>
            )}
            
            <button className="absolute top-4 right-20 z-30 bg-white/10 backdrop-blur-sm p-2 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/20">
              <Bookmark className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-b from-slate-800/20 to-slate-900/20 relative z-30">
          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
            <a href={post.id === 7 ? "/blog/data-breach-statistics" : `/blog/${post.id}`} className="block">{post.title}</a>
          </h3>
          <p className="text-slate-300 text-sm mb-5 line-clamp-2 opacity-80">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-slate-400 gap-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>{post.comments}</span>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={post.id === 7 ? "/blog/data-breach-statistics" : `/blog/${post.id}`} className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
