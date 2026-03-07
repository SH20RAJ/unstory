"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, BookOpen, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const codeSnippet = `import { Unstory } from '@unstory/sdk';

const unstory = new Unstory({
  apiKey: process.env.UNSTORY_API_KEY
});

// Authenticate and track telemetry
await unstory.identify('usr_456x890');
await unstory.track({
  event: 'Workflow Completed',
  properties: {
    duration_ms: 240,
    ai_tokens_used: 1200
  }
});

console.log('✅ Event successfully dispatched');`;

export function DeveloperPlatformSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden text-foreground border-t border-border">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Content */}
          <div className="lg:w-1/2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm font-medium mb-6"
            >
              <Terminal className="mr-2 h-4 w-4 text-foreground" />
              <span className="text-foreground/80">Developer Platform</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground"
            >
              Extend the ecosystem with <span className="text-foreground italic font-serif">precision.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Integrate deeply with Unstory via our robust REST APIs and type-safe SDKs. Build custom applications, automate workflows, and synchronize user data effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 w-full max-w-md mb-8"
            >
              <div className="flex items-center gap-2 text-foreground/80">
                <Code2 className="h-5 w-5 text-muted-foreground" /> Type-safe SDKs
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Terminal className="h-5 w-5 text-muted-foreground" /> REST API Access
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <BookOpen className="h-5 w-5 text-muted-foreground" /> Active Webhooks
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Blocks className="h-5 w-5 text-muted-foreground" /> OAuth 2.0 Auth
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
                <Link href="/developers">Explore Documentation</Link>
              </Button>
            </motion.div>
          </div>

          {/* Terminal Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2 w-full"
          >
            <div className="rounded-xl border border-border bg-secondary/30 backdrop-blur-sm shadow-xl overflow-hidden font-mono text-sm leading-relaxed">
              {/* Fake Terminal Header */}
              <div className="flex items-center px-4 h-12 border-b border-border bg-secondary/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="mx-auto text-xs text-muted-foreground flex items-center gap-2">
                  <Terminal size={14} /> telemetry.ts
                </div>
              </div>

              {/* Code */}
              <div className="p-6 overflow-x-auto text-foreground/80">
                <pre>
                  <code>
                    <span className="text-foreground">import</span> {"{ "}
                    <span className="text-foreground">Unstory</span>
                    {" }"} <span className="text-foreground">from</span> <span className="text-muted-foreground">'@unstory/sdk'</span>;
                    {"\n\n"}
                    <span className="text-foreground">const</span> unstory = <span className="text-foreground">new</span> <span className="text-foreground">Unstory</span>{"({"}
                    {"\n"}  apiKey: <span className="text-muted-foreground">process</span>.<span className="text-muted-foreground">env</span>.<span className="text-muted-foreground">UNSTORY_API_KEY</span>
                    {"\n});\n\n"}
                    <span className="text-muted-foreground italic">// Authenticate and track telemetry</span>
                    {"\n"}
                    <span className="text-foreground">await</span> unstory.<span className="text-foreground">identify</span>(<span className="text-muted-foreground">'usr_456x890'</span>);
                    {"\n"}
                    <span className="text-foreground">await</span> unstory.<span className="text-foreground">track</span>{"({\n"}
                    {"  "}event: <span className="text-muted-foreground">'Workflow Completed'</span>,
                    {"\n  "}properties: {"{\n"}
                    {"    "}duration_ms: <span className="text-foreground">240</span>,
                    {"\n    "}ai_tokens_used: <span className="text-foreground">1200</span>
                    {"\n  }\n});\n\n"}
                    <span className="text-muted-foreground">console</span>.<span className="text-foreground">log</span>(<span className="text-muted-foreground">'✅ Event successfully dispatched'</span>);
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
