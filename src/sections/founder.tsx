"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function FounderSection() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden border-t border-white/5">
      
      {/* Sophisticated Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Avatar Area */}
          <div className="relative group mb-12">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 bg-linear-to-r from-primary/20 via-transparent to-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition duration-700" 
            />
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-primary/30 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500" />
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-white/10 relative shadow-2xl">
              <AvatarImage src="https://i.pinimg.com/1200x/c2/df/c2/c2dfc21afbd68d306c357dd78fc2572e.jpg" alt="Shaswat Raj" className="object-cover" />
              <AvatarFallback className="text-2xl font-black bg-white/5 text-white/50">SR</AvatarFallback>
            </Avatar>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-bold tracking-widest uppercase"
          >
            Founder&apos;s Vision
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 text-white leading-[1.1]">
            &quot;We build the tools we <br />
            <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent italic">wish existed</span> for ourselves.&quot;
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl font-medium">
            At Unstory, we obsess over human-machine interaction. Our goal is to craft digital environments that move at the speed of thought.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="https://github.com/sh20raj" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-2xl transition-all duration-300">
                <Github size={22} />
              </a>
              <a href="https://twitter.com/sh20raj" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-2xl transition-all duration-300">
                <Twitter size={22} />
              </a>
              <a href="https://linkedin.com/in/sh20raj" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-2xl transition-all duration-300">
                <Linkedin size={22} />
              </a>
            </div>
            
            <a href="mailto:founder@unstory.app" className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white font-bold transition-all duration-300 flex items-center gap-3">
              <span>Connect Privately</span>
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                <ArrowUpRight size={12} className="text-primary group-hover:text-white transition-colors" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
