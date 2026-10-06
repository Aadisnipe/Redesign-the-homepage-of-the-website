const MissionIcon = ({ size = 80 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Blue used by the target */}
        <linearGradient
          id="missionTarget"
          x1="15"
          y1="20"
          x2="65"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#24B5F2" />
          <stop offset="0.48" stopColor="#087CF5" />
          <stop offset="1" stopColor="#0646C8" />
        </linearGradient>

        {/* Blue used by the arrow feathers */}
        <linearGradient
          id="missionFeather"
          x1="58"
          y1="9"
          x2="72"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#25B7F3" />
          <stop offset="1" stopColor="#0870EA" />
        </linearGradient>
      </defs>

      {/* =====================================================
          TARGET
          ===================================================== */}

      {/* Outer blue ring */}
      <circle
        cx="43"
        cy="47"
        r="28"
        fill="url(#missionTarget)"
      />

      {/* White ring */}
      <circle
        cx="43"
        cy="47"
        r="21"
        fill="white"
      />

      {/* Middle blue ring */}
      <circle
        cx="43"
        cy="47"
        r="14.5"
        fill="url(#missionTarget)"
      />

      {/* Inner white ring */}
      <circle
        cx="43"
        cy="47"
        r="7.5"
        fill="white"
      />

      {/* Bullseye */}
      <circle
        cx="43"
        cy="47"
        r="5"
        fill="url(#missionTarget)"
      />

      {/* =====================================================
          ARROW FEATHERS
          ===================================================== */}

      {/* Upper feather */}
      <path
        d="
          M60.5 22
          L60.5 10
          Q60.5 8.5 61.6 9.4
          L68.9 16.7
          Q69.8 17.6 68.6 18.3
          L62.2 22.5
          Z
        "
        fill="url(#missionFeather)"
      />

      {/* Lower feather */}
      <path
        d="
          M61 20
          L71.5 20
          Q72.8 20 71.8 21.1
          L64 28.7
          Q63 29.7 62.5 28.2
          L59.5 22.5
          Z
        "
        fill="#0870EA"
      />

      {/* =====================================================
          ARROW SHAFT
          ===================================================== */}

      <path
        d="M43 47L65.5 24.5"
        stroke="#172F62"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* =====================================================
          IMPACT / MOTION MARKS
          ===================================================== */}

      {/* Left mark */}
      <path
        d="M11 31L7 27"
        stroke="#1684F5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Top mark */}
      <path
        d="M21 20L18.5 14"
        stroke="#1684F5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Horizontal mark */}
      <path
        d="M10 39H5"
        stroke="#1684F5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MissionIcon;