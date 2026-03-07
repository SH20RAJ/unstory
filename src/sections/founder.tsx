"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-config";
import { Github, Twitter, Linkedin, Quote } from "lucide-react";
import Link from "next/link";

export function FounderSection() {
  const { founder } = siteConfig;

  return (
    <section className="py-24 md:py-48 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-12 mb-12">
            <div className="inline-flex items-center gap-2 mb-8 uppercase tracking-[0.3em] text-primary font-bold text-xs">
              <div className="w-8 h-px bg-primary" />
              Leadership
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              The <span className="italic-accent text-primary">Founder.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="aspect-4/5 bg-[#161718] border border-white/10 relative overflow-hidden">
              {/* Placeholder for Founder Image */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,255,138,0.1),transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0">
                 <span className="text-[15rem] font-black text-white/5 uppercase select-none leading-none">
                   {founder.name.split(" ")[0][0]}
                 </span>
              </div>
              
              {/* High-Contrast Frame */}
              <div className="absolute inset-8 border border-white/5 group-hover:border-primary/20 transition-colors duration-500" />
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary group-hover:w-full group-hover:h-2 transition-all duration-500" />
            </div>

            <div className="mt-8 flex gap-6">
              <Link href={founder.twitter} className="text-white/20 hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href={founder.linkedin} className="text-white/20 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href={founder.github} className="text-white/20 hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-12"
          >
            <Quote className="w-16 h-16 text-primary/20" />
            
            <div className="space-y-6">
               <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                 {founder.name}
               </h3>
               <p className="text-primary font-black uppercase tracking-[0.2em] text-sm">
                 {founder.role}
               </p>
            </div>

            <p className="text-2xl md:text-3xl text-white/40 leading-tight font-medium max-w-2xl">
              &ldquo;{founder.bio}&rdquo;
            </p>

            <div className="pt-8 border-t border-white/5">
               <div className="flex items-center gap-8">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Focus</span>
                     <span className="text-white font-bold uppercase tracking-widest text-xs">AI & Systems</span>
                  </div>
                  <div className="w-px h-8 bg-white/5" />
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-1">Philosophy</span>
                     <span className="text-white font-bold uppercase tracking-widest text-xs">Extreme Minimalism</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
