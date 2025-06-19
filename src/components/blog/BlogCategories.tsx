
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Tag, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const BlogCategories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", count: 42, active: activeCategory === "All" },
    { name: "Recent Posts", count: 10, active: activeCategory === "Recent Posts" },
    { name: "Weekly Roundup", count: 24, active: activeCategory === "Weekly Roundup" },
    { name: "Data Breaches", count: 18, active: activeCategory === "Data Breaches" },
    { name: "API Security", count: 8, active: activeCategory === "API Security" },
    { name: "Privacy and Security", count: 15, active: activeCategory === "Privacy and Security" },
  ];

  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
  };

  return (
    <Card className="backdrop-blur-md bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/50 shadow-xl overflow-hidden">
      <CardHeader className="pb-2 border-b border-slate-700/50 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500/10 p-2 rounded-full">
            <Tag className="w-4 h-4 text-blue-400" />
          </div>
          <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Categories</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="relative mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 text-white placeholder:text-slate-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
        </div>

        <div className="space-y-2">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`flex justify-between items-center p-2.5 rounded-lg transition-all duration-200 cursor-pointer ${
                category.name === activeCategory
                  ? "bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white font-medium shadow-md"
                  : "hover:bg-slate-800/70 text-slate-300"
              }`}
            >
              <span>{category.name}</span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs ${
                category.name === activeCategory 
                  ? "bg-blue-500/30 text-blue-100" 
                  : "bg-slate-700 text-slate-400"
              }`}>
                {category.count}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-indigo-500/10 p-1.5 rounded-full">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <h3 className="text-sm font-semibold text-slate-200">Trending Topics</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs rounded-full cursor-pointer transition-colors duration-300">
              #ZeroTrust
            </span>
            <span className="px-3 py-1 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-xs rounded-full cursor-pointer transition-colors duration-300">
              #GDPR
            </span>
            <span className="px-3 py-1 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 text-xs rounded-full cursor-pointer transition-colors duration-300">
              #APISecOps
            </span>
            <span className="px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs rounded-full cursor-pointer transition-colors duration-300">
              #ThreadModeling
            </span>
            <span className="px-3 py-1 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs rounded-full cursor-pointer transition-colors duration-300">
              #0Day
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
