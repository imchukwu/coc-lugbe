import g1 from "@/assets/gallery/gallery-1.jpg";
import g2 from "@/assets/gallery/gallery-2.jpg";
import g3 from "@/assets/gallery/gallery-3.jpg";
import g4 from "@/assets/gallery/gallery-4.jpg";
import g5 from "@/assets/gallery/gallery-5.jpg";
import g6 from "@/assets/gallery/gallery-6.jpg";
import g7 from "@/assets/gallery/gallery-7.jpg";
import g8 from "@/assets/gallery/gallery-8.jpg";
import g9 from "@/assets/gallery/gallery-9.jpg";
import g10 from "@/assets/gallery/gallery-10.jpg";

export interface GalleryPhoto {
  id: number;
  src: string;
  tag: string;
  alt: string;
  className?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    src: g1,
    tag: "Worship",
    alt: "Congregational Worship",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    src: g2,
    tag: "Fellowship",
    alt: "Brotherhood in Christ",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: g3,
    tag: "Fellowship",
    alt: "Sisters in Service",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: g4,
    tag: "Worship",
    alt: "Song Leading",
    className: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    id: 5,
    src: g5,
    tag: "Spiritual Growth",
    alt: "Youth Bible Study",
    className: "col-span-1 md:col-span-1 row-span-2",
  },
  {
    id: 6,
    src: g6,
    tag: "Outreach",
    alt: "Evangelism Outreach",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 7,
    src: g7,
    tag: "Spiritual Growth",
    alt: "Bible Class Gathering",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 8,
    src: g8,
    tag: "Fellowship",
    alt: "Congregational Fellowship",
    className: "col-span-1 row-span-1",
  },
  {
    id: 9,
    src: g9,
    tag: "Worship",
    alt: "Prayers of the Saints",
    className: "col-span-1 row-span-1",
  },
  {
    id: 10,
    src: g10,
    tag: "Community",
    alt: "Church Family",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
];

export const galleryTags = [
  "All Moments",
  "Worship",
  "Fellowship",
  "Spiritual Growth",
  "Outreach",
  "Community",
];
