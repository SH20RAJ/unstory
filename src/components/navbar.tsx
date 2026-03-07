"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-6 pointer-events-none">
      <nav
        className={`mx-auto max-w-7xl h-16 flex items-center justify-between border-b transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? "border-primary/20 bg-background/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-xs rotate-45 group-hover:rotate-0 transition-transform duration-500">
             <span className="text-primary-foreground font-black text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">U</span>
          </div>
          <span className="font-black text-2xl tracking-tighter text-white uppercase">{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.mainNav.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase text-white/50 hover:text-primary transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
          <Button asChild className="rounded-none bg-primary hover:bg-white text-primary-foreground font-black uppercase tracking-widest h-11 px-8 transition-all duration-300">
            <Link href="/products">Join</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-40 md:hidden pointer-events-auto p-12 flex flex-col justify-center gap-12"
          >
            <div className="flex flex-col gap-8">
              {siteConfig.mainNav.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-black tracking-tighter text-white hover:text-primary transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <Button asChild className="w-full h-20 rounded-none bg-primary text-2xl font-black uppercase tracking-widest text-primary-foreground">
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
                Join Now
              </Link>
            </Button>
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
