import { Quote, Phone, Mail, ArrowRight, ShieldCheck, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ministerPhoto from "@/assets/minister.jpg";

export const Minister = () => {
  return (
    <section id="minister" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-72 w-72 bg-accent-soft/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Minister portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border/80 bg-card">
                <img
                  src={ministerPhoto}
                  alt="Evang. Rupert T. Kukwa - Minister, Church of Christ Lugbe"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase tracking-widest text-accent font-semibold">Leadership</div>
                  <div className="text-2xl font-display font-semibold">Evang. Rupert T. Kukwa</div>
                  <div className="text-xs text-white/80 mt-1">Lead Minister & Evangelist · Church of Christ, Lugbe</div>
                </div>
              </div>

              {/* Ministry stat card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-card rounded-2xl p-5 shadow-elegant border border-border max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center font-display font-bold text-lg">
                    ✦
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-primary">Faithful</div>
                    <div className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                      Gospel Ministry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Minister profile text */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Meet our Minister
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 leading-tight text-foreground">
              Evang. Rupert T. Kukwa
            </h2>
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-base mt-2">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Minister & Evangelist, Church of Christ Lugbe</span>
            </div>

            {/* Minister quote: clean colon instead of emdash */}
            <div className="relative mt-8 pl-8 border-l-2 border-accent">
              <Quote className="absolute -left-3 top-0 h-6 w-6 text-accent bg-background" />
              <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed italic">
                "Our sacred calling is simple: to preach Christ and Him crucified, to nurture souls with the pure Word of God, and to build a loving, steadfast fellowship grounded in truth and grace."
              </p>
            </div>

            <div className="mt-6 space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Evang. Rupert T. Kukwa serves as the lead evangelist for the Church of Christ in Lugbe, Abuja. Devoted to the restoration of New Testament Christianity, he brings a deep love for the Scriptures and a shepherd's heart to the congregation.
              </p>
              <p>
                His ministry centers upon expository preaching, systematic Bible classes, spiritual mentorship, and active evangelistic outreach across the Federal Capital Territory. Under his leadership, the church remains firmly rooted in sound doctrine, mutual care, and fervent prayer.
              </p>
            </div>

            {/* Direct contact and action buttons */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a
                href="tel:+2348031234567"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors bg-secondary/80 px-4 py-2 rounded-full border border-border"
              >
                <Phone className="h-4 w-4 text-primary" /> +234 803 123 4567
              </a>
              <a
                href="mailto:r.kukwa@coclugbe.org"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors bg-secondary/80 px-4 py-2 rounded-full border border-border"
              >
                <Mail className="h-4 w-4 text-primary" /> r.kukwa@coclugbe.org
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-7 h-12 text-sm shadow-card-soft">
                <Link to="/about">
                  Read Full Bio & Ministry Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-7 h-12 text-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/teachings">
                  <BookOpen className="mr-2 h-4 w-4" /> Sermons by Evang. Kukwa
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Minister;
