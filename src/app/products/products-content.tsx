"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Wrench, 
  BarChart3, 
  Sparkles, 
  Link as LinkIcon, 
  Leaf,
  Search 
} from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "FormGuard",
    description: "AI-powered form backend. Capture submissions, block spam at the edge, and get deep insights instantly.",
    href: "https://formguard.strivio.world/",
    icon: Shield,
    image: "https://formguard.strivio.world/og.png",
    favicon: "https://formguard.strivio.world/favicon.ico",
    delay: 0.1,
    category: "AI & Data",
  },
  {
    name: "IndexFast",
    description: "Get indexed in minutes. Automatically submit your URLs to Google, Bing, and Yandex to boost your SEO.",
    href: "https://indexfast.strivio.world/",
    icon: Zap,
    image: "https://indexfast.strivio.world/og.png",
    favicon: "https://indexfast.strivio.world/favicon.ico",
    delay: 0.2,
    category: "SEO",
  },
  {
    name: "30Tools",
    description: "A curated collection of fast, free, and privacy-focused tools for every creative and professional need.",
    href: "https://30tools.com/",
    icon: Wrench,
    image: "https://30tools.com/og.png",
    favicon: "https://30tools.com/favicon.ico",
    delay: 0.3,
    category: "Productivity",
  },
  {
    name: "Daksha",
    description: "The next-generation telemetry and analytics platform for modern builders who ship fast.",
    href: "https://daksha.live/",
    icon: BarChart3,
    image: "https://daksha.live/og.png",
    favicon: "https://daksha.live/favicon.ico",
    delay: 0.4,
    category: "Analytics",
  },
  {
    name: "Unstory Space",
    description: "A minimalist space for sharing knowledge and perspectives without the noise of social media.",
    href: "https://unstory.live/",
    icon: Sparkles,
    image: "https://unstory.live/og.png",
    favicon: "https://unstory.live/favicon.ico",
    delay: 0.5,
    category: "Social",
  },
  {
    name: "Wify",
    description: "Stop losing engagement. Open Instagram, YouTube, and TikTok links directly in native apps.",
    href: "https://wify.my/",
    icon: LinkIcon,
    image: "https://wify.my/og.png",
    favicon: "https://wify.my/favicon.ico",
    delay: 0.6,
    category: "Social",
  },
  {
    name: "KishanAI",
    description: "India's first AI agricultural assistant. AI-powered crop detection and expert advice in your language.",
    href: "https://kishanai.strivio.world/?ref=producthunt",
    icon: Leaf,
    image: "https://kishanai.strivio.world/og.png",
    favicon: "https://kishanai.strivio.world/favicon.ico",
    delay: 0.7,
    category: "AI & Agri",
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
