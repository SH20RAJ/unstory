"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-background">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/30 blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -right-[15%] w-[50%] h-[70%] rounded-full bg-blue-500/20 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--background),0.8)_100%)]" />
      </div>

      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold backdrop-blur-xl shadow-2xl"
        >
          <Sparkles className="mr-2 h-4 w-4 text-primary animate-pulse" />
          <span className="bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">Next-Gen SaaS Studio</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
            Design.<br />
            Publish.<br />
            <span className="bg-linear-to-b from-primary to-primary/50 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">Prosper.</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[750px] text-lg md:text-2xl text-muted-foreground mb-12 leading-relaxed font-medium"
        >
          Unstory builds high-performance digital experiences and AI-powered infrastructure for the modern internet era.
        </motion.p>

        {/* Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
        >
          <Button size="lg" asChild className="rounded-full h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:scale-105 transition-all duration-300">
            <Link href="/products">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Link href="/contact" className="text-lg font-bold text-white/70 hover:text-white transition-colors group flex items-center gap-2">
            Talk to Founder
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:translate-x-1 transition-all">
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
          <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-4 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="w-full h-[400px] md:h-[500px] rounded-[32px] bg-black/40 border border-white/5 relative flex items-center justify-center overflow-hidden">
               {/* Animated floating orbs in background */}
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 className="absolute w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent,rgba(var(--primary),0.1),transparent)]"
               />
               
               {/* Core Visual */}
               <motion.div
                 animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="z-20 w-48 h-48 md:w-64 md:h-64 rounded-[48px] bg-linear-to-br from-white/10 to-white/5 backdrop-blur-3xl border border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 transition-transform duration-700"
               >
                 <div className="w-24 h-24 md:w-32 md:h-32 rounded-[32px] bg-primary flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary),0.5)]">
                    <span className="text-white font-black text-5xl md:text-7xl drop-shadow-lg">U</span>
                 </div>
               </motion.div>
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, 30, 0], x: [0, 10, 0] }} 
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute left-[15%] top-[20%] w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
               />
               <motion.div 
                 animate={{ y: [0, -30, 0], x: [0, -10, 0] }} 
                 transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                 className="absolute right-[15%] bottom-[20%] w-32 h-32 rounded-3xl bg-primary/10 backdrop-blur-xl border border-primary/20 shadow-2xl"
               />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
