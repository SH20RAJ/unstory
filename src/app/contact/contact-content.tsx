"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { siteConfig } from "@/config/site-config";

export function ContactContent() {
  return (
    <div className="pt-12">
      {/* Minimal Header */}
      <div className="flex flex-col mb-20">
        <div className="inline-flex items-center gap-2 mb-6 uppercase tracking-[0.3em] text-primary font-bold text-xs">
          <div className="w-8 h-px bg-primary" />
          General Inquiries
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none"
        >
          Let&apos;s talk <br />
          <span className="italic-accent lowercase tracking-normal">Business.</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="space-y-12"
        >
          <p className="text-2xl text-white/40 leading-relaxed font-medium">
            Have a question about our products, enterprise pricing, or partnership opportunities? <br />
            Send us a message and we&apos;ll get back to you shortly.
          </p>

          <div className="space-y-8">
            <div className="flex flex-col">
               <span className="text-primary font-black uppercase tracking-widest text-xs mb-2">Direct Mail</span>
               <Link href="mailto:contact@unstory.app" className="text-3xl font-black text-white hover:text-primary transition-colors">
                 contact@unstory.app
               </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.2 }}
        >
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-white/20">Name</label>
                <Input placeholder="Your Name" className="bg-transparent border-0 border-b border-white/10 rounded-none focus:border-primary px-0 h-10 font-bold uppercase tracking-widest text-xs" />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-white/20">Email</label>
                <Input placeholder="Your Email" type="email" className="bg-transparent border-0 border-b border-white/10 rounded-none focus:border-primary px-0 h-10 font-bold uppercase tracking-widest text-xs" />
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-white/20">Purpose</label>
              <Input placeholder=" parceria / enterprise / inquiry" className="bg-transparent border-0 border-b border-white/10 rounded-none focus:border-primary px-0 h-10 font-bold uppercase tracking-widest text-xs" />
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-white/20">Message</label>
              <Textarea placeholder="Share your thoughts..." rows={4} className="bg-transparent border-0 border-b border-white/10 rounded-none focus:border-primary px-0 font-bold text-xs uppercase tracking-widest resize-none" />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-white text-black font-black uppercase tracking-[0.2em] h-16 transition-all duration-300">
              Send Transmission
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
