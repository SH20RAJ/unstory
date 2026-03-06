import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog | Unstory Ecosystem",
  description: "Insights, engineering deep dives, and product updates straight from the Unstory team.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <BlogContent />
      </div>
    </div>
  );
}
