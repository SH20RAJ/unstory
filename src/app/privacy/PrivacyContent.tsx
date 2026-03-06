"use client";

import { motion } from "framer-motion";

export function PrivacyContent() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: March 06, 2026</p>

          <div className="space-y-12 prose prose-invert prose-primary max-w-none">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Unstory, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                and protect your personal information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect several types of information from and about users of our products, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Personal identifiers such as name, email address, and account details.</li>
                <li>Usage data and performance analytics from our SaaS applications.</li>
                <li>Cookies and tracking technologies to improve user experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use information that we collect about you or that you provide to us to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Provide and maintain our services.</li>
                <li>Notify you about changes to our products.</li>
                <li>Provide customer support.</li>
                <li>Gather analysis or valuable information so that we can improve our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We have implemented measures designed to secure your personal information from accidental loss 
                and from unauthorized access, use, alteration, and disclosure. All information you provide to us 
                is stored on our secure servers behind firewalls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@unstory.app" className="text-primary hover:underline mt-2 inline-block">
                  privacy@unstory.app
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
