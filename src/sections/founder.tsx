"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function FounderSection() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden border-t border-border">

      {/* Subtle Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[100px] opacity-50" />
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
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border border-border relative shadow-lg">
              <AvatarImage src="https://i.pinimg.com/1200/c2/df/c2/c2dfc21afbd68d306c357dd78fc2572e.jpg" alt="Shaswat Raj" className="object-cover" />
              <AvatarFallback className="text-2xl font-bold bg-secondary/50 text-muted-foreground">SR</AvatarFallback>
            </Avatar>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-foreground/60 text-xs font-medium tracking-widest uppercase"
          >
            Founder&apos;s Vision
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 text-foreground leading-[1.1]">
            &quot;We build the tools we <br />
            <span className="text-foreground italic">wish existed</span> for ourselves.&quot;
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            At Unstory, we obsess over human-machine interaction. Our goal is to craft digital environments that move at the speed of thought.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="https://github.com/sh20raj" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-border rounded-2xl transition-all duration-300">
                <Github size={22} />
              </a>
              <a href="https://twitter.com/sh20raj" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-border rounded-2xl transition-all duration-300">
                <Twitter size={22} />
              </a>
              <a href="https://linkedin.com/in/sh20raj" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-border rounded-2xl transition-all duration-300">
                <Linkedin size={22} />
              </a>
            </div>

            <a href="mailto:founder@unstory.app" className="group relative px-8 py-3 rounded-full bg-secondary/50 border border-border hover:border-foreground/50 text-foreground font-medium transition-all duration-300 flex items-center gap-3">
              <span>Connect Privately</span>
              <div className="w-6 h-6 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-foreground transition-colors">
                <ArrowUpRight size={12} className="text-foreground group-hover:text-background transition-colors" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
