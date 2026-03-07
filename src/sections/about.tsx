"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-config";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-[#1A1B1C] border border-white/5 relative flex items-center justify-center overflow-hidden"
          >
            {/* Minimalist Visual - Cube or similar per image */}
            <div className="w-1/2 h-1/2 bg-primary/20 backdrop-blur-3xl border-2 border-primary/40 rotate-12 relative">
               <div className="absolute inset-4 border border-primary/20" />
               <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary" />
            </div>
            
            {/* Floating Brand Name */}
            <div className="absolute bottom-8 left-8">
               <span className="text-white font-black uppercase tracking-tighter text-4xl opacity-50">
                 {siteConfig.name}
               </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 uppercase tracking-[0.3em] text-primary font-bold text-sm">
              <div className="w-8 h-px bg-primary" />
              {siteConfig.about.badge}
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-12 leading-[0.9] uppercase tracking-tighter">
              {siteConfig.about.title.split(". ").map((text, i) => (
                 <span key={i} className="block last:text-primary">
                   {text}.
                 </span>
              ))}
            </h2>

            <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-medium max-w-xl">
              {siteConfig.about.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
