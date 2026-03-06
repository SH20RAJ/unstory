"use client";
import * as React from "react";
import { BrainCircuit, BookOpen, Layers, Laptop, PenTool } from "lucide-react";
import { ProductCard } from "@/components/product-card";

const products = [
  {
    name: "MindOS",
    description: "Your second brain, powered by AI. Organize thoughts, retrieve knowledge instantly, and connect ideas seamlessly.",
    href: "https://mindos.unstory.app",
    icon: BrainCircuit,
    delay: 0.1,
  },
  {
    name: "CreoYT",
    description: "The ultimate YouTube creator suite. Analyze engaging topics, script videos, and generate thumbnails effortlessly.",
    href: "https://creoyt.unstory.app",
    icon: Laptop,
    delay: 0.2,
  },
  {
    name: "SketchFlow",
    description: "Collaborative whiteboarding and UI/UX wireframing for remote product teams.",
    href: "https://sketchflow.unstory.app",
    icon: PenTool,
    delay: 0.3,
  },
  {
    name: "Daksha",
    description: "Intelligent analytics and telemetry for modern SaaS applications.",
    href: "https://daksha.unstory.app",
    icon: Layers,
    delay: 0.4,
  },
  {
    name: "30Tools",
    description: "A curated collection of 30 micro-tools designed to save time for developers and designers everyday.",
    href: "https://tools.unstory.app",
    icon: BookOpen,
    delay: 0.5,
  },
];

export function EcosystemSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative" id="ecosystem">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The Unstory Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A specialized suite of applications designed to amplify intelligence, streamline creativity, and optimize productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
