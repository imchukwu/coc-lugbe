import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Welcome from "@/components/site/Welcome";
import ServiceTimes from "@/components/site/ServiceTimes";
import DailyQuiz from "@/components/site/DailyQuiz";
import BeliefsSection from "@/components/site/BeliefsSection";
import TeachingHub from "@/components/site/TeachingHub";
import Minister from "@/components/site/Minister";
import Events from "@/components/site/Events";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <ServiceTimes />
        <DailyQuiz />
        <BeliefsSection />
        <TeachingHub />
        <Minister />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
