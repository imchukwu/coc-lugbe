import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-glow opacity-30 blur-3xl pointer-events-none" />
      <div className="container relative">
        <div id="visit" className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Visit Us</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 leading-tight">
              We would love to meet you this Sunday.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Whether it is your first time or you are looking for a church home, come as you are.
              Our family will welcome you warmly.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-card border border-border shadow-card-soft">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Our Location</div>
                  <div className="text-muted-foreground mt-1">By Berger Yard, Off Airport Road, Lugbe, Abuja, Nigeria</div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-card border border-border shadow-card-soft">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Call Us</div>
                    <div className="text-muted-foreground text-sm mt-1">+234 803 123 4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-card border border-border shadow-card-soft">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground text-sm mt-1">hello@coclugbe.org</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for reaching out! We have received your message and will respond shortly.");
            }}
            className="relative rounded-3xl bg-gradient-deep p-8 md:p-10 text-white shadow-elegant overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <h3 className="font-display text-2xl font-semibold mb-2">Send us a message</h3>
              <p className="text-white/70 text-sm mb-8">
                Have a prayer request, question, or looking for spiritual guidance? We are here for you.
              </p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Full name" required className="bg-white/10 border-white/15 text-white placeholder:text-white/50 h-12 rounded-xl" />
                  <Input type="email" placeholder="Email address" required className="bg-white/10 border-white/15 text-white placeholder:text-white/50 h-12 rounded-xl" />
                </div>
                <Input placeholder="Phone number" className="bg-white/10 border-white/15 text-white placeholder:text-white/50 h-12 rounded-xl" />
                <Input placeholder="Subject" required className="bg-white/10 border-white/15 text-white placeholder:text-white/50 h-12 rounded-xl" />
                <Textarea placeholder="Your message or prayer request..." required rows={4} className="bg-white/10 border-white/15 text-white placeholder:text-white/50 rounded-xl resize-none" />

                <Button type="submit" className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl shadow-gold font-semibold">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
