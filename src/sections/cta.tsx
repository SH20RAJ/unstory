"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-64 flex flex-col items-center justify-center overflow-hidden bg-background">

      {/* Subtle Background */}
      <div className="absolute inset-0 w-full h-full -z-10 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 inline-flex items-center rounded-full border border-border bg-secondary/50 px-6 py-2 text-sm font-medium text-foreground backdrop-blur-sm"
        >
          <Sparkles className="mr-3 h-5 w-5 text-foreground" />
          Ready to transcend the ordinary?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-10 text-foreground leading-[0.9]"
        >
          Join the <br />
          <span className="text-foreground italic">Ecosystem.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-xl md:text-3xl text-muted-foreground mb-16 leading-relaxed"
        >
          High-performance tools for high-performance builders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto"
        >
          <Button size="lg" asChild className="rounded-full h-16 px-12 text-xl font-medium bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
          <Button size="lg" variant="ghost" asChild className="rounded-full h-16 px-12 text-xl font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
