import { createContext, type ReactNode, useContext } from "react";
import { EXPERIENCE_DATA } from "@/data/experience";
import { LEARNINGS_DATA } from "@/data/learnings";
import { PERSONAL_DATA } from "@/data/personal";
import { PROJECTS_DATA } from "@/data/projects";
import { SOCIAL_DATA } from "@/data/social";

const DATA = {
  experience: EXPERIENCE_DATA,
  learnings: LEARNINGS_DATA,
  personal: PERSONAL_DATA,
  projects: PROJECTS_DATA,
  social: SOCIAL_DATA,
};

type DataContextType = typeof DATA;

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  return <DataContext.Provider value={DATA}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used inside a DataProvider");
  }

  return context;
}
