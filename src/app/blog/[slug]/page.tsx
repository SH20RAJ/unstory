import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostContent } from "./PostContent";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  content: React.ReactNode;
}

const posts: Record<string, BlogPost> = {
  "welcome-to-unstory": {
    title: "Welcome to Unstory: Our Journey Begins",
    excerpt: "The story behind our studio and why we're dedicated to building the next generation of human potential tools.",
    date: "March 6, 2026",
    readTime: "3 min read",
    category: "Company",
    slug: "welcome-to-unstory",
    content: (
      <div className="space-y-6">
        <p>
          Today marks a significant milestone for us. We are thrilled to officially launch **Unstory**, a SaaS product studio born out of a simple yet profound realization: the tools we use define the limits of what we can achieve.
        </p>
        <p>
          At Unstory, we aren&apos;t just building apps. We are crafting an ecosystem of interconnected tools designed to augment human intelligence and streamline the creative process. Our mission is to eliminate the friction between thought and action.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Why Unstory?</h2>
        <p>
          The name &quot;Unstory&quot; represents our commitment to stripping away the unnecessary narratives and complexities that often plague modern software. We believe in minimalism, speed, and utility.
        </p>
        <p>
          Our first wave of products, including **MindOS** and **Daksha**, are reflections of this philosophy. They are built for the modern builder, the thinker, and the doer.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">What to Expect</h2>
        <p>
          Through this blog, we will share our progress, the engineering challenges we face, and our thoughts on the future of productivity and AI. We believe in building in public and learning alongside our community.
        </p>
        <p>
          Thank you for joining us on this journey. This is just the beginning of the story we are un-writing together.
        </p>
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="font-semibold">— The Unstory Team</p>
        </div>
      </div>
    ),
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | Unstory Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return <PostContent post={post} />;
}
