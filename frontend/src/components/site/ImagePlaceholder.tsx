import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  className?: string;
  variant?: "deep" | "soft" | "gold";
}

export const ImagePlaceholder = ({ label = "Image", className, variant = "deep" }: Props) => {
  const bg =
    variant === "deep"
      ? "bg-gradient-hero"
      : variant === "gold"
      ? "bg-gradient-gold"
      : "bg-gradient-card";
  const fg = variant === "soft" ? "text-muted-foreground" : "text-primary-foreground/70";
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        bg,
        className,
      )}
      aria-label={`${label} placeholder`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-glow)/0.35),transparent_55%)]" />
      <div className={cn("relative flex flex-col items-center gap-2 text-center px-6", fg)}>
        <ImageIcon className="h-8 w-8 opacity-60" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">
          {label}
        </span>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
