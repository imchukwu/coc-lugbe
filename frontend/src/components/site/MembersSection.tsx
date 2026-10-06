import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Search, Users, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { membersData } from "@/data/membersData";
import ministerPhoto from "@/assets/minister.jpg";

export const MembersSection = () => {
  const [search, setSearch] = useState("");

  const filteredMembers = membersData.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase()) ||
      m.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="members" className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Church Family Directory
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 leading-tight">
              Our Members & Brethren
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              We are many members, yet one body in Christ. Connect with brethren, ministry servants, and fellowship leaders across Lugbe.
            </p>
          </div>

          <div className="w-full lg:w-80">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search member or role..."
                className="pl-10 h-11 bg-card rounded-full border-border text-sm"
              />
            </div>
          </div>
        </div>

        {/* Member cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.slice(0, 8).map((member) => (
            <div
              key={member.id}
              className="group bg-card rounded-3xl p-6 border border-border hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {/* Photo or styled monogram */}
                  {member.avatar ? (
                    <img
                      src={ministerPhoto}
                      alt={member.name}
                      className="h-14 w-14 rounded-2xl object-cover object-top border-2 border-primary/20 shadow-card-soft"
                    />
                  ) : (
                    <div className="h-14 w-14 rounded-2xl bg-gradient-hero text-primary-foreground flex items-center justify-center font-display font-bold text-lg shadow-card-soft group-hover:scale-105 transition-transform">
                      {member.initials}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {member.name}
                    </h3>
                    <div className="text-xs text-primary font-medium truncate mt-0.5">
                      {member.role}
                    </div>
                    <div className="text-[11px] text-muted-foreground truncate">
                      {member.department}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact actions */}
              <div className="pt-4 mt-2 border-t border-border/60 space-y-2 text-xs">
                <a
                  href={`tel:${member.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-accent" />
                    <span>{member.phone}</span>
                  </span>
                  <span className="text-[10px] text-primary/70 font-semibold uppercase">Call</span>
                </a>

                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors py-1"
                >
                  <span className="flex items-center gap-2 truncate pr-2">
                    <Mail className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </span>
                  <span className="text-[10px] text-primary/70 font-semibold uppercase shrink-0">Email</span>
                </a>

                <a
                  href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 transition-colors pt-1"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Read More / Browse Full Directory button linking to /members page */}
        <div className="mt-14 text-center">
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-sm shadow-card-soft">
            <Link to="/members">
              <Users className="mr-2 h-4 w-4" /> Browse Complete Member Directory ({membersData.length} Brethren) <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
