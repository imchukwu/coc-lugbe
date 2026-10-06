export type TeachingFormat = "video" | "audio" | "slides" | "short" | "podcast" | "article";
export type TeachingStyle = "sermon" | "bible-class" | "short-clip" | "podcast" | "article";

export interface TeachingItem {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  format: TeachingFormat;
  style: TeachingStyle;
  duration?: string;
  readTime?: string;
  scripture: string;
  summary: string;
  mediaUrl?: string;
  downloadUrl?: string;
  slidesUrl?: string;
  tag: string;
}

export const teachingsData: TeachingItem[] = [
  {
    id: "1",
    title: "Walking by Faith in Perilous Times",
    speaker: "Evang. Rupert T. Kukwa",
    date: "May 03, 2026",
    series: "Faith & Perseverance",
    format: "video",
    style: "sermon",
    duration: "45 min",
    scripture: "2 Corinthians 5:7, Hebrews 11:1-6",
    summary: "A powerful exposition on remaining steadfast when world circumstances shake our foundations, anchoring our conviction in God's promises.",
    tag: "Sunday Sermon",
  },
  {
    id: "2",
    title: "The Plan of Salvation: Restoring the Biblical Pattern",
    speaker: "Evang. Rupert T. Kukwa",
    date: "Apr 29, 2026",
    series: "New Testament Doctrine",
    format: "slides",
    style: "bible-class",
    duration: "40 min",
    scripture: "Acts 2:36-47, Romans 6:3-7",
    summary: "Exhaustive slide deck and exposition comparing man-made doctrines with the clear New Testament commands of hearing, believing, repentance, confession, and baptism.",
    slidesUrl: "#download-slides",
    tag: "Bible Class Slides",
  },
  {
    id: "3",
    title: "60 Seconds of Truth: Why A Cappella Singing in the Church?",
    speaker: "Evang. Rupert T. Kukwa",
    date: "Apr 27, 2026",
    series: "Spiritual Bites",
    format: "short",
    style: "short-clip",
    duration: "1 min",
    scripture: "Ephesians 5:19, Colossians 3:16",
    summary: "A crisp 60-second video explaining the apostolic mandate to sing and make melody with the human heart without mechanical instruments.",
    tag: "Short Video",
  },
  {
    id: "4",
    title: "The Lugbe Believer Podcast: Discipleship in a Busy City",
    speaker: "Evang. Rupert T. Kukwa & Bro. Peter Danladi",
    date: "Apr 24, 2026",
    series: "Living for Christ in Abuja",
    format: "podcast",
    style: "podcast",
    duration: "28 min",
    scripture: "Philippians 2:12-16",
    summary: "Episode 14 of our weekly audio podcast discussing practical daily challenges of working, raising families, and staying holy in the Federal Capital Territory.",
    tag: "Weekly Podcast",
  },
  {
    id: "5",
    title: "Why Weekly Partaking of the Lord's Supper Matters",
    speaker: "Bro. Peter O. Danladi",
    date: "Apr 20, 2026",
    series: "Worship & Ordinances",
    format: "article",
    style: "article",
    readTime: "6 min",
    scripture: "Acts 20:7, 1 Corinthians 11:23-29",
    summary: "An in-depth scriptural study examining the apostolic practice of communing every first day of the week and what it means for the local church today.",
    tag: "Biblical Article",
  },
  {
    id: "6",
    title: "Exposition of Romans 8: More Than Conquerors",
    speaker: "Evang. Rupert T. Kukwa",
    date: "Apr 15, 2026",
    series: "The Epistles to the Romans",
    format: "audio",
    style: "bible-class",
    duration: "52 min",
    scripture: "Romans 8:28-39",
    summary: "Audio recording and comprehensive study notes examining the eternal security of believers who walk after the Spirit rather than after the flesh.",
    tag: "Midweek Audio",
  },
];
