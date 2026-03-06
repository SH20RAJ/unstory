"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const posts = [
  {
    title: "Building the Next Generation Setup for Human Potential",
    excerpt: "Why we decided to create an ecosystem of interconnected tools rather than standalone applications.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Company",
    slug: "building-the-next-generation-setup",
  },
  {
    title: "How MindOS uses AI to organize your thoughts organically",
    excerpt: "A deep dive into the vector search and semantic clustering engine powering our flagship product.",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "Engineering",
    slug: "how-mindos-uses-ai",
  },
  {
    title: "Introducing Daksha: Telemetry for Modern Builders",
    excerpt: "Stop guessing what your users want. Intelligent, privacy-first analytics.",
    date: "February 10, 2026",
    readTime: "4 min read",
    category: "Product Updates",
    slug: "introducing-daksha",
  },
];

export function BlogContent() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          Unstory Blog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Insights, engineering deep dives, and product updates straight from the Unstory team.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + idx * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="block h-full group">
              <Card className="h-full bg-card hover:bg-muted/30 border-border/50 hover:border-border transition-all duration-300 flex flex-col">
                <div className="h-48 bg-muted/30 border-b border-border/50 relative overflow-hidden flex items-center justify-center">
                  <span className="text-muted-foreground/30 font-bold text-xl uppercase tracking-widest">{post.category}</span>
                  <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
                    <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight size={16} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
