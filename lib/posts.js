import RAW from "./posts.json";
import { ASSET } from "./content";

// Articles copied from hrmoffice.org/blog. The live site reuses its page banners as post images,
// so each post gets a photo that fits its subject instead.
const IMAGES = {
  "nigerian-labour-laws": "/photos/hrm-client-meeting.webp",
  "hiring-right-candidate-guide": "/photos/office-braids.webp",
  "2025-corporate-training-programs": "/photos/desk.webp",
  "hrmoffice-2025-training-calendar": "/photos/expo-talk.webp",
  "hrmoffice-cipm-conference-2023": "/photos/expo-crowd.webp",
  "hr-outsourcing-competitive-tool": `${ASSET}/outsourcing_1.webp`,
  "hr-role-post-covid-era": "/photos/laptop.webp",
};

// Short cover lines for the designed thumbnails: [text before, highlighted words, text after, tone].
const COVERS = {
  "nigerian-labour-laws": ["The ", "labour laws", " every HR team must know", "deep"],
  "hiring-right-candidate-guide": ["Hire the ", "right person", ", the first time", "navy"],
  "2025-corporate-training-programs": ["Upskill your ", "HR, finance and management", " teams", "teal"],
  "hrmoffice-2025-training-calendar": ["Plan your team's ", "learning", " for the year", "sky"],
  "hrmoffice-cipm-conference-2023": ["Inside the ", "Lagos CIPM", " Conference", "light"],
  "hr-outsourcing-competitive-tool": ["Outsource HR, ", "stay competitive", "", "deep"],
  "hr-role-post-covid-era": ["What HR ", "does now", " after the pandemic", "amber"],
};

// Sentence case for the one title the old site wrote in capitals.
const tidy = (t) => t.replace(/^HOW TO HIRE THE RIGHT CANDIDATE:/, "How to Hire the Right Candidate:");

export const POSTS = RAW.map((p) => ({
  ...p,
  title: tidy(p.title),
  image: IMAGES[p.slug],
  cover: COVERS[p.slug],
  excerpt: p.blocks.find(([t]) => t === "p")?.[1] ?? "",
}));

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);
export const CATEGORIES = ["All", ...new Set(POSTS.map((p) => p.category))];
