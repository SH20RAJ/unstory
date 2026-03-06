"use client";

import { motion } from "framer-motion";
import { FounderSection } from "@/sections/founder";

export function AboutContent() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          About Unstory
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          We are an independent SaaS product studio dedicated to building the operating system for human potential.
        </motion.p>
      </div>

      {/* Story Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto prose prose-invert prose-lg mb-24"
      >
        <p className="text-xl leading-relaxed text-muted-foreground mb-8">
          Unstory started with a simple observation: the tools we use to work, think, and create are fundamentally disconnected. We spend more time managing our tools than actually creating.
        </p>
        <p className="text-muted-foreground/80 leading-relaxed mb-8">
          We believe the future of software isn't another all-in-one monolith. It's an ecosystem of specialized, high-performance tools that communicate seamlessly. That's why we build standalone applications that scale gracefully but work magically together.
        </p>
        <p className="text-muted-foreground/80 leading-relaxed mb-8">
          From AI-driven knowledge retrieval in MindOS to intelligent telemetry in Daksha, our mission is to eliminate the friction between thought and output.
        </p>
      </motion.div>

      {/* Run the founder section to show the team */}
      <FounderSection />
    </>
  );
}
