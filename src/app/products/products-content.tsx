"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-config";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";

export function ProductsContent() {
  return (
    <div className="pt-12">
      {/* Minimal Header */}
      <div className="flex flex-col mb-20">
        <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-primary font-bold text-xs">
          <div className="w-8 h-px bg-primary" />
          Ecosystem
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none"
        >
          Built with <br />
          <span className="italic-accent lowercase tracking-normal">Purpose.</span>
        </motion.h1>
      </div>

      {/* Simplified Search */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl group mb-20"
      >
        <div className="relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-primary transition-colors w-5 h-5" />
          <Input 
            placeholder="Search the ecosystem..." 
            className="pl-8 h-12 bg-transparent border-0 border-b border-white/10 rounded-none focus-visible:ring-0 focus:border-primary placeholder:text-white/10 text-white font-bold uppercase tracking-widest text-xs transition-all" 
          />
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/5">
        {siteConfig.products.map((product) => (
          <div key={product.name} className="border-r border-b border-white/5">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
