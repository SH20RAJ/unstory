"use client";
import { 
  Shield, 
  Zap, 
  Wrench, 
  BarChart3, 
  Sparkles, 
  Link as LinkIcon, 
  Leaf 
} from "lucide-react";
import { ProductCard } from "@/components/product-card";

const products = [
  {
    name: "FormGuard",
    description: "AI-powered form backend. Capture submissions, block spam at the edge, and get deep insights instantly.",
    href: "https://formguard.unstory.app/",
    icon: Shield,
    image: "https://formguard.unstory.app/og.png",
    favicon: "https://formguard.unstory.app/favicon.ico",
    delay: 0.1,
  },
  {
    name: "IndexFast",
    description: "Get indexed in minutes. Automatically submit your URLs to Google, Bing, and Yandex to boost your SEO.",
    href: "https://indexfast.unstory.app/",
    icon: Zap,
    image: "https://indexfast.unstory.app/og.png",
    favicon: "https://indexfast.unstory.app/favicon.ico",
    delay: 0.2,
  },
  {
    name: "30Tools",
    description: "A curated collection of fast, free, and privacy-focused tools for every creative and professional need.",
    href: "https://30tools.com/",
    icon: Wrench,
    image: "https://30tools.com/og.png",
    favicon: "https://30tools.com/favicon.ico",
    delay: 0.3,
  },
  {
    name: "Daksha",
    description: "The next-generation telemetry and analytics platform for modern builders who ship fast.",
    href: "https://daksha.live/",
    icon: BarChart3,
    image: "https://daksha.live/og.png",
    favicon: "https://daksha.live/favicon.ico",
    delay: 0.4,
  },
  {
    name: "Unstory Space",
    description: "A minimalist space for sharing knowledge and perspectives without the noise of social media.",
    href: "https://unstory.live/",
    icon: Sparkles,
    image: "https://unstory.live/og.png",
    favicon: "https://unstory.live/favicon.ico",
    delay: 0.5,
  },
  {
    name: "Wify",
    description: "Stop losing engagement. Open Instagram, YouTube, and TikTok links directly in native apps.",
    href: "https://wify.my/",
    icon: LinkIcon,
    image: "https://wify.my/og.png",
    favicon: "https://wify.my/favicon.ico",
    delay: 0.6,
  },
  {
    name: "KishanAI",
    description: "India's first AI agricultural assistant. AI-powered crop detection and expert advice in your language.",
    href: "https://kishanai.strivio.world/?ref=producthunt",
    icon: Leaf,
    image: "https://kishanai.strivio.world/og.png",
    favicon: "https://kishanai.strivio.world/favicon.ico",
    delay: 0.7,
  },
];

export function EcosystemSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative" id="ecosystem">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The Unstory Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A specialized suite of applications designed to amplify intelligence, streamline creativity, and optimize productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
