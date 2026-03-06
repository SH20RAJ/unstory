import type { Metadata } from "next";
import { ProductsContent } from "./products-content";

export const metadata: Metadata = {
  title: "Products | Unstory Ecosystem",
  description: "Explore the Unstory suite of specialized applications designed to amplify intelligence, streamline creativity, and optimize productivity.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <ProductsContent />
      </div>
    </div>
  );
}
