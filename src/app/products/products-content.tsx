"use client";

import { motion } from "framer-motion";
import { BrainCircuit, BookOpen, Layers, Laptop, PenTool, Search } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "MindOS",
    description: "Your second brain, powered by AI. Organize thoughts, retrieve knowledge instantly, and connect ideas seamlessly.",
    href: "https://mindos.unstory.app",
    icon: BrainCircuit,
    delay: 0.1,
    category: "AI",
  },
  {
    name: "CreoYT",
    description: "The ultimate YouTube creator suite. Analyze engaging topics, script videos, and generate thumbnails effortlessly.",
    href: "https://creoyt.unstory.app",
    icon: Laptop,
    delay: 0.2,
    category: "Creator Tools",
  },
  {
    name: "SketchFlow",
    description: "Collaborative whiteboarding and UI/UX wireframing for remote product teams.",
    href: "https://sketchflow.unstory.app",
    icon: PenTool,
    delay: 0.3,
    category: "Design",
  },
  {
    name: "Daksha",
    description: "Intelligent analytics and telemetry for modern SaaS applications.",
    href: "https://daksha.unstory.app",
    icon: Layers,
    delay: 0.4,
    category: "Analytics",
  },
  {
    name: "30Tools",
    description: "A curated collection of 30 micro-tools designed to save time for developers and designers everyday.",
    href: "https://tools.unstory.app",
    icon: BookOpen,
    delay: 0.5,
    category: "Productivity",
  },
];

export function ProductsContent() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          The Unstory Ecosystem
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Explore our suite of specialized applications designed to amplify intelligence, streamline creativity, and optimize productivity.
        </motion.p>
      </div>

      {/* Filters/Search (Mocked UI) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-12"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search products..." className="pl-10 h-12 bg-muted/20 border-border/50 focus:border-primary" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <Button variant="secondary" className="h-12 whitespace-nowrap">All Products</Button>
          <Button variant="outline" className="h-12 whitespace-nowrap bg-background">AI</Button>
          <Button variant="outline" className="h-12 whitespace-nowrap bg-background">Creator Tools</Button>
          <Button variant="outline" className="h-12 whitespace-nowrap bg-background">Design</Button>
          <Button variant="outline" className="h-12 whitespace-nowrap bg-background">Analytics</Button>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </>
  );
}
