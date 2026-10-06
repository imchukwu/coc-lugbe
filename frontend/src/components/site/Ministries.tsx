import { Baby, Users2, HeartHandshake, GraduationCap, Music, HandHeart } from "lucide-react";

const ministries = [
  { icon: Baby, title: "Children's Ministry", desc: "Faith-building experiences for kids of every age." },
  { icon: GraduationCap, title: "Youth & Teens", desc: "Equipping the next generation in truth and identity." },
  { icon: Users2, title: "Men's Fellowship", desc: "Brothers walking together in purpose and integrity." },
  { icon: HandHeart, title: "Women's Fellowship", desc: "Sisterhood rooted in Scripture, prayer and service." },
  { icon: Music, title: "Worship & Music", desc: "Lifting praise with skill, heart and reverence." },
  { icon: HeartHandshake, title: "Outreach & Evangelism", desc: "Reaching Lugbe and beyond with the gospel." },
];

export const Ministries = () => {
  return (
    <section id="ministries" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-20 -left-20 h-[400px] w-[400px] bg-gradient-glow opacity-40 blur-3xl pointer-events-none" />
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Get Involved</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-tight">
            Ministries built for every season of life.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From the youngest in our family to seasoned saints, there is a place for you to belong, grow and serve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <div
              key={m.title}
              className="group relative rounded-3xl bg-gradient-card border border-border p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-hero text-primary-foreground flex items-center justify-center mb-5 shadow-card-soft group-hover:shadow-glow transition-shadow">
                  <m.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{m.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                <div className="mt-5 inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
