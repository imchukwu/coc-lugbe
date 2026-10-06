import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary-deep text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,hsl(var(--primary-glow)/0.25),transparent_50%)]" />
      <div className="container relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-white flex items-center justify-center shadow-gold overflow-hidden p-1">
                <img src="/logo.png" alt="Church of Christ Lugbe Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">Church of Christ</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-white/60">Lugbe · Abuja</div>
              </div>
            </div>
            <p className="mt-6 text-white/65 leading-relaxed text-sm">
              A family of believers committed to the Word of God, apostolic worship, and reaching our city for Christ Jesus.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-5">Navigation</div>
            <ul className="space-y-3 text-white/75 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About & History</Link></li>
              <li><Link to="/beliefs" className="hover:text-accent transition-colors">What We Believe</Link></li>
              <li><Link to="/teachings" className="hover:text-accent transition-colors">Teachings & Media</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Moments & Gallery</Link></li>
              <li><Link to="/events" className="hover:text-accent transition-colors">Service Times & Events</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-5">Weekly Services</div>
            <ul className="space-y-4 text-white/75 text-sm">
              <li className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-accent font-semibold text-xs uppercase tracking-wider">Sunday Morning</div>
                <div className="text-white font-medium text-base mt-0.5">8:00 AM Worship Service</div>
                <div className="text-xs text-white/60 mt-1">Communion, a cappella praise & sermon</div>
              </li>
              <li className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-accent font-semibold text-xs uppercase tracking-wider">Wednesday Evening</div>
                <div className="text-white font-medium text-base mt-0.5">5:00 PM Bible Class</div>
                <div className="text-xs text-white/60 mt-1">Interactive scriptural study & prayers</div>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-5">Location & Contact</div>
            <ul className="space-y-3 text-white/75 text-sm leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>By Berger Yard, Off Airport Road,<br />Lugbe, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>+234 803 123 4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span>hello@coclugbe.org</span>
              </li>
              <li className="pt-2">
                <span className="text-xs text-accent">Minister: Evang. Rupert T. Kukwa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Church of Christ, Lugbe, Abuja. All rights reserved.</div>
          <div className="italic font-display">Romans 16:16: The churches of Christ salute you.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
