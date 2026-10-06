import { BookOpen, Shield, Heart, Users, MapPin, Quote, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import heroSanctuary from "@/assets/hero-sanctuary.jpg";
import heroBible from "@/assets/hero-bible.jpg";
import ministerPhoto from "@/assets/minister.jpg";

export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-primary-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            About Our Family
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mt-3 leading-tight">
            Our History, Mission & Leadership
          </h1>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            Discover the story of how the Church of Christ in Lugbe, Abuja began, our commitment to New Testament Christianity, and the leadership serving our flock.
          </p>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block">
                How It Began
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
                Planted in Faith along the Airport Road Corridor
              </h2>
              <p>
                The story of the Church of Christ in Lugbe, Abuja is a testament to God's providence and the dedication of faithful disciples who longed to worship God according to the apostolic pattern.
              </p>
              <p>
                As the satellite town of Lugbe grew rapidly in the Federal Capital Territory, brethren residing in the area recognized the urgent need for a local congregation where families could gather for New Testament worship, verse-by-verse Bible study, and evangelistic outreach without traveling long distances into the city center.
              </p>
              <p>
                Beginning in humble circumstances with fervent prayer and scriptural devotion, brethren gathered regularly, breaking bread on the first day of the week and studying the Word of God. Guided solely by the Bible without human dogmas or denominational affiliations, the Lord added to their number.
              </p>
              <p>
                Today, Church of Christ, Lugbe stands as a beacon of gospel truth by Berger Yard, Off Airport Road: fostering spiritual growth, nurturing youth and children, and carrying the message of salvation to Lugbe and beyond.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
                <img
                  src={heroSanctuary}
                  alt="Church of Christ Lugbe Sanctuary"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold">Sanctuary & Community</div>
                  <div className="text-lg font-display font-semibold">By Berger Yard, Off Airport Road, Lugbe</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-secondary border border-border">
                  <div className="font-display text-2xl font-bold text-primary mb-1">New Testament</div>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Our Standard</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We practice what the apostles taught, seeking to do Bible things in Bible ways and speak where the Bible speaks.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary border border-border">
                  <div className="font-display text-2xl font-bold text-primary mb-1">Undenominational</div>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Our Identity</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We are simply Christians, members of the body of Christ, wearing no sectarian names.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minister Profile Section */}
      <section id="minister" className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Congregational Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-foreground">
              Our Minister: Evang. Rupert T. Kukwa
            </h2>
            <p className="mt-4 text-muted-foreground">
              A shepherd devoted to biblical truth, pastoral care, and building up disciples in Christ.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto bg-card rounded-3xl p-8 md:p-12 border border-border shadow-elegant">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-card-soft border border-border">
                <img
                  src={ministerPhoto}
                  alt="Evang. Rupert T. Kukwa"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-bold">Minister & Evangelist</span>
                <h3 className="font-display text-3xl font-bold text-foreground mt-1">
                  Evang. Rupert T. Kukwa
                </h3>
                <div className="text-primary font-medium text-sm mt-1">
                  Church of Christ, Lugbe, Abuja
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-accent">
                <p className="text-foreground italic leading-relaxed text-sm md:text-base">
                  "Our sacred calling is simple: to preach Christ and Him crucified, to feed the flock with the pure Word of God, and to build a loving, steadfast fellowship grounded in truth and grace."
                </p>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Evang. Rupert T. Kukwa has devoted his life to proclaiming the unadulterated gospel of Jesus Christ. Known for his clarity of thought, biblical scholarship, and pastoral warmth, Evang. Kukwa teaches the Word with conviction and love.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                His leadership oversees the pulpit ministry, mid-week doctrine classes, leadership training, and church planting initiatives. He is deeply committed to counseling families, visiting the sick, and mentoring youth to walk faithfully in the Lord.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <a
                  href="tel:+2348031234567"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border border-border text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-accent" /> +234 803 123 4567
                </a>
                <a
                  href="mailto:r.kukwa@coclugbe.org"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border border-border text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-accent" /> r.kukwa@coclugbe.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Pillars */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Our Vision
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-2 text-foreground">
              What Drives Our Ministry
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-secondary/50 border border-border">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Expository Preaching</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We believe that spiritual transformation comes through understanding God's Word. Our sermons and Bible classes systematically unpack the Scriptures.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-secondary/50 border border-border">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Benevolence & Love</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We practice genuine brotherly love, caring for the needy, widows, orphans, and uplifting struggling families within our community.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-secondary/50 border border-border">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Community Fellowship</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From children to elders, every soul is treasured. We provide age-appropriate classes, fellowship groups, and prayer circles.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-sm shadow-card-soft">
              <Link to="/contact">
                Visit Us This Sunday at 8:00 AM <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
