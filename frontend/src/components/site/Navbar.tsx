import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/beliefs", label: "What We Believe" },
  { href: "/teachings", label: "Teachings & Media" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolidNav = !isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        showSolidNav
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-card-soft"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 rounded-xl bg-white shadow-elegant flex items-center justify-center overflow-hidden border border-border/50 p-1">
            <img
              src="/logo.png"
              alt="Church of Christ Lugbe Logo"
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="leading-tight">
            <div
              className={cn(
                "font-display text-lg font-semibold tracking-tight",
                showSolidNav ? "text-foreground" : "text-white",
              )}
            >
              Church of Christ
            </div>
            <div
              className={cn(
                "text-[11px] uppercase tracking-[0.25em]",
                showSolidNav ? "text-muted-foreground" : "text-white/70",
              )}
            >
              Lugbe · Abuja
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              to={l.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors relative py-1",
                  showSolidNav
                    ? isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary"
                    : isActive
                    ? "text-accent font-semibold"
                    : "text-white/85 hover:text-white",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full animate-fade-in" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold rounded-full px-6 h-11 text-xs font-semibold"
          >
            <Link to="/contact">
              <Calendar className="h-3.5 w-3.5 mr-1.5" /> Worship With Us
            </Link>
          </Button>

          {/* Mobile Navigation Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "xl:hidden rounded-full",
                  showSolidNav
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10 hover:text-white",
                )}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-96 bg-gradient-deep text-white border-l-0 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center p-1">
                    <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-white">Church of Christ</div>
                    <div className="text-[10px] uppercase tracking-widest text-accent">Lugbe · Abuja</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-1">
                  {navLinks.map((l) => (
                    <SheetClose asChild key={l.href}>
                      <NavLink
                        to={l.href}
                        className={({ isActive }) =>
                          cn(
                            "text-base font-display py-3 px-3 rounded-xl transition-colors flex items-center justify-between",
                            isActive
                              ? "bg-white/15 text-accent font-semibold"
                              : "text-white/80 hover:bg-white/10 hover:text-white",
                          )
                        }
                      >
                        <span>{l.label}</span>
                        <span className="text-xs text-white/40">→</span>
                      </NavLink>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="text-xs text-white/70">
                  <div className="font-semibold text-accent">Weekly Services:</div>
                  <div>Sunday Worship: 8:00 AM</div>
                  <div>Wednesday Bible Class: 5:00 PM</div>
                </div>

                <SheetClose asChild>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold">
                    <Link to="/contact">Plan Your Visit</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
