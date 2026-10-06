const VisionIcon = ({ size = 80 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Baseline */}
      <path
        d="M8 68H72"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Growth bars */}
      <rect
        x="14"
        y="53"
        width="10"
        height="15"
        rx="2"
        fill="currentColor"
        opacity="0.25"
      />

      <rect
        x="29"
        y="44"
        width="10"
        height="24"
        rx="2"
        fill="currentColor"
        opacity="0.45"
      />

      <rect
        x="44"
        y="34"
        width="10"
        height="34"
        rx="2"
        fill="currentColor"
        opacity="0.7"
      />

      <rect
        x="59"
        y="22"
        width="10"
        height="46"
        rx="2"
        fill="currentColor"
      />

      {/* Rising graph line */}
      <path
        d="M13 52C25 48 34 42 43 35C50 29 56 23 64 15"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arrow head */}
      <path
        d="M57 15H64V22"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Star */}
      <path
        d="
          M64 5
          L66.1 10.9
          L72 13
          L66.1 15.1
          L64 21
          L61.9 15.1
          L56 13
          L61.9 10.9
          Z
        "
        fill="#F59E0B"
      />

      {/* Star highlight */}
      <circle
        cx="63"
        cy="11.5"
        r="1"
        fill="white"
        opacity="0.8"
      />
    </svg>
  );
};

export default VisionIcon;