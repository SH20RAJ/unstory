"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const repos = [
  {
    name: "shade-solutions/github-mcp-plus",
    description: "An enhanced, Node.js-based implementation of the official GitHub MCP server.",
    stars: 840,
    forks: 42,
    language: "TypeScript",
    color: "bg-blue-500",
  },
  {
    name: "shade-solutions/ai-agents-directory",
    description: "A comprehensive directory for AI Agents, tools, and autonomous assistants.",
    stars: 1200,
    forks: 184,
    language: "TypeScript",
    color: "bg-blue-500",
  },
  {
    name: "shade-solutions/devatlas",
    description: "Interactive developer roadmaps, career paths, and skill trees for modern engineering.",
    stars: 2100,
    forks: 312,
    language: "TypeScript",
    color: "bg-blue-500",
  },
];

export function OpenSourceSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/10 relative border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          <div className="lg:w-1/3 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mb-6"
            >
              <Github size={24} />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Built in Public
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We believe in open ecosystems. Unstory builds tools in public, sponsors maintainers, and contributes heavily to the open source community.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <Button asChild size="lg" className="rounded-full">
                <a href="https://github.com/unstory-app" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-background/50 backdrop-blur-sm border-border">
                <Link href="/open-source">Explore Projects</Link>
              </Button>
            </motion.div>
          </div>

          <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className={idx === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <a href={`https://github.com/${repo.name}`} target="_blank" rel="noopener noreferrer" className="block h-full group">
                  <Card className="h-full bg-card hover:bg-muted/30 border-border/50 hover:border-border transition-all duration-300">
                    <CardHeader className="pb-3 flex flex-row items-center justify-between">
                      <CardTitle className="text-lg font-medium text-primary flex items-center gap-2">
                        <Github size={18} />
                        {repo.name}
                      </CardTitle>
                      <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-sm leading-relaxed text-foreground/80 font-medium">
                        {repo.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${repo.color}`} />
                          {repo.language}
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-yellow-500 transition-colors">
                          <Star size={14} />
                          {repo.stars}
                        </div>
                        <div className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                          <GitFork size={14} />
                          {repo.forks}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
