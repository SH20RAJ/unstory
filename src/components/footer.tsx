import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* Brand */}
        <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-foreground rounded-md flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-background font-bold text-xl leading-none">U</span>
            </div>
            <span className="font-semibold text-xl tracking-tight">Unstory</span>
          </Link>
          <p className="text-sm text-muted-foreground w-full max-w-xs mt-2">
            Unstory is a SaaS product studio building powerful AI and productivity tools.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/unstory" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/unstory" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com/company/unstory" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-foreground">Products</h4>
          <Link href="/products/mindos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">MindOS</Link>
          <Link href="/products/creoyt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">CreoYT</Link>
          <Link href="/products/sketchflow" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SketchFlow</Link>
          <Link href="/products/daksha" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Daksha</Link>
          <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products &rarr;</Link>
        </div>

        {/* Developers */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-foreground">Developers</h4>
          <Link href="/developers/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
          <Link href="/developers/api" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API Reference</Link>
          <Link href="/open-source" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Open Source</Link>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-foreground">Company</h4>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
        </div>

      </div>
      
      {/* Bottom Legal */}
      <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Unstory. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
