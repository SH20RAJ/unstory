import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us | Unstory Ecosystem",
  description: "Learn about Unstory, an independent SaaS product studio dedicated to building the operating system for human potential.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <AboutContent />
      </div>
    </div>
  );
}
