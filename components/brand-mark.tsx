export function BrandMark({
  className,
  dark = false,
}: {
  className?: string
  dark?: boolean
}) {
  const gem = dark ? '#20291f' : '#f1e8d6'
  const hill = dark ? '#e8c98a' : '#33502b'
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 34C10 28 14 30 20 26C26 22 30 24 38 18"
        stroke={hill}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity={dark ? 0.7 : 1}
      />
      <path
        d="M2 40C10 35 15 37 22 33C29 29 33 31 46 25"
        stroke="#8c5a3c"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M24 6L33 20L24 30L15 20Z"
        stroke="#b4842c"
        strokeWidth="2.4"
        strokeLinejoin="round"
        fill={gem}
      />
      <path
        d="M24 6L33 20M24 6L15 20M15 20H33M24 30L19 20M24 30L29 20"
        stroke="#b4842c"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
