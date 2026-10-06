import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImagePlaceholder from "./ImagePlaceholder";

const posts = [
  { title: "Why Daily Bible Reading Changes Everything", category: "Devotional", date: "Apr 30, 2026", read: "5 min" },
  { title: "Raising the Next Generation in the Faith", category: "Family", date: "Apr 24, 2026", read: "7 min" },
  { title: "The Quiet Power of Corporate Prayer", category: "Spiritual Growth", date: "Apr 18, 2026", read: "4 min" },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">From the Blog</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-tight">
              Words to feed your week.
            </h2>
          </div>
          <Button variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground self-start md:self-auto">
            All Articles <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-2 transition-all duration-500"
            >
              <ImagePlaceholder label={`Post ${i + 1}`} className="aspect-[16/10]" variant={i % 2 ? "soft" : "deep"} />
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="inline-block bg-accent-soft text-accent-foreground px-2.5 py-1 rounded-full font-semibold uppercase tracking-widest text-[10px]">
                    {p.category}
                  </span>
                  <span>{p.date} · {p.read} read</span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                  Read article <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
