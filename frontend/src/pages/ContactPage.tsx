import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, HeartHandshake } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-primary-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mt-3 leading-tight">
            Contact & Directions
          </h1>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            We are here to serve you, pray with you, and welcome you into the family of God. Find our location in Lugbe, Abuja or send us a message.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Location details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                  Location & Hours
                </span>
                <h2 className="font-display text-3xl font-semibold text-foreground mt-2">
                  Visit Us in Lugbe, Abuja
                </h2>
                <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
                  Our auditorium is centrally situated right along the Airport Road corridor, easily accessible by public transit or private car.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-secondary border border-border flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Meeting Address</div>
                    <div className="text-muted-foreground text-sm mt-1">
                      By Berger Yard, Off Airport Road,<br />
                      Lugbe, Abuja, Federal Capital Territory, Nigeria
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-secondary border border-border flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Weekly Service Schedule</div>
                    <div className="text-muted-foreground text-sm mt-1 space-y-1">
                      <div><strong className="text-foreground">Sunday Worship:</strong> 8:00 AM</div>
                      <div><strong className="text-foreground">Wednesday Bible Class:</strong> 5:00 PM</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-secondary border border-border flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Minister & Pulpit Inquiries</div>
                    <div className="text-muted-foreground text-sm mt-1">
                      <div>Evang. Rupert T. Kukwa: +234 803 123 4567</div>
                      <div>Email: r.kukwa@coclugbe.org</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-secondary border border-border flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">General Church Secretariat</div>
                    <div className="text-muted-foreground text-sm mt-1">
                      hello@coclugbe.org
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message & Prayer Request Form */}
            <div className="lg:col-span-7">
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-elegant">
                <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                  Send a Message
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-2">
                  Prayer Request or Question?
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill out the form below and our minister or leadership team will get in touch with you promptly.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 text-center space-y-3">
                    <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
                    <h4 className="font-display text-xl font-bold text-foreground">Message Sent Successfully!</h4>
                    <p className="text-sm text-muted-foreground">
                      Thank you for reaching out. We have received your message and will be in touch with you soon. God bless you!
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="rounded-full mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground mb-1 block">Full Name</label>
                        <Input required placeholder="Bro. / Sis. / Friend" className="h-11 rounded-xl" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground mb-1 block">Email Address</label>
                        <Input type="email" required placeholder="your.email@example.com" className="h-11 rounded-xl" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground mb-1 block">Phone Number</label>
                        <Input placeholder="+234 ..." className="h-11 rounded-xl" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground mb-1 block">Inquiry Type</label>
                        <select className="w-full h-11 rounded-xl border border-input bg-background px-3 py-2 text-sm">
                          <option>General Question</option>
                          <option>Prayer Request</option>
                          <option>Bible Study Request</option>
                          <option>Minister Consultation</option>
                          <option>First-Time Visitor</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-muted-foreground mb-1 block">Subject</label>
                      <Input required placeholder="How can we help or pray for you?" className="h-11 rounded-xl" />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-muted-foreground mb-1 block">Message</label>
                      <Textarea required rows={4} placeholder="Write your message here..." className="rounded-xl resize-none" />
                    </div>

                    <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-card-soft">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
