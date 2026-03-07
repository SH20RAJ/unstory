"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      
      {/* High-Contrast Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,255,138,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] font-black uppercase text-white mb-8">
              {siteConfig.hero.headline.part1} <br />
              {siteConfig.hero.headline.part2} <br />
              <span className="italic-accent block mt-4 drop-shadow-[0_0_15px_rgba(88,255,138,0.3)]">
                {siteConfig.hero.headline.accent}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-start md:items-end gap-12 mt-16"
          >
            <p className="max-w-lg text-xl md:text-2xl text-white/40 leading-relaxed font-medium">
              {siteConfig.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button size="lg" asChild className="h-16 px-10 rounded-none bg-primary hover:bg-white text-primary-foreground font-black uppercase tracking-widest transition-all duration-300">
                <Link href={siteConfig.mainNav[0].href}>
                  {siteConfig.hero.cta.primary}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-16 px-10 rounded-none border-2 border-white/10 hover:border-primary text-white font-black uppercase tracking-widest transition-all duration-300">
                <Link href="/contact">{siteConfig.hero.cta.secondary}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Brand Element */}
      <div className="absolute bottom-12 right-12 hidden lg:block overflow-hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-end opacity-20"
        >
          <span className="text-[10rem] font-black leading-none uppercase select-none tracking-tighter">
            {siteConfig.name}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
