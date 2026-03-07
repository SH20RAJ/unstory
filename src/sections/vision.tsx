"use client";

import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-foreground/60 text-xs font-medium tracking-widest uppercase"
            >
              Our Philosophy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8 leading-[1.1]"
            >
              The OS for <span className="text-foreground">Human Potential</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl"
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
            className="lg:w-1/2 w-full relative"
          >
              <div className="w-full aspect-4/3 rounded-[48px] bg-secondary/30 border border-border shadow-xl relative overflow-hidden backdrop-blur-sm flex flex-col p-2">

                {/* Visual Interface Mock */}
                <div className="flex-1 rounded-[40px] bg-background border border-border overflow-hidden flex flex-col">
                  {/* Top Bar */}
                  <div className="h-16 flex items-center justify-between px-8 border-b border-border bg-secondary/30">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                      <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                      <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-border" />
                      <div className="h-3 w-20 bg-muted-foreground/20 rounded-full" />
                    </div>
                  </div>

                  {/* Interior Content */}
                  <div className="flex-1 p-8 grid grid-cols-2 gap-6">
                    {/* Large Card */}
                    <div className="col-span-2 h-44 rounded-3xl bg-secondary/50 border border-border p-6 flex flex-col justify-end relative overflow-hidden">
                       <div className="relative z-10">
                         <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-2">Total Output</div>
                         <div className="text-4xl md:text-5xl font-bold text-foreground">$49,640.00</div>
                       </div>
                    </div>

                    {/* Smaller Cards */}
                    <div className="h-40 rounded-3xl bg-secondary/30 border border-border p-6 flex flex-col justify-between">
                       <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-foreground/50" />
                       </div>
                       <div className="h-2 w-full bg-muted-foreground/20 rounded-full" />
                       <div className="h-6 w-2/3 bg-muted-foreground/30 rounded-lg" />
                    </div>
                    <div className="h-40 rounded-3xl bg-secondary/30 border border-border p-6 flex flex-col justify-between overflow-hidden relative">
                       <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-foreground/50" />
                       </div>
                       <div className="h-6 w-full bg-muted-foreground/30 rounded-lg relative z-10" />
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
