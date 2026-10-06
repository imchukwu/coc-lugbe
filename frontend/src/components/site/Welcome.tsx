import { BookOpen, Users, Compass, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroSanctuary from "@/assets/hero-sanctuary.jpg";
import heroBible from "@/assets/hero-bible.jpg";

const origins = [
  {
    icon: BookOpen,
    title: "New Testament Pattern",
    text: "Founded strictly upon the teachings of Jesus Christ and the apostles without human creeds.",
  },
  {
    icon: Users,
    title: "Loving Brotherhood",
    text: "From our earliest gatherings, brethren have walked together in mutual prayer, care, and fellowship.",
  },
  {
    icon: Compass,
    title: "Mission in Abuja",
    text: "Planted to be a beacon of pure biblical truth and salvation across the Lugbe and Airport Road axis.",
  },
];

export const Welcome = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-32 h-[450px] w-[450px] bg-gradient-glow opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 h-80 w-80 bg-accent-soft/40 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual section: redesigned without empty top space */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary feature image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/80 bg-card">
                <img
                  src={heroSanctuary}
                  alt="Church of Christ Lugbe Sanctuary"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-accent font-semibold">Our Gathering</div>
                    <div className="text-lg font-display font-semibold">Worship in Spirit & Truth</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium">
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Romans 16:16
                  </span>
                </div>
              </div>

              {/* Overlapping secondary photo card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 rounded-2xl overflow-hidden shadow-gold border-2 border-white bg-card hidden sm:block">
                <img
                  src={heroBible}
                  alt="Holy Bible and Scriptural Study"
                  className="w-full h-36 object-cover"
                />
                <div className="p-3 bg-white text-foreground">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Authority</div>
                  <div className="text-xs font-semibold text-primary">The Inerrant Word of God</div>
                </div>
              </div>

              {/* Floating heritage badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-elegant border border-border max-w-[210px]">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center font-display font-bold text-sm">
                    ✦
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">Lugbe, Abuja</div>
                    <div className="text-[11px] text-muted-foreground">Planted in Faith</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text section: How Church of Christ Lugbe Started */}
          <div className="lg:col-span-6">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
              Our Story & Heritage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-balance">
              How the Church of Christ Lugbe Started
            </h2>

            <div className="mt-6 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                In response to the Great Commission and the spiritual thirst of families residing in the Federal Capital Territory, faithful brethren dedicated to simple New Testament Christianity began gathering in Lugbe, Abuja.
              </p>
              <p>
                Guided exclusively by the inspired Scriptures rather than human traditions or denominational creeds, the brethren resolved to restore the church of the Bible: worshipping God in spirit and truth, partaking of the Lord's Supper every first day of the week, and preaching the gospel of Jesus Christ for the salvation of souls.
              </p>
              <p className="text-sm md:text-base">
                From those earnest beginnings along the Airport Road corridor, the congregation has grown into a devoted family of believers actively building up the saints, equipping youth, and shining the light of Christ across Abuja.
              </p>
            </div>

            {/* Three Foundation Pillars */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {origins.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-secondary/60 p-4 border border-border/80 hover:border-primary/30 transition-colors"
                >
                  <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-semibold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Read More button linking to inner /about page */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-7 h-12 text-sm shadow-card-soft">
                <Link to="/about">
                  Read Our Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-6 h-12 text-sm">
                <Link to="/beliefs">
                  What We Believe
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
