"use client";

import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase"
            >
              Our Philosophy
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[1.1]"
            >
              The OS for <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent">Human Potential</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-xl"
            >
              Technology should amplify intelligence, not replace it. We engineer friction-less environments that empower you to think deeper and create at scale.
            </motion.p>
          </div>

          {/* Abstract Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 w-full relative group"
          >
              {/* Outer Glow */}
              <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="w-full aspect-4/3 rounded-[48px] bg-white/5 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-3xl flex flex-col p-2">
                
                {/* Visual Interface Mock - "Spending Insights" style from image */}
                <div className="flex-1 rounded-[40px] bg-black/40 border border-white/5 overflow-hidden flex flex-col">
                  {/* Top Bar */}
                  <div className="h-16 flex items-center justify-between px-8 border-b border-white/5 bg-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30" />
                      <div className="h-3 w-20 bg-white/10 rounded-full" />
                    </div>
                  </div>

                  {/* Interior Content */}
                  <div className="flex-1 p-8 grid grid-cols-2 gap-6">
                    {/* Large Card */}
                    <div className="col-span-2 h-44 rounded-3xl bg-linear-to-br from-primary/20 via-primary/5 to-transparent border border-white/10 p-6 flex flex-col justify-end relative overflow-hidden group/card">
                       <motion.div 
                         animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                         transition={{ duration: 8, repeat: Infinity }}
                         className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full blur-[60px]"
                       />
                       <div className="relative z-10">
                         <div className="text-white/40 text-sm font-bold uppercase tracking-wider mb-2">Total Output</div>
                         <div className="text-4xl md:text-5xl font-black text-white">$49,640.00</div>
                       </div>
                    </div>

                    {/* Smaller Cards */}
                    <div className="h-40 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between">
                       <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500" />
                       </div>
                       <div className="h-2 w-full bg-white/10 rounded-full" />
                       <div className="h-6 w-2/3 bg-white/20 rounded-lg" />
                    </div>
                    <div className="h-40 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative">
                       <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-primary" />
                       </div>
                       <motion.div 
                         animate={{ x: ["-100%", "100%"] }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                         className="h-24 w-full bg-linear-to-t from-primary/10 to-transparent absolute bottom-0 left-0"
                       />
                       <div className="h-6 w-full bg-white/20 rounded-lg relative z-10" />
                    </div>
                  </div>
                </div>

              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
