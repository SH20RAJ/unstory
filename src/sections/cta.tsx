"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-64 flex flex-col items-center justify-center overflow-hidden bg-background">
      
      {/* High-Impact Background Visuals */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-background overflow-hidden">
        <motion.div
           animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px]"
        />
        <motion.div
           animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]"
        />
        
        {/* Animated Grid Overlay */}
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] opacity-20" 
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-bold text-primary backdrop-blur-3xl shadow-2xl"
        >
          <Sparkles className="mr-3 h-5 w-5 text-primary animate-pulse" />
          Ready to transcend the ordinary?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 text-white leading-[0.9]"
        >
          Join the <br /> 
          <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent italic drop-shadow-[0_0_30px_rgba(var(--primary),0.3)]">Ecosystem.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl md:text-3xl text-muted-foreground mb-16 leading-relaxed font-medium"
        >
          High-performance tools for high-performance builders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto"
        >
          <Button size="lg" asChild className="rounded-full h-16 px-12 text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_50px_rgba(var(--primary),0.4)] hover:scale-110 transition-all duration-300">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild className="rounded-full h-16 px-12 text-xl font-bold text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
