export default function Sprig({ className = "", flip = false }) {
  return (
    <svg
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 30 C 40 10, 80 50, 120 28 C 150 12, 175 22, 198 8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M28 22 C 22 14, 26 6, 36 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M50 36 C 46 46, 52 54, 62 56" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M78 26 C 74 16, 80 8, 90 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M104 34 C 100 44, 106 52, 116 54" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M140 18 C 136 9, 142 2, 152 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M165 16 C 163 25, 170 31, 180 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
