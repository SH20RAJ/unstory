import type { Metadata } from "next";
import { DevelopersContent } from "./developers-content";

export const metadata: Metadata = {
  title: "Developer Platform | Unstory Ecosystem",
  description: "Everything you need to build, integrate, and extend the Unstory ecosystem with our robust REST APIs and type-safe SDKs.",
};

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <DevelopersContent />
      </div>
    </div>
  );
}
