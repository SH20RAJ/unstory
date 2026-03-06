"use client";

import { motion } from "framer-motion";
import { OpenSourceSection } from "@/sections/open-source";

export function OpenSourceContent() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          Open Source
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Sponsoring maintainers, building in public, and contributing back to the ecosystem that made Unstory possible.
        </motion.p>
      </div>
      
      {/* Re-use the existing OS section from landing page without border */}
      <div className="border-t-0">
         <OpenSourceSection />
      </div>
    </>
  );
}
