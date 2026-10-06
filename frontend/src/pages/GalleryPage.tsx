import { useState, useMemo } from "react";
import { ZoomIn, ChevronLeft, ChevronRight, X, Image as ImageIcon, Filter } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { galleryPhotos, galleryTags } from "@/data/galleryData";

export const GalleryPage = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All Moments");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (selectedTag === "All Moments") return galleryPhotos;
    return galleryPhotos.filter((p) => p.tag === selectedTag);
  }, [selectedTag]);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex + filteredPhotos.length - 1) % filteredPhotos.length
    );
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-20">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 md:py-28 bg-primary-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Photo Archive
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mt-3 leading-tight">
            Church Moments & Gallery
          </h1>
          <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
            Explore photographs of congregational worship, Bible studies, fellowship gatherings, and evangelism at Church of Christ, Lugbe. Filter by category tags below.
          </p>
        </div>
      </section>

      {/* Main Gallery with Tag Filter */}
      <section className="py-16 md:py-24 bg-background flex-1">
        <div className="container">
          {/* Tag Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto no-scrollbar">
              {galleryTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag);
                    setSelectedPhotoIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground border-primary shadow-card-soft"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="text-xs font-medium text-muted-foreground shrink-0 flex items-center gap-1.5">
              <Filter className="h-3.5 w-3.5 text-accent" />
              <span>Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? "Photo" : "Photos"}</span>
            </div>
          </div>

          {/* Photos Grid: Only tags on images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] bg-card border border-border shadow-card-soft hover:shadow-elegant transition-all duration-500"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Bottom bar: Tag badge only */}
                <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between text-white z-10">
                  <span className="text-[11px] uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full font-semibold text-accent border border-white/10 shadow-sm">
                    {photo.tag}
                  </span>

                  <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-16 bg-secondary/30 rounded-3xl border border-dashed border-border">
              <ImageIcon className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold">No photos found under "{selectedTag}"</h3>
              <p className="text-sm text-muted-foreground mt-1">Please select another tag to explore more photos.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
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

          {/* Previous button */}
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
              src={filteredPhotos[selectedPhotoIndex].src}
              alt={filteredPhotos[selectedPhotoIndex].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                {filteredPhotos[selectedPhotoIndex].tag} · Photo {selectedPhotoIndex + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>

          {/* Next button */}
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

      <Footer />
    </div>
  );
};

export default GalleryPage;
