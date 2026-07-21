import type { Social } from "@/types/social";

export const SOCIALS = [
  {
    name: "career.abhiarya@gmail.com",
    url: "mailto:career.abhiarya@gmail.com",
    username: "career.abhiarya@gmail.com",
    icon: "email",
    slug: "email",
  },
  {
    name: "Phone",
    url: "tel:+919546458806",
    username: "+919546458806",
    icon: "phone",
  },
  {
    name: "GitHub",
    url: "https://github.com/abhiaryain",
    username: "abhiaryain",
    icon: "github",
    slug: "github",
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/abhiaryain",
    username: "abhiaryain",
    icon: "leetcode",
    slug: "leetcode",
  },
  {
    name: "X",
    url: "https://x.com/abhiaryain",
    username: "abhiaryain",
    icon: "x",
    slug: "x",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/abhiaryain",
    username: "abhiaryain",
    icon: "linkedin",
    slug: "linkedin",
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1kyc47uffptmaDb_305eemX14j8ophm5M/view?usp=sharing",
    username: "abhiarya",
    icon: "resume",
    slug: "resume",
    showLabel: true,
  },
] as const satisfies readonly Social[];
