"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, LucideIcon, ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image?: string;
  favicon?: string;
  delay?: number;
}

export function ProductCard({
  name,
  description,
  href,
  icon: Icon,
  image,
  favicon,
  delay = 0,
}: ProductCardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Link href={href} className="block relative h-full">
        <div className="flex flex-col h-full bg-[#161718] border border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden">
          
          {/* Static Branding Bar */}
          <div className="h-2 w-full bg-[#1A1B1C] group-hover:bg-primary transition-colors duration-500" />
          
          {/* Image/Visual Area */}
          <div className="relative aspect-video overflow-hidden bg-[#111213]">
            {!imageError && image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#111213]">
                <Icon className="w-16 h-16 text-white/5 group-hover:text-primary transition-colors duration-500" />
              </div>
            )}
            
            {/* Hover Icon Overlay */}
            <div className="absolute top-6 right-6 p-3 bg-black/80 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-5 h-5 text-primary" />
            </div>
          </div>

          <div className="p-8 flex flex-col flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-black">
                 <Icon size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white">
                {name}
              </h3>
            </div>
            
            <p className="text-white/40 font-medium leading-relaxed mb-8 flex-1 group-hover:text-white/60 transition-colors">
              {description}
            </p>

            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
               Launch Project <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
