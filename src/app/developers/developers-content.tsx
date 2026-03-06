"use client";

import { motion } from "framer-motion";
import { DeveloperPlatformSection } from "@/sections/developer-platform";
import { Book, Code, Terminal, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const resources = [
  {
    title: "API Reference",
    description: "Comprehensive documentation for our REST API endpoints.",
    icon: Code,
    href: "#",
  },
  {
    title: "SDKs & Libraries",
    description: "Official client libraries for TypeScript, Python, and Go.",
    icon: Terminal,
    href: "#",
  },
  {
    title: "Guides & Tutorials",
    description: "Step-by-step guides for implementing common authentication and data workflows.",
    icon: Book,
    href: "#",
  },
  {
    title: "Webhooks",
    description: "Listen to real-time events and trigger asynchronous workflows.",
    icon: Zap,
    href: "#",
  },
];

export function DevelopersContent() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          Developer Platform
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Everything you need to build, integrate, and extend the Unstory ecosystem. 
        </motion.p>
      </div>

      {/* Resources Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24"
      >
        {resources.map((resource) => (
          <Link key={resource.title} href={resource.href} className="group block h-full">
              <Card className="h-full bg-muted/20 border-border/50 hover:border-primary/50 hover:bg-muted/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon size={24} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {resource.description}
                  </CardDescription>
                </CardContent>
              </Card>
          </Link>
        ))}
      </motion.div>
      
      {/* Re-use the existing developer platform section from landing page */}
      <DeveloperPlatformSection />
    </>
  );
}
