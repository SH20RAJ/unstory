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
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden text-zinc-100 border-t border-zinc-800">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="lg:w-1/2 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm font-medium mb-6"
            >
              <Terminal className="mr-2 h-4 w-4 text-primary" />
              <span className="text-zinc-300">Developer Platform</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
            >
              Extend the ecosystem with <span className="text-primary italic font-serif">precision.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8 leading-relaxed"
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
              <div className="flex items-center gap-2 text-zinc-300">
                <Code2 className="h-5 w-5 text-zinc-500" /> Type-safe SDKs
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Terminal className="h-5 w-5 text-zinc-500" /> REST API Access
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <BookOpen className="h-5 w-5 text-zinc-500" /> Active Webhooks
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Blocks className="h-5 w-5 text-zinc-500" /> OAuth 2.0 Auth
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 h-12 px-8">
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
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
              {/* Fake Terminal Header */}
              <div className="flex items-center px-4 h-12 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs text-zinc-500 flex items-center gap-2">
                  <Terminal size={14} /> telemetry.ts
                </div>
              </div>
              
              {/* Code */}
              <div className="p-6 overflow-x-auto text-zinc-300">
                <pre>
                  <code>
                    <span className="text-pink-400">import</span> {"{ "}
                    <span className="text-yellow-200">Unstory</span>
                    {" }"} <span className="text-pink-400">from</span> <span className="text-green-300">'@unstory/sdk'</span>;
                    {"\n\n"}
                    <span className="text-pink-400">const</span> unstory = <span className="text-pink-400">new</span> <span className="text-yellow-200">Unstory</span>{"({"}
                    {"\n"}  apiKey: <span className="text-blue-300">process</span>.<span className="text-blue-300">env</span>.<span className="text-purple-300">UNSTORY_API_KEY</span>
                    {"\n});\n\n"}
                    <span className="text-zinc-500 italic">// Authenticate and track telemetry</span>
                    {"\n"}
                    <span className="text-pink-400">await</span> unstory.<span className="text-blue-400">identify</span>(<span className="text-green-300">'usr_456x890'</span>);
                    {"\n"}
                    <span className="text-pink-400">await</span> unstory.<span className="text-blue-400">track</span>{"({\n"}
                    {"  "}event: <span className="text-green-300">'Workflow Completed'</span>,
                    {"\n  "}properties: {"{\n"}
                    {"    "}duration_ms: <span className="text-orange-400">240</span>,
                    {"\n    "}ai_tokens_used: <span className="text-orange-400">1200</span>
                    {"\n  }\n});\n\n"}
                    <span className="text-blue-300">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-300">'✅ Event successfully dispatched'</span>);
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
