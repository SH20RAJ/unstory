"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface PostContentProps {
  post: {
    title: string;
    date: string;
    readTime: string;
    category: string;
    content: React.ReactNode;
  };
}

export function PostContent({ post }: PostContentProps) {
  return (
    <article className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
            <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="prose prose-invert prose-lg max-w-none"
      >
        {post.content}
      </motion.div>
    </article>
  );
}
