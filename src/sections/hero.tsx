"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--background),0.9)_100%)]" />
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-4 w-4 text-foreground" />
          <span className="text-foreground/80">SaaS Studio</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] text-foreground">
            Design.<br />
            Publish.<br />
            <span className="text-foreground">Prosper.</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[750px] text-lg md:text-2xl text-muted-foreground mb-12 leading-relaxed"
        >
          Unstory builds high-performance digital experiences for the modern internet era.
        </motion.p>

        {/* Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
        >
          <Button size="lg" asChild className="rounded-full h-14 px-10 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300">
            <Link href="/products">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Link href="/contact" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2">
            Talk to Founder
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-foreground/50 group-hover:translate-x-1 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>

        {/* Central Visual Element */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-24 relative w-full max-w-4xl perspective-[2000px]"
        >
          <div className="relative rounded-[40px] border border-border bg-secondary/30 backdrop-blur-sm p-4 shadow-xl overflow-hidden">
            <div className="w-full h-[400px] md:h-[500px] rounded-[32px] bg-background border border-border relative flex items-center justify-center overflow-hidden">
               {/* Core Visual */}
               <motion.div
                 animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="z-20 w-48 h-48 md:w-64 md:h-64 rounded-[48px] bg-secondary/50 backdrop-blur-sm border border-border shadow-xl flex items-center justify-center"
               >
                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-[32px] bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-5xl md:text-7xl">U</span>
                 </div>
               </motion.div>

               {/* Floating elements */}
               <motion.div
                 animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute left-[15%] top-[20%] w-24 h-24 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border shadow-xl"
               />
               <motion.div
                 animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                 className="absolute right-[15%] bottom-[20%] w-32 h-32 rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border shadow-xl"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
