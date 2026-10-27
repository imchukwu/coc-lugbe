import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show button after scrolling down 280px
      if (scrollTop > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage (0 - 100)
      if (docHeight > 0) {
        const scrolled = (scrollTop / docHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrolled)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circle calculations for progress ring (radius = 20)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out sm:bottom-8 sm:right-8",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      )}
    >
      <button
        onClick={scrollToTop}
        type="button"
        aria-label="Back to top"
        className={cn(
          "group relative flex h-12 w-12 items-center justify-center rounded-full",
          "bg-primary-deep/95 text-white shadow-xl backdrop-blur-md",
          "border border-white/15 hover:border-accent/80",
          "hover:bg-primary-deep hover:text-accent hover:shadow-gold",
          "transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          "active:scale-95"
        )}
      >
        {/* SVG Progress Ring */}
        <svg
          className="absolute inset-0 -rotate-90 pointer-events-none"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          {/* Background track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-white/10"
          />
          {/* Active progress stroke */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>

        {/* Arrow Icon */}
        <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />

        {/* Hover Tooltip for Desktop */}
        <span
          className={cn(
            "pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2",
            "whitespace-nowrap rounded-md bg-primary-deep px-2.5 py-1 text-[11px] font-medium tracking-wide text-white shadow-md border border-white/10",
            "opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden sm:block"
          )}
        >
          Back to top
        </span>
      </button>
    </div>
  );
};

export default BackToTop;
