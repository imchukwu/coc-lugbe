import { useState } from "react";
import { Link } from "react-router-dom";
import { ZoomIn, ChevronLeft, ChevronRight, X, Image as ImageIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryPhotos } from "@/data/galleryData";

export const Gallery = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + galleryPhotos.length - 1) % galleryPhotos.length);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % galleryPhotos.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">
              <ImageIcon className="h-4 w-4" /> Moments & Fellowship
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Glimpses of Grace at Work
            </h2>
            <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
              Snapshots of worship, spiritual growth, sisterhood, brotherhood, and community life at Church of Christ, Lugbe.
            </p>
          </div>

          <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground self-start md:self-auto h-11 px-6">
            <Link to="/gallery">
              Full Gallery & Tags <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Bento Gallery Grid: Only tags on images, no title */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[200px] gap-4">
          {galleryPhotos.slice(0, 8).map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-card border border-border shadow-card-soft hover:shadow-elegant transition-all duration-500 ${photo.className || ""}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Bottom overlay: only the tag badge is rendered */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-center justify-between text-white z-10">
                <span className="text-[11px] uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-semibold text-accent border border-white/10 shadow-sm">
                  {photo.tag}
                </span>

                <div className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button taking user to the full /gallery page */}
        <div className="mt-14 text-center">
          <Button asChild className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-sm shadow-card-soft">
            <Link to="/gallery">
              Explore Full Gallery & Filter by Tags <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal: only tag, no title */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Close photo preview"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-4 md:left-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          {/* Photo container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryPhotos[selectedPhotoIndex].src}
              alt={galleryPhotos[selectedPhotoIndex].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                {galleryPhotos[selectedPhotoIndex].tag} · Photo {selectedPhotoIndex + 1} of {galleryPhotos.length}
              </span>
            </div>
          </div>

          {/* Navigation next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-4 md:right-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
