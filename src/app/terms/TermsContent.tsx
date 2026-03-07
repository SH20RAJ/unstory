"use client";

import { motion } from "framer-motion";

export function TermsContent() {
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
            Terms of <br />
            <span className="italic-accent lowercase tracking-normal text-primary">Service.</span>
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
                  Agreement
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  By accessing or using Unstory&apos;s products and website, you agree to be bound by these 
                  Terms of Service. If you do not agree with any part of these terms, you may not use 
                  our services.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight flex items-baseline gap-4">
                  <span className="text-primary text-sm tracking-widest">02</span>
                  Intellectual Property
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  The service and its original content, features, and functionality are and will remain 
                  the exclusive property of Unstory and its licensors. Our trademarks and trade dress 
                  may not be used in connection with any product or service without prior internal authorization.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight flex items-baseline gap-4">
                  <span className="text-primary text-sm tracking-widest">03</span>
                  Liability
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  In no event shall Unstory, nor its directors, employees, or partners, be liable for 
                  any indirect, incidental, special, or consequential damages resulting from the use 
                  of our platform or specialized applications.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-black text-white uppercase tracking-tight flex items-baseline gap-4">
                  <span className="text-primary text-sm tracking-widest">04</span>
                  Modifications
                </h2>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at 
                  any time. Continued use of the service constitutes acceptance of the updated 
                  contractual parameters.
                </p>
              </section>

              <section className="space-y-6">
                <div className="p-12 border border-white/5 bg-[#161718] relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
                   <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-4">Transmission Query?</h2>
                   <p className="text-white/40 font-medium mb-8">If you have any questions about these terms, please contact our legal team.</p>
                   <a href="mailto:contact@unstory.app" className="text-primary font-black uppercase tracking-[0.3em] text-sm hover:text-white transition-colors">
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
