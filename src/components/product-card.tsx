"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  delay?: number;
}

export function ProductCard({ name, description, href, icon: Icon, delay = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <Link href={href} className="block group h-full">
        <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-colors duration-300 relative overflow-hidden">
          {/* Subtle gradient orb on hover */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <CardHeader className="relative z-10 flex flex-row items-center justify-between pb-2">
            <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <Icon size={20} />
            </div>
            <ExternalLink size={16} className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </CardHeader>
          <CardContent className="relative z-10">
            <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors">{name}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
