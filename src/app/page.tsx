import { HeroSection } from "@/sections/hero";
import { VisionSection } from "@/sections/vision";
import { WhyUnstorySection } from "@/sections/why-unstory";
import { FounderSection } from "@/sections/founder";
import { CTASection } from "@/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <WhyUnstorySection />
      <FounderSection />
      <CTASection />
    </>
  );
}
