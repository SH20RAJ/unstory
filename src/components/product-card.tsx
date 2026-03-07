"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image?: string;
  favicon?: string;
  delay?: number;
}

export function ProductCard({ name, description, href, icon: Icon, image, favicon, delay = 0 }: ProductCardProps) {
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Link href={href} className="block group h-full">
        <Card className="h-full bg-card backdrop-blur-(--glass-blur) border-glass-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden flex flex-col shadow-xl">
          {/* Project Preview Image */}
          <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-white/5">
            {image && !imageError ? (
              <>
                <Image 
                  src={image} 
                  alt={`${name} preview`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-white/5 to-transparent group-hover:scale-110 transition-transform duration-700">
                <Icon size={48} className="text-muted-foreground/10 group-hover:text-primary/30 transition-colors" />
              </div>
            )}
          </div>
          
          {/* Accent Glow on Hover */}
          <div className="absolute -inset-24 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <CardHeader className="relative z-10 flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300 shadow-inner">
                {favicon ? (
                  <Image 
                    src={favicon} 
                    alt="" 
                    width={28} 
                    height={28} 
                    className="object-contain"
                    unoptimized
                  />
                ) : (
                  <Icon size={24} />
                )}
              </div>
              <div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors tracking-tight">{name}</CardTitle>
              </div>
            </div>
            <ExternalLink size={18} className="text-muted-foreground/50 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
          </CardHeader>
          <CardContent className="relative z-10 flex-1">
            <CardDescription className="text-sm font-medium leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
