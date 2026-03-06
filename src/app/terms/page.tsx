import { Metadata } from "next";
import { TermsContent } from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Unstory",
  description: "Read the Terms of Service for using Unstory's products and services.",
};

export default function TermsPage() {
  return <TermsContent />;
}
