import { 
  Shield, 
  Zap, 
  Wrench, 
  BarChart3, 
  Sparkles, 
  Link as LinkIcon, 
  Leaf 
} from "lucide-react";

export const siteConfig = {
  name: "Unstory",
  description: "High-performance digital experiences and AI-powered infrastructure.",
  url: "https://unstory.app",
  mainNav: [
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  hero: {
    headline: {
      part1: "design.",
      part2: "publish.",
      accent: "prosper."
    },
    subheadline: "Unstory builds high-performance digital experiences and AI-powered infrastructure for the modern internet era.",
    cta: {
      primary: "Explore Products",
      secondary: "Talk to Founder"
    }
  },
  about: {
    badge: "Our Philosophy",
    title: "Minimalism. Performance. Purpose.",
    content: "We believe that the best software is invisible. At Unstory, we obsess over human-machine interaction, building tools that amplify intelligence rather than cluttering it. Our vision is to create a friction-less ecosystem where technology moves at the speed of thought.",
  },
  products: [
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
  ],
  founder: {
    name: "Shaswat Raj",
    role: "Founder & Chief Architect",
    bio: "Building the infrastructure for human potential. Passionate about AI, minimalist design, and extreme performance.",
    twitter: "https://x.com/sh20raj",
    linkedin: "https://linkedin.com/in/sh20raj",
    github: "https://github.com/sh20raj",
  },
  footerLinks: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
    { title: "Contact", href: "/contact" },
  ]
};

export type SiteConfig = typeof siteConfig;
