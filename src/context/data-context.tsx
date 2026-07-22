"use client";

import { createContext, type ReactNode, useContext } from "react";
import { EXPERIENCES } from "@/data/experience";
import { LEARNINGS } from "@/data/learnings";
import { PERSONAL } from "@/data/personal";
import { PROJECTS } from "@/data/projects";
import { SHIPPING } from "@/data/shipping";
import { SKILLS } from "@/data/skills";
import { SOCIALS } from "@/data/social";
import { WRITES } from "@/data/writes";

const value = {
  experiences: EXPERIENCES.toSorted((first, second) => {
    const firstEnd =
      first.end === "Present" ? Date.now() : new Date(first.end).getTime();
    const secondEnd =
      second.end === "Present" ? Date.now() : new Date(second.end).getTime();

    if (firstEnd !== secondEnd) {
      return secondEnd - firstEnd;
    }

    const firstStart = new Date(first.start).getTime();
    const secondStart = new Date(second.start).getTime();

    if (firstStart !== secondStart) {
      return secondStart - firstStart;
    }

    if (first.featured && !second.featured) {
      return -1;
    }

    if (!first.featured && second.featured) {
      return 1;
    }

    return (first.company || "").localeCompare(second.company || "");
  }),
  learnings: LEARNINGS,
  personal: PERSONAL,
  projects: PROJECTS,
  socials: SOCIALS,
  skills: SKILLS,
  shipping: SHIPPING,
  writes: WRITES,
};

type DataContextType = typeof value;

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used inside a DataProvider");
  }

  return context;
}
