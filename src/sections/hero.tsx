"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 w-full h-full bg-background overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-500/20 blur-[120px]"
        />
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm font-medium backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Introducing the Unstory Ecosystem</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/60"
        >
          Build. Launch. <span className="text-primary">Scale.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          Unstory is a premium SaaS product studio building powerful AI and productivity tools to amplify human potential.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" asChild className="rounded-full h-12 px-8 text-base">
            <Link href="/products">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="rounded-full h-12 px-8 text-base bg-background/50 backdrop-blur-sm border-border hover:bg-muted/50">
            <Link href="/contact">Join Early Access</Link>
          </Button>
        </motion.div>

        {/* Abstract Ecosystem Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-5xl mt-20 relative"
        >
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent z-10" />
          <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl p-2 shadow-2xl overflow-hidden glass-panel">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg bg-muted/30 border border-border/30 relative flex items-center justify-center overflow-hidden">
               {/* Abstract floating elements */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }} 
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute left-[20%] top-[30%] w-24 h-24 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)] flex items-center justify-center"
               >
                 <div className="w-8 h-8 rounded-full bg-primary/50" />
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 20, 0] }} 
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute right-[25%] bottom-[25%] w-32 h-32 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center"
               >
                 <div className="w-12 h-12 rounded-lg bg-blue-500/40 rotate-12" />
               </motion.div>

               <motion.div 
                 animate={{ y: [0, -10, 0] }} 
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                 className="z-10 w-48 h-48 rounded-3xl bg-foreground/5 backdrop-blur-xl border border-foreground/10 shadow-2xl flex items-center justify-center"
               >
                 <div className="w-16 h-16 rounded-2xl bg-foreground/20 flex items-center justify-center">
                    <span className="text-foreground font-bold text-3xl">U</span>
                 </div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
