"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactContent() {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          Have a question about our products, enterprise pricing, or partnership opportunities? We&apos;d love to hear from you.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-xl mx-auto"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium text-foreground">First Name</label>
              <Input id="first-name" placeholder="Linus" className="bg-muted/20 border-border/50" />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium text-foreground">Last Name</label>
              <Input id="last-name" placeholder="Torvalds" className="bg-muted/20 border-border/50" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email address</label>
            <Input id="email" type="email" placeholder="contact@unstory.app" className="bg-muted/20 border-border/50" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
            <Input id="subject" placeholder="How can we help?" className="bg-muted/20 border-border/50" />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <Textarea id="message" placeholder="Include any details here..." rows={6} className="bg-muted/20 border-border/50 resize-none" />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </motion.div>
    </>
  );
}
