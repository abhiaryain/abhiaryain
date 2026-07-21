import type { Personal } from "@/types/personal";

export const PERSONAL = {
  name: "Abhishek Kumar",
  nickname: "Abhi Arya",
  title: "Software Engineer",
  avatar: "https://avatars.githubusercontent.com/u/302746395",
  image: "/avatar.webp",
  portfolio: "https://abhiarya.in",
  github: "abhiaryain",
  twitter: "abhiaryain",
  linkedin: "abhiaryain",
  phones: ["+919546458806", "+919162388695"],
  emails: [
    "career.abhiarya@gmail.com",
    "github.abhiarya@gmail.com",
    "self.abhiarya@gmail.com",
  ],
  bio: `Software engineer passionate about building high-quality products and contributing to open-source.`,
  summary: `Software engineer experienced in building scalable backend systems using TypeScript, Node, Redis, Kafka, Docker, AWS, and more. Currently building Currunt, while also contributing to open-source projects. When I'm not coding, I enjoy writing articles to share about my learnings.`,
  address: {
    state: "New Delhi",
    country: "India",
    url: "https://www.google.com/maps/place/new-delhi",
  },
} as const satisfies Personal;
