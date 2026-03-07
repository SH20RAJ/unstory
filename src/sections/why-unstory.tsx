"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cpu, Globe2, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Innovation First",
    description: "We constantly research and deploy cutting-edge technologies to solve complex problems with elegant solutions.",
    icon: Lightbulb,
  },
  {
    title: "AI Native",
    description: "Artificial Intelligence is built into our core, automating the mundane and amplifying the creative.",
    icon: Cpu,
  },
  {
    title: "Global Vision",
    description: "Built for distributed teams and a remote-first world, ensuring seamless collaboration across continents.",
    icon: Globe2,
  },
  {
    title: "Builder Focused",
    description: "Extensible designs and open source foundations built for the next generation of creators.",
    icon: Code2,
  },
];

export function WhyUnstorySection() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 text-xs font-bold tracking-widest uppercase"
          >
            The Advantage
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-white"
          >
            Why Choose <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent">Unstory</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium"
          >
            Designed with first principles to deliver unmatched performance, aesthetics, and utility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-(--glass-blur) border border-white/10 hover:border-primary/50 transition-all duration-500 relative flex flex-col p-6 rounded-[32px] overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute -inset-20 bg-primary/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <CardHeader className="p-0 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                    <feature.icon size={28} />
                  </div>
                </CardHeader>
                <CardContent className="p-0 relative z-10">
                  <CardTitle className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-base font-medium leading-relaxed text-muted-foreground group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
