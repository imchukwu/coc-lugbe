import { BookOpen, Shield, Heart, Droplets, Music2, Wine, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const doctrines = [
  {
    icon: BookOpen,
    title: "The Bible as Sole Authority",
    scripture: "2 Timothy 3:16-17",
    desc: "The Scriptures are God-breathed and all-sufficient. We hold no human creeds, manual books, or traditions: the Bible alone guides our doctrine and practice.",
  },
  {
    icon: Shield,
    title: "The New Testament Church",
    scripture: "Romans 16:16, Matthew 16:18",
    desc: "We are an undenominational body of Christians seeking to reproduce the original church established by Jesus Christ on the day of Pentecost.",
  },
  {
    icon: Heart,
    title: "The Plan of Salvation",
    scripture: "Acts 2:38, Mark 16:16",
    desc: "Salvation is by God's grace through hearing the gospel, believing in Jesus, repenting of sins, confessing Christ, and being baptized into Him.",
  },
  {
    icon: Droplets,
    title: "Baptism by Immersion",
    scripture: "Romans 6:3-4, Acts 22:16",
    desc: "Scriptural baptism is a burial in water for the remission of past sins, washing away guilt and clothing the believer in Jesus Christ.",
  },
  {
    icon: Music2,
    title: "A Cappella Singing",
    scripture: "Ephesians 5:19, Colossians 3:16",
    desc: "Our worship in song is strictly congregational and vocal, making melody with the human heart to God according to apostolic instruction.",
  },
  {
    icon: Wine,
    title: "Weekly Lord's Supper",
    scripture: "Acts 20:7, 1 Corinthians 11:23-26",
    desc: "Following the apostolic example, we partake of the unleavened bread and fruit of the vine every Sunday in solemn remembrance of the Lord's death.",
  },
];

export const BeliefsSection = () => {
  return (
    <section id="beliefs" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] bg-gradient-glow opacity-30 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Our Faith & Doctrine
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 leading-tight">
            What the Church of Christ Believes
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            We have no creed but Christ, no book but the Bible, and no name but the name of Jesus. Discover the foundational truths that anchor our walk of faith.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctrines.map((d) => (
            <div
              key={d.title}
              className="group relative rounded-3xl bg-gradient-card border border-border p-7 hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-hero text-primary-foreground flex items-center justify-center shadow-card-soft group-hover:shadow-glow transition-shadow">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full">
                    {d.scripture}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-2.5 text-foreground group-hover:text-primary transition-colors">
                  {d.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to="/beliefs"
                  className="inline-flex items-center text-xs font-semibold text-primary hover:text-accent transition-colors"
                >
                  Read scripture study <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action button linking to inner /beliefs page */}
        <div className="mt-14 text-center">
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-sm shadow-card-soft">
            <Link to="/beliefs">
              Explore Our Full Statement of Faith <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;
