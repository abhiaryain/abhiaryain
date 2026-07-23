import type { LucideProps } from "lucide-react";

export function Next(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Next.js"
      role="img"
      {...props}
    >
      <mask
        id="next-js__a"
        x={0}
        y={0}
        width={100}
        height={100}
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx={50} cy={50} r={50} fill="black" />
      </mask>

      <g mask="url(#next-js__a)">
        <circle
          cx={50}
          cy={50}
          r={48.335}
          fill="black"
          stroke="#ffffff"
          strokeWidth={3.33}
        />

        <path
          d="M83.06 87.51 38.41 30H30v39.98h6.73V38.55l41.05 53.03a50 50 0 0 0 5.28-4.07"
          fill="url(#next-js__b)"
        />

        <rect
          x={63.889}
          y={30}
          width={6.667}
          height={40}
          fill="url(#next-js__c)"
        />
      </g>

      <defs>
        <linearGradient
          id="next-js__b"
          x1={60.556}
          y1={64.722}
          x2={80.278}
          y2={89.167}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={0.604} stopColor="white" stopOpacity={0} />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>

        <linearGradient
          id="next-js__c"
          x1={67.222}
          y1={30}
          x2={67.111}
          y2={59.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}
