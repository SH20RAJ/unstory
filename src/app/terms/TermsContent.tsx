"use client";

import { motion } from "framer-motion";

export function TermsContent() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: March 06, 2026</p>

          <div className="space-y-12 prose prose-invert prose-primary max-w-none">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Unstory&apos;s products and website, you agree to be bound by these 
                Terms of Service. If you do not agree with any part of these terms, you may not use 
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Unstory and its licensors. Our trademarks and trade dress 
                may not be used in connection with any product or service without the prior written 
                consent of Unstory.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to use our services for any purpose that is unlawful or prohibited by these 
                Terms. You may not use our services in any manner that could damage, disable, overburden, or 
                impair our servers or networks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Unstory, nor its directors, employees, or partners, be liable for 
                any indirect, incidental, special, consequential, or punitive damages, including 
                without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at 
                any time. By continuing to access or use our Service after those revisions become 
                effective, you agree to be bound by the revised terms.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
