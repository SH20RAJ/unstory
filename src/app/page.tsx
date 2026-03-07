import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
