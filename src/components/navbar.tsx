"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Open Source", href: "/open-source" },
  { name: "Blog", href: "https://blog.unstory.app" },
  { name: "About", href: "/about" },
];

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
    <header className="fixed top-4 w-full z-50 px-4 md:px-8 pointer-events-none">
      <nav
        className={`mx-auto max-w-5xl h-14 md:h-16 flex items-center justify-between rounded-full border px-6 transition-all duration-500 pointer-events-auto shadow-2xl ${
          isScrolled
            ? "bg-background/40 backdrop-blur-xl border-white/10"
            : "bg-background/20 backdrop-blur-md border-white/5"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-primary shadow-sm group-hover:opacity-80 transition-all duration-300">
             <span className="text-primary-foreground font-bold text-lg">U</span>
          </div>
          <span className="font-semibold text-lg tracking-tight text-foreground">Unstory</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-border backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 shadow-sm hover:scale-105 transition-all duration-300 active:scale-95">
            <Link href="/products">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-full hover:bg-secondary/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-18 left-4 right-4 bg-background/80 backdrop-blur-xl border border-border rounded-3xl shadow-xl md:hidden overflow-hidden pointer-events-auto"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors px-6 py-4 hover:bg-secondary/50 rounded-2xl"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-2 px-2 pb-2">
                <Button asChild className="w-full h-14 rounded-2xl bg-primary text-lg font-medium">
                  <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
