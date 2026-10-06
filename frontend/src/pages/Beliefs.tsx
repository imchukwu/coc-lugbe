import { BookOpen, Shield, Heart, Droplets, Music2, Wine, Users2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

const fullBeliefs = [
  {
    title: "1. The Infallible Word of God",
    scriptures: "2 Timothy 3:16-17; 2 Peter 1:20-21; Revelation 22:18-19",
    summary:
      "We believe that the entire Bible is the verbally inspired Word of God, fully trustworthy and free from error. The Scriptures provide all things pertaining to life and godliness. Because God's Word is completely sufficient, we adhere to no human catechisms, manual books, or denominational creeds.",
  },
  {
    title: "2. The New Testament Pattern of the Church",
    scriptures: "Matthew 16:18; Romans 16:16; Ephesians 4:4-6; Acts 2:47",
    summary:
      "Jesus Christ established only one church, purchased with His own blood. We seek to be simply Christians: neither Catholic nor Protestant, but members of the original church of Christ described in the New Testament. We honor Christ as our sole King and Head.",
  },
  {
    title: "3. The Biblical Plan of Salvation",
    scriptures: "Romans 10:17; John 8:24; Acts 17:30; Matthew 10:32; Acts 2:38; Mark 16:16",
    summary:
      "Salvation is by the unearned grace of God through Jesus Christ. In response to God's love, the Bible instructs a sinner to: (1) Hear the gospel; (2) Believe in Jesus as the Son of God; (3) Repent of all past sins; (4) Confess faith in Christ before men; and (5) Be baptized for the remission of sins.",
  },
  {
    title: "4. Scriptural Baptism by Immersion",
    scriptures: "Romans 6:3-5; Acts 22:16; Galatians 3:27; 1 Peter 3:21",
    summary:
      "The New Testament word for baptism (baptizo) means to dip, plunge, or immerse. Scriptural baptism is an immersion in water of a penitent believer for the remission of sins, signifying burial with Christ and resurrection to a brand new spiritual life. We do not practice infant baptism or sprinkling.",
  },
  {
    title: "5. A Cappella Singing in Worship",
    scriptures: "Ephesians 5:19; Colossians 3:16; Hebrews 13:15; 1 Corinthians 14:15",
    summary:
      "Our praise is vocal and congregational, where every voice unites in spiritual songs, hymns, and psalms. Following the explicit pattern of the apostolic church and New Testament commands, we make melody with our hearts to the Lord without the use of mechanical musical instruments.",
  },
  {
    title: "6. Weekly Observance of the Lord's Supper",
    scriptures: "Acts 20:7; 1 Corinthians 11:23-29; Matthew 26:26-29",
    summary:
      "Following the apostolic example recorded in the book of Acts, the disciples gathered on the first day of the week to break bread. We partake of unleavened bread and the fruit of the vine every Sunday morning in solemn commemoration of the sacrifice of our Lord Jesus Christ on the cross.",
  },
  {
    title: "7. Congregational Autonomy",
    scriptures: "Acts 14:23; 1 Peter 5:1-3; Philippians 1:1; Titus 1:5-9",
    summary:
      "Each local congregation of the church of Christ is autonomous and self-governing under the headship of Christ. We have no earthly headquarters, pope, or governing council. Congregations are guided locally by scripturally qualified elders and served by deacons, evangelists, and teachers.",
  },
  {
    title: "8. Holy Living, Fellowship & Benevolence",
    scriptures: "Romans 12:1-2; Galatians 6:10; James 1:27; 1 Peter 1:15-16",
    summary:
      "True faith produces righteous living. Believers are called to be salt and light in our society, abstaining from worldliness and practicing active benevolence toward the poor, the sick, widows, and orphans, showing the love of Christ to all people.",
  },
];

export const Beliefs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-primary-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Our Doctrinal Foundation
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mt-3 leading-tight">
            What the Church of Christ Believes
          </h1>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            Where the Scriptures speak, we speak; where the Scriptures are silent, we are silent. In matters of faith: unity; in matters of opinion: liberty; in all things: love.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-10">
            {fullBeliefs.map((b, idx) => (
              <article
                key={idx}
                className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                    {b.title}
                  </h2>
                </div>
                <div className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  Key Scriptures: {b.scriptures}
                </div>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {b.summary}
                </p>
              </article>
            ))}
          </div>

          {/* Invitation Box */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-secondary border border-border text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
              Have Questions About Biblical Doctrine?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-base">
              We welcome honest, open discussions of the Scriptures. Join our Wednesday Bible Class at 5:00 PM or schedule a personal Bible study with our minister.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-sm shadow-card-soft">
                <Link to="/contact">
                  Request a Free Bible Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 h-12 text-sm border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/teachings">
                  Listen to Sermons
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beliefs;
