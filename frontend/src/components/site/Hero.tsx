import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { PlayCircle, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import heroSanctuary from "@/assets/hero-sanctuary.jpg";
import heroBible from "@/assets/hero-bible.jpg";
import heroWorship from "@/assets/hero-worship.jpg";

const slides = [
  {
    image: heroSanctuary,
    eyebrow: "Welcome Home",
    title: "A House of Faith.\nA Family of Hope.",
    subtitle: "Worship with the Church of Christ, Lugbe: where the gospel is taught with clarity and lived with love.",
  },
  {
    image: heroWorship,
    eyebrow: "Sunday Worship",
    title: "Lift Every Voice\nin Praise & Truth.",
    subtitle: "Join us this Sunday for inspired worship, biblical teaching and authentic community in the heart of Abuja.",
  },
  {
    image: heroBible,
    eyebrow: "Rooted in the Word",
    title: "Discover the Living\nWord of God.",
    subtitle: "Bible class, fellowship and discipleship: equipping every believer to walk boldly in Christ.",
  },
];

export const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden bg-primary-deep text-white pt-24 pb-16 lg:py-0">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none z-10" />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] bg-primary-glow/20 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] bg-accent/15 rounded-full blur-[160px] pointer-events-none z-10" />

      <div className="container relative z-20 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/15 mb-6 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-xs uppercase tracking-[0.25em] text-white/90">
                {slides[current].eyebrow}
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.02] text-balance whitespace-pre-line animate-fade-in-up">
              {slides[current].title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed animate-fade-in-up delay-100 mx-auto lg:mx-0">
              {slides[current].subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-200 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold rounded-full px-8 h-14 text-base">
                <Link to="/events">Plan Your Visit <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white backdrop-blur-md">
                <Link to="/teachings"><PlayCircle className="h-5 w-5 mr-2" /> Watch Teachings</Link>
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="mt-12 flex gap-3 justify-center lg:justify-start">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === current ? "w-12 bg-accent" : "w-6 bg-white/20 hover:bg-white/40",
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Visual 3D Tilt Carousel */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <Carousel
                setApi={setApi}
                plugins={[
                  Autoplay({
                    delay: 6000,
                  }),
                ]}
                className="w-full"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-elegant border border-white/15 bg-primary-deep/40 backdrop-blur-sm group">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Lugbe, Abuja</span>
                          <h3 className="font-display text-2xl font-semibold text-white mt-1">Church of Christ</h3>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Info Card Overlay with strictly Sunday 9am & Wednesday 5pm */}
              <div className="mt-12 lg:-mt-24 lg:ml-12 relative z-30 max-w-md mx-auto lg:mx-0">
                <div className="relative glass rounded-3xl p-8 shadow-elegant border border-white/15">
                  <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4 font-bold">Worship Schedule</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                        <Clock className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">Sunday Service</div>
                        <div className="font-semibold text-lg">8:00 AM Worship Service</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                        <Clock className="h-4 w-4 text-white/70" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">Wednesday Gathering</div>
                        <div className="font-semibold text-lg">5:00 PM Bible Class</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                        <MapPin className="h-4 w-4 text-white/70" />
                      </div>
                      <div>
                        <div className="text-xs text-white/50 uppercase tracking-wider">Location</div>
                        <div className="font-medium leading-tight">By Berger Yard, Off Airport Road, Lugbe, Abuja</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scripture marquee bar: no emdashes */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-primary-deep/60 backdrop-blur-md py-4 overflow-hidden z-30">
        <div className="flex items-center gap-12 text-sm text-white/70 whitespace-nowrap animate-[shimmer_18s_linear_infinite]" style={{ backgroundSize: "200% 100%" }}>
          <span className="px-6">✦ &nbsp; "I am the way, the truth, and the life." - John 14:6</span>
          <span className="px-6">✦ &nbsp; "Where two or three are gathered in My name..." - Matthew 18:20</span>
          <span className="px-6">✦ &nbsp; "Let us hold fast the confession of our hope." - Hebrews 10:23</span>
          <span className="px-6">✦ &nbsp; "Be still, and know that I am God." - Psalm 46:10</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
