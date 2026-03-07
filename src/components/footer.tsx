"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site-config";

export function Footer() {
  return (
    <footer className="w-full bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-xs rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <span className="text-primary-foreground font-black text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-500">U</span>
              </div>
              <span className="font-black text-xl tracking-tighter text-white uppercase">{siteConfig.name}</span>
            </Link>
            
            <p className="max-w-xs text-sm font-medium text-white/30 leading-relaxed uppercase tracking-widest">
              Unstory is a SaaS product studio building powerful AI and productivity tools.
            </p>
          </div>

          {/* Legal & Copyright */}
          <div className="flex flex-col md:items-end gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
            <div className="flex gap-8">
              <Link href="/privacy" className="text-white/40 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
            
            <p className="text-white/20 whitespace-nowrap">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
