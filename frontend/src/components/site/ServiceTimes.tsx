import { Calendar, Clock, MapPin, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
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

export const ServiceTimes = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-deep text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(var(--primary-glow)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 35%)",
        }}
      />
      <div className="container relative">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            <Calendar className="h-4 w-4" /> Weekly Gatherings
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Come and worship with us.
          </h2>
          <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed">
            Our doors and hearts are open every week in Lugbe, Abuja. Join our family for reverent worship and sound biblical instruction.
          </p>
        </div>

        {/* Strictly the two designated weekly services */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
          {services.map((s) => (
            <div
              key={s.name}
              className="group relative rounded-3xl glass p-8 md:p-10 hover:bg-white/[0.12] transition-all duration-500 hover:-translate-y-1 border border-white/15 shadow-elegant flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="inline-block text-[11px] uppercase tracking-[0.2em] bg-accent/20 text-accent px-3 py-1 rounded-full font-semibold">
                    {s.badge}
                  </span>
                  <div className="h-12 w-12 rounded-2xl bg-white/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="text-xs uppercase tracking-[0.25em] text-white/60 mb-1">{s.day}</div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">{s.name}</h3>

                <div className="flex items-center gap-2.5 text-accent font-display text-3xl md:text-4xl font-bold my-4">
                  <Clock className="h-7 w-7 text-accent shrink-0" />
                  <span>{s.time}</span>
                </div>

                <p className="text-sm md:text-base text-white/70 leading-relaxed">{s.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-accent" /> Main Sanctuary, Lugbe
                </span>
                <span className="text-accent font-medium">All are welcome</span>
              </div>
            </div>
          ))}
        </div>

        {/* Location bar with action buttons */}
        <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold">Meeting Place</div>
              <div className="text-sm font-medium text-white">By Berger Yard, Off Airport Road, Lugbe, Abuja, Nigeria</div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button asChild className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-6 h-11 text-xs font-semibold shadow-gold w-full sm:w-auto">
              <Link to="/contact">
                Plan Your Visit <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
            <Button asChild className="rounded-full bg-white text-primary-deep hover:bg-white/90 border border-white px-5 h-11 text-xs font-semibold shadow-sm w-full sm:w-auto">
              <Link to="/events">
                Full Calendar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
