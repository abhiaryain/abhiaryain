import type { LucideProps } from "lucide-react";

export function Resume(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Resume"
      role="img"
      {...props}
    >
      <rect x="3" y="2" width="18" height="20" rx="2"></rect>
      <path d="M3 8h18"></path>
      <path d="M3 12h10"></path>
      <path d="M3 16h10"></path>
      <path d="M6 4h8v2H6z"></path>
    </svg>
  );
}
