
import React, { useState } from "react";
import { BlogPostCard } from "./BlogPostCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationEllipsis } from "@/components/ui/pagination";
import { motion } from "framer-motion";
import { GradientHeading } from "@/components/ui/gradient-heading";
import { ArrowRight, ArrowLeft } from "lucide-react";

// Enhanced blog post data with updated image URLs from user uploads
const blogPosts = [
  {
    id: 1,
    title: "XposedOrNot: New Open Source Data Breach Notification",
    excerpt: "Our team has developed an open source data breach notification service, making it easier to get real-time alerts about your exposed data.",
    imageUrl: "/lovable-uploads/df9dbaeb-1a17-4079-8b73-6683cbf82eb0.png", // FastAPI rocket image
    category: "Data Breaches",
    date: "May 19, 2023",
    comments: 8,
    featured: true,
  },
  {
    id: 7,
    title: "The Ultimate Guide to Data Breach Statistics in 2025",
    excerpt: "Explore over 500 verified statistics on global data breaches including cost analysis, root causes, attack vectors, and regional breakdowns.",
    imageUrl: "/lovable-uploads/2d8b8dd9-18b5-4aa0-bf44-30a8eb836153.png", // Homepage with statistics
    category: "Research Report",
    date: "May 17, 2025",
    comments: 14,
    featured: true,
  },
  {
    id: 2,
    title: "Weekly Databreaches Roundup Week 19-2023",
    excerpt: "A comprehensive insight into this week's major data breaches and emerging threats in the cybersecurity landscape.",
    imageUrl: "/lovable-uploads/d71a1e69-0ea2-4bfa-a3cf-e250cda72bd2.png", // Weekly roundup image Week 19
    category: "Weekly Roundup",
    date: "May 12, 2023",
    comments: 5,
    featured: false,
  },
  {
    id: 3,
    title: "Weekly Databreaches Roundup Week 17-2023",
    excerpt: "Insights into high-profile security breaches impacting major corporations and their response strategies.",
    imageUrl: "/lovable-uploads/b8b26271-5fa5-472a-b4a3-14fb0a94c2be.png", // Weekly roundup image Week 17
    category: "Weekly Roundup",
    date: "April 28, 2023",
    comments: 10,
    featured: false,
  },
  {
    id: 4,
    title: "Weekly Databreaches Roundup Week 16-2023",
    excerpt: "Latest information on recent data breach incidents and how they affect users worldwide with actionable mitigation strategies.",
    imageUrl: "/lovable-uploads/b6483a6a-9666-4ca0-846b-85fb11747fb0.png", // Weekly roundup image Week 16
    category: "Weekly Roundup",
    date: "April 21, 2023",
    comments: 7,
    featured: false,
  },
  {
    id: 5,
    title: "Weekly Databreaches Roundup Week 15-2023",
    excerpt: "News on the latest personal data leaks, corporate breaches, and security vulnerabilities discovered by security researchers.",
    imageUrl: "/lovable-uploads/c2d1bcd2-ad7a-47a2-a565-28f395940fa2.png", // Weekly roundup image Week 15
    category: "Weekly Roundup", 
    date: "April 14, 2023",
    comments: 3,
    featured: false,
  },
  {
    id: 6,
    title: "FastAPI Rebuild: XposedOrNot Now Runs Lightning Fast",
    excerpt: "How XposedOrNot improved its system performance with a complete FastAPI rebuild, now loading twice as fast.",
    imageUrl: "/lovable-uploads/df9dbaeb-1a17-4079-8b73-6683cbf82eb0.png", // FastAPI rocket image
    category: "API Security",
    date: "April 7, 2023",
    comments: 12,
    featured: true,
  },
  {
    id: 8,
    title: "Weekly Databreaches Roundup Week 12-2023",
    excerpt: "This week's summary of the most significant data breaches and cybersecurity incidents affecting users and organizations worldwide.",
    imageUrl: "/lovable-uploads/0d3946c4-0657-4202-a179-41491a1848b2.png", // Weekly roundup image Week 12
    category: "Weekly Roundup",
    date: "March 24, 2023",
    comments: 6,
    featured: false,
  },
  {
    id: 9,
    title: "Weekly Databreaches Roundup Week 10-2023",
    excerpt: "A detailed review of this week's breach notifications and data exposure incidents across various industries and regions.",
    imageUrl: "/lovable-uploads/ac90bd54-235e-4fec-90bf-61274dd8cf62.png", // Weekly roundup image Week 10
    category: "Weekly Roundup", 
    date: "March 10, 2023",
    comments: 4,
    featured: false,
  },
  {
    id: 10,
    title: "Weekly Databreaches Roundup Week 09-2023",
    excerpt: "Analysis of recent data breaches including attack methods, compromised data types, and recommended security measures for prevention.",
    imageUrl: "/lovable-uploads/8a52396c-bdfc-4253-8ff7-73fcf91785af.png", // Weekly roundup image Week 09
    category: "Weekly Roundup",
    date: "March 3, 2023",
    comments: 9,
    featured: false,
  },
  {
    id: 11,
    title: "Weekly Databreaches Roundup Week 08-2023",
    excerpt: "Weekly summary covering the latest security incidents affecting millions of users across social media, healthcare and financial services.",
    imageUrl: "/lovable-uploads/44527a64-6805-4fa3-b365-e44de5756d16.png", // Weekly roundup image Week 08
    category: "Weekly Roundup",
    date: "February 24, 2023",
    comments: 5,
    featured: false,
  },
  {
    id: 12,
    title: "Weekly Databreaches Roundup Week 07-2023",
    excerpt: "A comprehensive review of this week's data breaches, security incidents, and privacy concerns for security professionals.",
    imageUrl: "/lovable-uploads/0182cf72-c239-4ebe-b0c8-65b246258fc0.png", // Weekly roundup image Week 07
    category: "Weekly Roundup",
    date: "February 17, 2023",
    comments: 7,
    featured: false,
  }
];

export const BlogListSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  // Calculate total pages based on regular posts count
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="space-y-12">
      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <GradientHeading 
            size="md" 
            variant="primary" 
            className="mb-8 flex items-center gap-2" 
          >
            Featured Research
            <div className="inline-flex items-center justify-center bg-blue-500/10 w-6 h-6 rounded-full">
              <span className="text-blue-400 text-xs">✦</span>
            </div>
          </GradientHeading>
          
          <div className="grid grid-cols-1 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* All Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <GradientHeading size="md" variant="primary">Latest Insights</GradientHeading>
          <a href="/blog/all" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-medium">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Improved Pagination UI */}
      {regularPosts.length > postsPerPage && (
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            {/* Previous Button */}
            <button 
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`flex items-center justify-center h-10 px-4 rounded-md bg-slate-800/90 border border-slate-700 text-slate-200 hover:bg-slate-700 transition-colors ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Prev
            </button>
            
            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              // Only show current page, first, last, and one page before and after current
              if (
                pageNum === 1 || 
                pageNum === totalPages || 
                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
              ) {
                return (
                  <button 
                    key={i}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`flex items-center justify-center h-10 w-10 rounded-md transition-colors ${
                      currentPage === pageNum 
                        ? 'bg-blue-600 text-white font-medium' 
                        : 'bg-slate-800/90 border border-slate-700 text-slate-200 hover:bg-slate-700'
                    }`}
                    aria-current={currentPage === pageNum ? 'page' : undefined}
                  >
                    {pageNum}
                  </button>
                );
              } else if (
                // Add ellipsis after first page if needed
                pageNum === 2 && currentPage > 3
              ) {
                return (
                  <span key={i} className="flex items-center justify-center h-10 px-2 text-slate-400">
                    ...
                  </span>
                );
              } else if (
                // Add ellipsis before last page if needed
                pageNum === totalPages - 1 && currentPage < totalPages - 2
              ) {
                return (
                  <span key={i} className="flex items-center justify-center h-10 px-2 text-slate-400">
                    ...
                  </span>
                );
              }
              return null;
            })}
            
            {/* Next Button */}
            <button 
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`flex items-center justify-center h-10 px-4 rounded-md bg-slate-800/90 border border-slate-700 text-slate-200 hover:bg-slate-700 transition-colors ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              Next <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};
