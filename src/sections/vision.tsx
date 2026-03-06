"use client";

import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border/50 relative overflow-hidden bg-muted/20">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight"
            >
              Building the Operating System for <span className="text-primary italic font-serif opacity-90">Human Potential</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary/20 w-16 h-1 mb-6 rounded-full"
            />
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
            >
              Technology should amplify intelligence, not replace it. Unstory engineers tools
              that empower individuals to learn faster, think deeper, and create
              impactful work without friction.
            </motion.p>
          </div>

          {/* Abstract Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative"
          >
              <div className="absolute inset-0 bg-size-[24px_24px] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-border/40 to-transparent opacity-20" />
              
              <div className="w-full h-full rounded-[2rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden backdrop-blur-xl flex flex-col">
                
                {/* Fake App header */}
                <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/20">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 h-4 bg-foreground/10 w-24 rounded-full" />
                </div>
                
                {/* Animated interior */}
                <div className="flex-1 p-6 flex flex-col gap-4 relative">
                  <div className="h-8 w-1/3 bg-foreground/10 rounded-lg animate-pulse" />
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute inset-4 rounded-xl bg-card border border-border/50 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/20" />
                    {/* Placeholder for the OS interface graphic */}
                    <div className="w-full h-full bg-muted/20 flex flex-col p-4 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                        </div>
                        <div className="h-2 w-16 bg-foreground/10 rounded-full" />
                      </div>
                      
                      {/* Lines resembling an interface */}
                      <div className="space-y-3 mb-6">
                        <div className="h-4 w-3/4 bg-foreground/5 rounded-lg" />
                        <div className="h-4 w-5/6 bg-foreground/5 rounded-lg" />
                        <div className="h-4 w-2/3 bg-foreground/5 rounded-lg mb-4" />
                        
                        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-background" />
                        <div className="flex-1 rounded-xl bg-linear-to-tr from-primary/10 to-transparent border border-primary/20 relative overflow-hidden">
                          <motion.div 
                            className="absolute left-0 top-0 w-1/2 h-full bg-primary/20 blur-2xl"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
