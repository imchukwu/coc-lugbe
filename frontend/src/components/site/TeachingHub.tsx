import { Link } from "react-router-dom";
import {
  Play,
  Headphones,
  FileText,
  Presentation,
  Video,
  Mic,
  ArrowRight,
  BookOpen,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { teachingsData, TeachingFormat } from "@/data/teachingsData";

export const TeachingHub = () => {
  // Display only the latest row of 3 items on the index page
  const latestItems = teachingsData.slice(0, 3);

  const getFormatBadge = (format: TeachingFormat) => {
    switch (format) {
      case "video":
        return { label: "Video Sermon", icon: Video, color: "bg-red-500/10 text-red-500 border-red-500/20" };
      case "audio":
        return { label: "Audio Message", icon: Headphones, color: "bg-amber-500/10 text-amber-500 border-amber-500/20" };
      case "short":
        return { label: "Short Video Clip", icon: Play, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" };
      case "podcast":
        return { label: "Podcast Episode", icon: Mic, color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" };
      case "slides":
        return { label: "Presentation Slides", icon: Presentation, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" };
      case "article":
        return { label: "Biblical Article", icon: FileText, color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" };
    }
  };

  return (
    <section id="teachings" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Teachings & Media Archive
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 leading-tight">
              Sound doctrine for every season of life.
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              Explore sermons, expository Bible studies, podcasts, slide presentations, short videos, and doctrinal articles to strengthen your faith in Jesus Christ.
            </p>
          </div>

          <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground self-start lg:self-auto h-12 px-6">
            <Link to="/teachings">
              View Full Media Library <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* 1 Row of 3 Columns: Latest 3 items without filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestItems.map((item) => {
            const badge = getFormatBadge(item.format);
            const BadgeIcon = badge.icon;

            return (
              <article
                key={item.id}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Media header block */}
                  <div className="relative p-6 bg-gradient-to-br from-primary-deep/5 to-primary/10 border-b border-border/60">
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${badge.color}`}>
                        <BadgeIcon className="h-3.5 w-3.5" /> {badge.label}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {item.duration || item.readTime}
                      </span>
                    </div>

                    <div className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-1">
                      {item.series}
                    </div>
                    <h3 className="font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  {/* Body description */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="font-medium text-foreground">{item.speaker}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs text-primary/90 font-medium mb-3 bg-primary/5 px-2.5 py-1 rounded-md">
                      <BookOpen className="h-3 w-3" /> {item.scripture}
                    </div>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <Link
                      to="/teachings"
                      className="inline-flex items-center text-xs font-semibold text-primary hover:text-accent transition-colors gap-1.5"
                    >
                      {item.format === "video" && <><Play className="h-3.5 w-3.5" /> Watch Sermon</>}
                      {item.format === "audio" && <><Headphones className="h-3.5 w-3.5" /> Listen Audio</>}
                      {item.format === "short" && <><Play className="h-3.5 w-3.5" /> Watch Clip</>}
                      {item.format === "podcast" && <><Mic className="h-3.5 w-3.5" /> Listen Podcast</>}
                      {item.format === "slides" && <><Presentation className="h-3.5 w-3.5" /> View Slides</>}
                      {item.format === "article" && <><FileText className="h-3.5 w-3.5" /> Read Article</>}
                    </Link>

                    <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold">
                      Lugbe CoC
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Read more button linking to inner /teachings page */}
        <div className="mt-14 text-center">
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-sm shadow-card-soft">
            <Link to="/teachings">
              View Full Media Library <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeachingHub;
