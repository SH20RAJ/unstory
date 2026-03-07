import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { FounderSection } from "@/sections/founder";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FounderSection />
    </main>
  );
}
