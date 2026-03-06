import { HeroSection } from "@/sections/hero";
import { EcosystemSection } from "@/sections/ecosystem";
import { VisionSection } from "@/sections/vision";
import { WhyUnstorySection } from "@/sections/why-unstory";
import { OpenSourceSection } from "@/sections/open-source";
import { DeveloperPlatformSection } from "@/sections/developer-platform";
import { FounderSection } from "@/sections/founder";
import { CTASection } from "@/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <VisionSection />
      <WhyUnstorySection />
      <OpenSourceSection />
      <DeveloperPlatformSection />
      <FounderSection />
      <CTASection />
    </>
  );
}
