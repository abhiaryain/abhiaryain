import type { LucideProps } from "lucide-react";

export function React(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="-11.5 -10.23174 23 20.46348"
      fill="currentColor"
      aria-label="React"
      role="img"
      {...props}
    >
      <circle r={2.05} fill="#61dafb" />
      <g stroke="#61dafb" fill="none">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  );
}
