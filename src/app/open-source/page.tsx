import type { Metadata } from "next";
import { OpenSourceContent } from "./open-source-content";

export const metadata: Metadata = {
  title: "Open Source | Unstory Ecosystem",
  description: "Unstory builds tools in public, sponsors maintainers, and contributes heavily to the open source community.",
};

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <OpenSourceContent />
      </div>
    </div>
  );
}
