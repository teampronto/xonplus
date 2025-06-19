
import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, Sector, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from "@/components/ui/chart";

// Financial Impact Chart
export const FinancialImpactChart = () => {
  const data = [
    { name: 'Healthcare', cost: 10.93 },
    { name: 'Financial', cost: 9.48 },
    { name: 'Tech', cost: 8.51 },
    { name: 'Energy', cost: 7.39 },
    { name: 'Industrial', cost: 6.88 },
    { name: 'Services', cost: 6.05 },
    { name: 'Retail', cost: 5.72 },
  ];

  return (
    <ChartContainer 
      className="w-full h-[350px]"
      config={{
        cost: { color: "#3b82f6", label: "Cost in millions ($)" }
      }}
    >
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
        <XAxis dataKey="name" angle={-45} textAnchor="end" tick={{ fill: '#94a3b8' }} />
        <YAxis tick={{ fill: '#94a3b8' }} />
        <Tooltip />
        <Bar dataKey="cost" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

// Attack Vectors Chart
export const AttackVectorsChart = () => {
  const data = [
    { name: 'Phishing', value: 36 },
    { name: 'Stolen Credentials', value: 25 },
    { name: 'Cloud Misconfig', value: 15 },
    { name: 'Zero-day', value: 10 },
    { name: 'Inside Threat', value: 8 },
    { name: 'Other', value: 6 },
  ];
  
  const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#94a3b8'];

  return (
    <ChartContainer 
      className="w-full h-[350px]"
      config={{
        value: { color: "#3b82f6", label: "Percentage (%)" }
      }}
    >
      <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ChartContainer>
  );
};

// Industry Impact Chart
export const IndustryImpactChart = () => {
  const data = [
    { name: '2020', healthcare: 48, finance: 35, tech: 31, education: 25, government: 18 },
    { name: '2021', healthcare: 51, finance: 39, tech: 34, education: 30, government: 22 },
    { name: '2022', healthcare: 55, finance: 42, tech: 37, education: 34, government: 28 },
    { name: '2023', healthcare: 58, finance: 48, tech: 41, education: 39, government: 33 },
    { name: '2024', healthcare: 62, finance: 53, tech: 47, education: 44, government: 40 },
    { name: '2025', healthcare: 67, finance: 58, tech: 52, education: 49, government: 45 },
  ];

  return (
    <ChartContainer 
      className="w-full h-[350px]"
      config={{
        healthcare: { color: "#3b82f6", label: "Healthcare" },
        finance: { color: "#6366f1", label: "Finance" },
        tech: { color: "#8b5cf6", label: "Technology" },
        education: { color: "#a855f7", label: "Education" },
        government: { color: "#d946ef", label: "Government" }
      }}
    >
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
        <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
        <YAxis tick={{ fill: '#94a3b8' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="healthcare" stroke="#3b82f6" strokeWidth={2} />
        <Line type="monotone" dataKey="finance" stroke="#6366f1" strokeWidth={2} />
        <Line type="monotone" dataKey="tech" stroke="#8b5cf6" strokeWidth={2} />
        <Line type="monotone" dataKey="education" stroke="#a855f7" strokeWidth={2} />
        <Line type="monotone" dataKey="government" stroke="#d946ef" strokeWidth={2} />
      </LineChart>
    </ChartContainer>
  );
};

// Time to Detection Chart
export const TimeToDetectionChart = () => {
  const data = [
    { year: '2020', days: 280 },
    { year: '2021', days: 250 },
    { year: '2022', days: 212 },
    { year: '2023', days: 190 },
    { year: '2024', days: 174 },
    { year: '2025', days: 161 },
  ];

  return (
    <ChartContainer 
      className="w-full h-[350px]"
      config={{
        days: { color: "#3b82f6", label: "Average Days to Detection" }
      }}
    >
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
        <XAxis dataKey="year" tick={{ fill: '#94a3b8' }} />
        <YAxis tick={{ fill: '#94a3b8' }} />
        <Tooltip />
        <Area type="monotone" dataKey="days" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
      </AreaChart>
    </ChartContainer>
  );
};

// Data Types Compromised Chart
export const DataTypesCompromisedChart = () => {
  const data = [
    { name: 'PII', value: 42 },
    { name: 'Login Credentials', value: 28 },
    { name: 'Financial Data', value: 15 },
    { name: 'Health Records', value: 8 },
    { name: 'Intellectual Property', value: 7 },
  ];
  
  const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef'];

  return (
    <ChartContainer 
      className="w-full h-[350px]"
      config={{
        value: { color: "#3b82f6", label: "Percentage (%)" }
      }}
    >
      <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ChartContainer>
  );
};

// Regulatory Response Chart
export const RegulatoryResponseChart = () => {
  const data = [
    { region: 'North America', enforcement: 85, reporting: 90, penalties: 70 },
    { region: 'Europe (EU)', enforcement: 95, reporting: 95, penalties: 90 },
    { region: 'Asia-Pacific', enforcement: 65, reporting: 70, penalties: 60 },
    { region: 'Latin America', enforcement: 55, reporting: 60, penalties: 45 },
    { region: 'Middle East', enforcement: 60, reporting: 65, penalties: 50 },
    { region: 'Africa', enforcement: 40, reporting: 50, penalties: 35 },
  ];

  return (
    <ChartContainer 
      className="w-full h-[350px]"
      config={{
        enforcement: { color: "#3b82f6", label: "Enforcement" },
        reporting: { color: "#6366f1", label: "Reporting" },
        penalties: { color: "#8b5cf6", label: "Penalties" }
      }}
    >
      <RadarChart outerRadius={130} width={500} height={350} data={data}>
        <PolarGrid stroke="#334155" />
        <PolarAngleAxis dataKey="region" tick={{ fill: '#94a3b8', fontSize: 10 }} />
        <Radar name="Enforcement" dataKey="enforcement" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
        <Radar name="Reporting Requirements" dataKey="reporting" stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} />
        <Radar name="Penalty Severity" dataKey="penalties" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.5} />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ChartContainer>
  );
};

// SMB Impact Chart
export const SMBImpactChart = () => {
  const data = [
    { name: 'Survived', noProtection: 40, withProtection: 85 },
    { name: 'Failed', noProtection: 60, withProtection: 15 },
  ];

  return (
    <ChartContainer 
      className="w-full h-[350px]"
      config={{
        noProtection: { color: "#ef4444", label: "Without Security Measures" },
        withProtection: { color: "#3b82f6", label: "With Security Measures" }
      }}
    >
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
        <XAxis dataKey="name" tick={{ fill: '#94a3b8' }} />
        <YAxis tick={{ fill: '#94a3b8' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="noProtection" fill="#ef4444" radius={[4, 4, 0, 0]} />
        <Bar dataKey="withProtection" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

// Future Trends Chart
export const FutureTrendsChart = () => {
  const data = [
    { year: 2025, ransomware: 70, supplyChain: 55, deepfakes: 40, cloud: 65 },
    { year: 2026, ransomware: 75, supplyChain: 65, deepfakes: 50, cloud: 75 },
    { year: 2027, ransomware: 80, supplyChain: 72, deepfakes: 65, cloud: 80 },
    { year: 2028, ransomware: 85, supplyChain: 78, deepfakes: 75, cloud: 83 },
    { year: 2029, ransomware: 88, supplyChain: 82, deepfakes: 80, cloud: 85 },
    { year: 2030, ransomware: 90, supplyChain: 85, deepfakes: 85, cloud: 87 },
  ];

  return (
    <ChartContainer 
      className="w-full h-[350px]"
      config={{
        ransomware: { color: "#ef4444", label: "Ransomware" },
        supplyChain: { color: "#f97316", label: "Supply Chain" },
        deepfakes: { color: "#8b5cf6", label: "AI Deepfakes" },
        cloud: { color: "#3b82f6", label: "Cloud Breaches" }
      }}
    >
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
        <XAxis dataKey="year" tick={{ fill: '#94a3b8' }} />
        <YAxis tick={{ fill: '#94a3b8' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ransomware" stroke="#ef4444" strokeWidth={2} />
        <Line type="monotone" dataKey="supplyChain" stroke="#f97316" strokeWidth={2} />
        <Line type="monotone" dataKey="deepfakes" stroke="#8b5cf6" strokeWidth={2} />
        <Line type="monotone" dataKey="cloud" stroke="#3b82f6" strokeWidth={2} />
      </LineChart>
    </ChartContainer>
  );
};
