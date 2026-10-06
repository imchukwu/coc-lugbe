import { useState } from "react";
import {
  Play,
  Headphones,
  FileText,
  Presentation,
  Video,
  Mic,
  BookOpen,
  Calendar,
  Search,
  Download,
  Share2,
} from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { teachingsData, TeachingFormat } from "@/data/teachingsData";

const filterTabs = [
  { label: "All Media", value: "all" },
  { label: "Video Sermons", value: "video" },
  { label: "Audio Sermons", value: "audio" },
  { label: "Short Videos & Clips", value: "short" },
  { label: "Weekly Podcasts", value: "podcast" },
  { label: "Presentation Slides", value: "slides" },
  { label: "Articles & Studies", value: "article" },
];

export const Teachings = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filteredItems = teachingsData.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.format === activeFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.speaker.toLowerCase().includes(search.toLowerCase()) ||
      item.scripture.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-primary-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Multimedia Library
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mt-3 leading-tight">
            Teachings, Sermons & Media
          </h1>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            Equipping disciples with sound doctrine through Sunday sermons, Bible study series, short video clips, presentation slides, weekly podcasts, and biblical articles.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Controls: Search & Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                    activeFilter === tab.value
                      ? "bg-primary text-primary-foreground border-primary shadow-card-soft"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="w-full md:w-80">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search sermon, scripture, speaker..."
                  className="pl-10 h-11 bg-card rounded-full border-border text-sm"
                />
              </div>
            </div>
          </div>

          {/* Grid of Teaching Media Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const badge = getFormatBadge(item.format);
              const BadgeIcon = badge.icon;

              return (
                <article
                  key={item.id}
                  className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Header banner */}
                    <div className="p-6 bg-gradient-to-br from-primary-deep/5 to-primary/10 border-b border-border/60">
                      <div className="flex items-center justify-between gap-3 mb-3">
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
                      <h2 className="font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors text-foreground">
                        {item.title}
                      </h2>
                    </div>

                    {/* Content details */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{item.date}</span>
                        <span>•</span>
                        <span className="font-semibold text-foreground">{item.speaker}</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs text-primary font-medium mb-3 bg-primary/10 px-2.5 py-1 rounded-md">
                        <BookOpen className="h-3 w-3" /> {item.scripture}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="p-6 pt-0">
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                      <button
                        onClick={() => alert(`Opening ${item.title}`)}
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-accent transition-colors gap-1.5 bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full"
                      >
                        {item.format === "video" && <><Play className="h-3.5 w-3.5" /> Watch Video</>}
                        {item.format === "audio" && <><Headphones className="h-3.5 w-3.5" /> Listen Audio</>}
                        {item.format === "short" && <><Play className="h-3.5 w-3.5" /> Watch Clip</>}
                        {item.format === "podcast" && <><Mic className="h-3.5 w-3.5" /> Listen Episode</>}
                        {item.format === "slides" && <><Download className="h-3.5 w-3.5" /> Download Slides (PDF)</>}
                        {item.format === "article" && <><FileText className="h-3.5 w-3.5" /> Read Full Article</>}
                      </button>

                      <span className="text-[11px] text-muted-foreground font-semibold">
                        Lugbe CoC
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-secondary/30 rounded-3xl border border-dashed border-border">
              <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-display text-xl font-semibold">No media found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try another search keyword or select a different format tab.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachings;
