import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Unstory Ecosystem",
  description: "Get in touch with the Unstory team for enterprise pricing, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <ContactContent />
      </div>
    </div>
  );
}
