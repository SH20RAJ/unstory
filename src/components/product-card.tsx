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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Link href={href} className="block group h-full">
        <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-500 relative overflow-hidden flex flex-col">
          {/* Project Preview Image */}
          {image && (
            <div className="relative h-48 w-full overflow-hidden border-b border-border/50">
              <Image 
                src={image} 
                alt={`${name} preview`} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
          )}
          
          {/* Subtle gradient orb on hover */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <CardHeader className="relative z-10 flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                {favicon ? (
                  <Image 
                    src={favicon} 
                    alt="" 
                    width={24} 
                    height={24} 
                    className="object-contain"
                    unoptimized
                  />
                ) : (
                  <Icon size={20} />
                )}
              </div>
              <div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{name}</CardTitle>
              </div>
            </div>
            <ExternalLink size={16} className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </CardHeader>
          <CardContent className="relative z-10 flex-1">
            <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
