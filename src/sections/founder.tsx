"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function FounderSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-border/50">
      
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-primary/5 bg-transparent" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 bg-transparent" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/15 bg-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-background relative">
              {/* Replace with actual image later */}
              <AvatarImage src="/shaswat.jpg" alt="Shaswat Raj" className="object-cover" />
              <AvatarFallback className="text-4xl font-semibold bg-muted">SR</AvatarFallback>
            </Avatar>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Shaswat Raj</h3>
          <p className="text-primary font-medium mb-6">Founder & Engineer</p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            "I built Unstory because I believe the tools we use dictate the quality of our output. We're on a mission to craft beautiful, lightning-fast software that gets out of your way and lets you do what you do best."
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/shaswatraj" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://twitter.com/shaswatraj" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://linkedin.com/in/shaswatraj" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:shaswat@unstory.app" className="group flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors ml-4">
              Get in touch
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
