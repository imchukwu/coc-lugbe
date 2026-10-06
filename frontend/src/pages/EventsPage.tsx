import { useMemo } from "react";
import { Clock, MapPin, Sparkles, BookOpen, ArrowRight, CalendarDays, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { getUpcomingChurchEvents } from "@/data/eventsData";

const weeklyServices = [
  {
    day: "Every Sunday",
    name: "Sunday Worship Service",
    time: "8:00 AM",
    badge: "The Lord's Day",
    icon: Sparkles,
    desc: "A cappella praise, congregational prayers, the Lord's Supper (communion), scriptural giving, and expository sermon from God's Word.",
  },
  {
    day: "Every Wednesday",
    name: "Wednesday Bible Class",
    time: "5:00 PM",
    badge: "Midweek Spiritual Renewal",
    icon: BookOpen,
    desc: "Interactive, verse-by-verse scriptural examination, questions and answers, and community prayer to strengthen believers throughout the week.",
  },
];

export const EventsPage = () => {
  // Only render events that are strictly after the current time/date
  const upcomingEvents = useMemo(() => {
    return getUpcomingChurchEvents(12);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-primary-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Gathering Together
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mt-3 leading-tight">
            Service Times & Church Calendar
          </h1>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            Join us for weekly worship and community gatherings in Lugbe, Abuja. Find all regular service times and upcoming events below.
          </p>
        </div>
      </section>

      {/* Weekly Schedule Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Weekly Gatherings
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
              Our Regular Worship Times
            </h2>
            <p className="text-muted-foreground mt-2 text-base">
              Sunday Worship Service at 8:00 AM and Wednesday Bible Class at 5:00 PM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {weeklyServices.map((s) => (
              <div
                key={s.name}
                className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-xs uppercase tracking-widest text-accent font-bold bg-accent/10 px-3 py-1 rounded-full">
                      {s.badge}
                    </span>
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <s.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {s.day}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-2">
                    {s.name}
                  </h3>

                  <div className="flex items-center gap-2 text-primary font-display text-3xl font-bold my-4">
                    <Clock className="h-6 w-6 text-accent" />
                    <span>{s.time}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> By Berger Yard, Off Airport Road
                  </span>
                  <span className="text-primary font-semibold">All are welcome</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Church Events Calendar Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Congregational Calendar
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-2">
              Upcoming Programs & Events
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-2xl mx-auto">
              Our fellowship calendar incorporates monthly evangelism, quarterly singing sessions, praise services, benevolent visitations, and annual seminars. Only upcoming events are listed.
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((e) => (
                <article
                  key={e.id}
                  className="flex gap-6 p-6 md:p-7 rounded-3xl bg-card border border-border shadow-card-soft hover:shadow-elegant transition-all flex-col sm:flex-row"
                >
                  <div className="shrink-0 w-24 h-28 rounded-2xl bg-gradient-hero text-primary-foreground flex flex-col items-center justify-center shadow-card-soft self-start sm:self-auto">
                    <div className="text-xs uppercase tracking-widest text-accent font-semibold">{e.month}</div>
                    <div className="font-display text-4xl font-bold leading-none mt-1">{e.day}</div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] bg-accent-soft text-accent-foreground px-2.5 py-1 rounded-full font-semibold">
                      {e.tag}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-2">
                      {e.title}
                    </h3>

                    <div className="mt-2 text-xs font-semibold text-primary flex items-start gap-1.5">
                      <Repeat className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{e.schedule}</span>
                    </div>

                    <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-accent" /> {e.time}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-accent" /> {e.place}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 rounded-3xl bg-card border border-dashed border-border">
              <CalendarDays className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground">No upcoming events scheduled at this moment.</h3>
              <p className="text-sm text-muted-foreground mt-1">Please check back soon for our next congregational programs.</p>
            </div>
          )}

          <div className="mt-14 text-center">
            <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-sm shadow-card-soft">
              <Link to="/contact">
                Plan Your Visit With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
