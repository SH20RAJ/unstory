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
    title: "AI Driven Tools",
    description: "Artificial Intelligence is native to our ecosystem, automating the mundane and amplifying the creative.",
    icon: Cpu,
  },
  {
    title: "Global by Default",
    description: "Built for distributed teams and a remote-first world, ensuring seamless collaboration across timezones.",
    icon: Globe2,
  },
  {
    title: "Developer Friendly",
    description: "Extensible APIs, comprehensive documentation, and open source foundations built for builders.",
    icon: Code2,
  },
];

export function WhyUnstorySection() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Why Choose Unstory
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Designed with first principles thinking to deliver unmatched performance, aesthetics, and utility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-muted/20 border-border/50 hover:bg-muted/40 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <feature.icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
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
