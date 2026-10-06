import { useState } from "react";
import { Phone, Mail, Search, Users, MessageCircle, MapPin, UserCheck } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Input } from "@/components/ui/input";
import { membersData } from "@/data/membersData";
import ministerPhoto from "@/assets/minister.jpg";

const departments = [
  "All Departments",
  "Leadership & Pulpit",
  "Secretariat & Teaching",
  "Women's Ministry",
  "Worship & Youth",
  "Children's Ministry",
  "Benevolence & Care",
  "Media & Technology",
  "Hospitality",
  "Evangelism",
  "Prayer & Visitation",
  "Protocol & Ushering",
  "Administration & Finance",
];

export const Members = () => {
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");

  const filteredMembers = membersData.filter((member) => {
    const matchesDept =
      selectedDept === "All Departments" || member.department === selectedDept;
    const matchesSearch =
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.role.toLowerCase().includes(search.toLowerCase()) ||
      member.department.toLowerCase().includes(search.toLowerCase()) ||
      member.phone.includes(search);
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-primary-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            One Body in Christ
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mt-3 leading-tight">
            Church Members Directory
          </h1>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            Connected as brothers and sisters in Christ Jesus. Reach out to ministry coordinators, workers, and brethren across our congregation in Lugbe, Abuja.
          </p>
        </div>
      </section>

      {/* Directory Content Area */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          {/* Search & Department Filters */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-display font-semibold text-lg text-foreground">
                  Showing {filteredMembers.length} of {membersData.length} Brethren
                </span>
              </div>

              <div className="w-full sm:w-80 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, role, or phone..."
                  className="pl-10 h-11 bg-card rounded-full border-border text-sm"
                />
              </div>
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                    selectedDept === dept
                      ? "bg-primary text-primary-foreground border-primary shadow-card-soft"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Member Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member) => (
              <article
                key={member.id}
                className="group bg-card rounded-3xl p-6 border border-border hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {/* Picture or Monogram Avatar */}
                    {member.avatar ? (
                      <img
                        src={ministerPhoto}
                        alt={member.name}
                        className="h-16 w-16 rounded-2xl object-cover object-top border-2 border-primary/20 shadow-card-soft shrink-0"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-2xl bg-gradient-hero text-primary-foreground flex items-center justify-center font-display font-bold text-xl shadow-card-soft group-hover:scale-105 transition-transform shrink-0">
                        {member.initials}
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {member.name}
                      </h2>
                      <div className="text-xs font-semibold text-primary mt-1">
                        {member.role}
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">
                        {member.department}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mb-4 bg-secondary/80 px-3 py-1 rounded-full w-fit">
                    <MapPin className="h-3 w-3 text-accent" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="pt-4 border-t border-border/60 space-y-2 text-xs">
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-lg hover:bg-secondary/60"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-accent" />
                      <span className="font-medium text-foreground">{member.phone}</span>
                    </span>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Call</span>
                  </a>

                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-lg hover:bg-secondary/60"
                  >
                    <span className="flex items-center gap-2 truncate pr-2">
                      <Mail className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </span>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider shrink-0">Email</span>
                  </a>

                  <a
                    href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full text-xs font-semibold text-emerald-700 bg-emerald-500/10 hover:bg-emerald-500/20 py-2 rounded-xl transition-colors mt-2"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> Message on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-20 bg-secondary/30 rounded-3xl border border-dashed border-border">
              <Users className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-display text-xl font-semibold">No member found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try another search keyword or change the department filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Members;
