import { Play, Headphones, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImagePlaceholder from "./ImagePlaceholder";

const sermons = [
  { title: "Walking by Faith, Not by Sight", speaker: "Bro. James Okoro", date: "Apr 28, 2026", series: "Faith Series", duration: "42 min" },
  { title: "The Power of a Praying Church", speaker: "Bro. Daniel Adeyemi", date: "Apr 21, 2026", series: "Acts of the Apostles", duration: "38 min" },
  { title: "Hope That Does Not Disappoint", speaker: "Bro. Emmanuel Bello", date: "Apr 14, 2026", series: "Romans", duration: "45 min" },
];

export const Sermons = () => {
  return (
    <section id="sermons" className="py-24 md:py-32 bg-secondary relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Recent Sermons</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-tight">
              Be encouraged. Be equipped.
            </h2>
          </div>
          <Button variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground self-start md:self-auto">
            View All Sermons <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {sermons.map((s, i) => (
            <article
              key={s.title}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative aspect-video">
                <ImagePlaceholder label={`Sermon ${i + 1}`} className="absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center" aria-label="Play sermon">
                  <span className="h-16 w-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 ml-1" fill="currentColor" />
                  </span>
                </button>
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs text-white">
                  {s.series}
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-xs text-white">
                  {s.duration}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground mb-2">{s.date} · {s.speaker}</div>
                <h3 className="font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    <Headphones className="h-4 w-4" /> Listen
                  </button>
                  <button className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    <FileText className="h-4 w-4" /> Notes
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sermons;
