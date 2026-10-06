const iconProps = {
  className: "service-illustration",
  viewBox: "0 0 64 64",
  fill: "none",
  "aria-hidden": true,
};

function AppIllustration() {
  return (
    <svg {...iconProps}>
      <rect
        x="16"
        y="5"
        width="31"
        height="54"
        rx="8"
        fill="#EEF4FC"
        stroke="#2868C7"
        strokeWidth="2"
      />
      <rect x="21" y="13" width="21" height="31" rx="3" fill="#fff" />
      <rect x="24" y="17" width="7" height="7" rx="2" fill="#E6333A" />
      <rect x="33" y="17" width="7" height="7" rx="2" fill="#BBD0EE" />
      <rect x="24" y="27" width="7" height="7" rx="2" fill="#BBD0EE" />
      <rect x="33" y="27" width="7" height="7" rx="2" fill="#2868C7" />
      <path
        d="M27 50h9"
        stroke="#2868C7"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="15" r="6" fill="#FCE8E9" />
      <path
        d="m48 15 1.5 1.5L52 13"
        stroke="#E6333A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WebIllustration() {
  return (
    <svg {...iconProps}>
      <rect
        x="5"
        y="10"
        width="50"
        height="39"
        rx="6"
        fill="#EEF4FC"
        stroke="#2868C7"
        strokeWidth="2"
      />
      <path d="M6 20h48" stroke="#2868C7" strokeWidth="2" />
      <circle cx="13" cy="15" r="1.5" fill="#E6333A" />
      <circle cx="19" cy="15" r="1.5" fill="#BBD0EE" />
      <circle cx="25" cy="15" r="1.5" fill="#BBD0EE" />
      <rect x="12" y="27" width="17" height="15" rx="2" fill="#BBD0EE" />
      <path
        d="M34 29h13M34 34h10M34 39h7"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 55h20M32 49v6"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m47 44 8 8-5 .8-.8 5-8-8z"
        fill="#E6333A"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ErpIllustration() {
  return (
    <svg {...iconProps}>
      <path
        d="M32 7 53 18.5v27L32 57 11 45.5v-27L32 7Z"
        fill="#EEF4FC"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11 19 32 31l21-12M32 31v26"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="24"
        y="21"
        width="16"
        height="13"
        rx="2"
        fill="#fff"
        stroke="#2868C7"
        strokeWidth="1.8"
      />
      <path
        d="M27 25h10M27 29h7"
        stroke="#E6333A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="19" cy="41" r="4" fill="#E6333A" />
      <circle cx="45" cy="41" r="4" fill="#BBD0EE" />
      <path
        d="M19 45v5M45 45v5"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MarketingIllustration() {
  return (
    <svg {...iconProps}>
      <path
        d="m9 26 31-12v35L9 37V26Z"
        fill="#EEF4FC"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 27H6a5 5 0 0 0 0 10h3M17 40l5 14h9l-6-11"
        fill="#fff"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M43 23c5 3 5 12 0 16"
        stroke="#E6333A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M48 18c9 6 9 20 0 26"
        stroke="#BBD0EE"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M37 46h18M40 41h12"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="48" cy="51" r="3" fill="#E6333A" />
    </svg>
  );
}

function SocialIllustration() {
  return (
    <svg {...iconProps}>
      <path
        d="M8 13a7 7 0 0 1 7-7h19a7 7 0 0 1 7 7v12a7 7 0 0 1-7 7H22l-9 7v-8a7 7 0 0 1-5-6V13Z"
        fill="#EEF4FC"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="19" r="2" fill="#E6333A" />
      <circle cx="25" cy="19" r="2" fill="#2868C7" />
      <circle cx="32" cy="19" r="2" fill="#2868C7" />
      <path
        d="M31 36a6 6 0 0 1 6-6h13a6 6 0 0 1 6 6v8a6 6 0 0 1-5 6v6l-7-6h-7a6 6 0 0 1-6-6v-8Z"
        fill="#fff"
        stroke="#E6333A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M42 39c0-2.5 3.5-3.5 5-1 1.5-2.5 5-1.5 5 1 0 2-5 5-5 5s-5-3-5-5Z"
        fill="#E6333A"
      />
    </svg>
  );
}

function TeamIllustration() {
  return (
    <svg {...iconProps}>
      <rect
        x="7"
        y="8"
        width="33"
        height="29"
        rx="4"
        fill="#EEF4FC"
        stroke="#2868C7"
        strokeWidth="2"
      />
      <path
        d="M11 14h25M15 20h10M15 25h15"
        stroke="#BBD0EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 44h16M28 37v7"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="47"
        cy="30"
        r="7"
        fill="#FCE8E9"
        stroke="#E6333A"
        strokeWidth="2"
      />
      <path
        d="M36 54c1-9 21-9 22 0"
        fill="#fff"
        stroke="#E6333A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="15" cy="47" r="5" fill="#BBD0EE" />
      <path
        d="M7 59c.5-7 15.5-7 16 0"
        fill="#fff"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CareerIllustration() {
  return (
    <svg {...iconProps}>
      <path
        d="M8 51h48"
        stroke="#BBD0EE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 51V39h12v12M28 51V30h12v21M43 51V20h10v31"
        fill="#EEF4FC"
        stroke="#2868C7"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m15 31 11-9 8 3 15-14"
        stroke="#E6333A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 11h7v7"
        stroke="#E6333A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="37" r="2" fill="#E6333A" />
      <circle cx="33" cy="28" r="2" fill="#E6333A" />
    </svg>
  );
}

export const serviceIllustrations = {
  "App Development": AppIllustration,
  "Web Design & Development": WebIllustration,
  ERPs: ErpIllustration,
  "Digital Marketing": MarketingIllustration,
  "Social Media Marketing": SocialIllustration,
  "Custom Portals & IT Teams": TeamIllustration,
  "Career Counselling": CareerIllustration,
};
