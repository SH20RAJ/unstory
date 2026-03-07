"use client";

import { motion } from "framer-motion";

export function PrivacyContent() {
  return (
    <div className="min-h-screen bg-background pt-48 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-12 uppercase tracking-[0.3em] text-primary font-bold text-xs">
            <div className="w-8 h-px bg-primary" />
            Legal Documentation
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-20">
            Privacy <br />
            <span className="italic-accent lowercase tracking-normal text-primary">Policy.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="lg:col-span-4">
               <p className="text-sm font-black uppercase tracking-widest text-white/20">Last Updated</p>
               <p className="text-xl font-bold text-white mt-2">March 06, 2026</p>
            </div>
            
            <div className="lg:col-span-8 space-y-20">
              <section className="space-y-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight flex items-baseline gap-4">
                  <span className="text-primary text-sm tracking-widest">01</span>
                  Introduction
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  At Unstory, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                  and protect your personal information when you use our website and services.
                </p>
              </section>

              <section className="space-y-8">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight flex items-baseline gap-4">
                  <span className="text-primary text-sm tracking-widest">02</span>
                  Data Archiving
                </h2>
                <div className="space-y-6">
                   <p className="text-xl text-white/50 leading-relaxed font-medium">
                     We may collect several types of information from and about users of our products, including:
                   </p>
                   <ul className="space-y-4 text-white/70 font-bold uppercase tracking-widest text-xs">
                     <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary" />
                        Personal identifiers and account details.
                     </li>
                     <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary" />
                        Usage data and performance analytics.
                     </li>
                     <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary" />
                        Cookies and session identifiers.
                     </li>
                   </ul>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight flex items-baseline gap-4">
                  <span className="text-primary text-sm tracking-widest">03</span>
                  Encryption
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  We have implemented measures designed to secure your personal information from accidental loss 
                  and from unauthorized access. All information you provide to us is stored on our secure servers 
                  behind enterprise-grade firewalls.
                </p>
              </section>

              <section className="space-y-6">
                <div className="p-12 border border-white/5 bg-[#161718] relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
                   <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-4">Transmission Query?</h2>
                   <p className="text-white/40 font-medium mb-8">If you have any questions about this Privacy Policy, please contact our data team.</p>
                   <a href="mailto:privacy@unstory.app" className="text-primary font-black uppercase tracking-[0.3em] text-sm hover:text-white transition-colors">
                     Submit Request &rarr;
                   </a>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
