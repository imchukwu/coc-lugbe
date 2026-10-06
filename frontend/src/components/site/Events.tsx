import { useMemo } from "react";
import { CalendarDays, MapPin, ArrowRight, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getUpcomingChurchEvents, type ChurchEvent } from "@/data/eventsData";

export const Events = () => {
  // Only render events that are strictly after the current time/date
  const upcomingEvents = useMemo(() => {
    return getUpcomingChurchEvents(6);
  }, []);

  return (
    <section id="events" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Church Calendar</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 leading-tight">
              Upcoming Programs & Events
            </h2>
            <p className="mt-3 text-muted-foreground text-sm md:text-base">
              Mark your calendar for our upcoming praise services, evangelism campaigns, song sessions, and lectureships. Only future events are displayed.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground self-start md:self-auto h-11 px-6">
            <Link to="/events">
              View All Events & Schedule <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((e) => (
              <article
                key={e.id}
                className="group flex flex-col justify-between rounded-3xl bg-gradient-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-16 h-18 py-2 px-3 rounded-2xl bg-gradient-hero text-primary-foreground flex flex-col items-center justify-center shadow-card-soft">
                      <div className="text-[10px] uppercase tracking-widest text-accent font-semibold">{e.month}</div>
                      <div className="font-display text-2xl font-bold leading-none mt-0.5">{e.day}</div>
                    </div>

                    <span className="text-[10px] uppercase tracking-wider bg-accent-soft text-accent-foreground px-2.5 py-1 rounded-full font-semibold">
                      {e.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {e.title}
                  </h3>

                  <div className="mt-2.5 flex items-start gap-1.5 text-xs text-primary font-medium">
                    <Repeat className="h-3.5 w-3.5 shrink-0 mt-0.5 text-accent" />
                    <span className="line-clamp-2">{e.schedule}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-border/60 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-accent" /> {e.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> {e.place}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-3xl bg-secondary/50 border border-dashed border-border">
            <CalendarDays className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-display text-lg font-semibold text-foreground">No upcoming special events scheduled at this moment.</h3>
            <p className="text-sm text-muted-foreground mt-1">Check back soon for new announcements.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
