import React from "react";

interface RealisticGouramiSVGProps {
  realBody: [string, string, string, string, string];
  realFins: [string, string, string, string];
  className?: string;
}

export const RealisticGouramiSVG: React.FC<RealisticGouramiSVGProps> = ({
  realBody,
  realFins,
  className = "w-full h-auto filter drop-shadow-2xl animate-subtle-swim",
}) => {
  return (
    <svg viewBox="0 0 760 400" className={className}>
      <defs>
        {/* Photorealistic Charcoal, Bronze & Olive Gourami Body Tones */}
        <linearGradient id="realFishBody" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor={realBody[0]} />
          <stop offset="35%" stopColor={realBody[1]} />
          <stop offset="65%" stopColor={realBody[2]} />
          <stop offset="85%" stopColor={realBody[3]} />
          <stop offset="100%" stopColor={realBody[4]} />
        </linearGradient>

        {/* Realistic Spiny Dorsal & Anal Fin Gradient with ray ribs */}
        <linearGradient id="realFinGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={realFins[0]} />
          <stop offset="50%" stopColor={realFins[1]} />
          <stop offset="85%" stopColor={realFins[2]} />
          <stop offset="100%" stopColor={realFins[3]} />
        </linearGradient>

        {/* Authentic Gourami Scale Pattern (Diamond ctenoid scales with dark margins and specular highlights) */}
        <pattern
          id="realScaleTexture"
          width="14"
          height="18"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-8)"
        >
          <path d="M0,9 Q7,0 14,9 Q7,18 0,9 Z" fill="#4d4234" stroke="#251f18" strokeWidth="0.9" />
          <path d="M2,9 Q7,2 12,9" fill="none" stroke="#9a8c78" strokeWidth="0.8" opacity="0.55" />
          <path d="M2,9 Q7,15 12,9" fill="none" stroke="#1c1611" strokeWidth="0.9" opacity="0.65" />
        </pattern>

        {/* Photographic Fish Eye (Brown-gold iris, wet corneal reflection) */}
        <radialGradient id="realEyeIris" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#d4a359" />
          <stop offset="55%" stopColor="#8a6128" />
          <stop offset="85%" stopColor="#3e2609" />
          <stop offset="100%" stopColor="#140c03" />
        </radialGradient>

        <radialGradient id="realEyePupil" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#1e1e1e" />
          <stop offset="70%" stopColor="#070707" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* Wet Skin Specular Light Shader */}
        <linearGradient id="wetSheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="70%" stopColor="#000000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <g className="transition-transform duration-500 group-hover:scale-[1.015]">
        {/* Iconic Gourami Elongated Pelvic Fin (Benang Peraba Panjang Khas Gurame) */}
        <path
          d="M430,305 C475,365 530,388 595,402"
          stroke="#a3927d"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
        />
        <path
          d="M435,306 C480,360 535,380 600,392"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Upper Spiny Dorsal Fin (Sirip Punggung Berduri Tajam Khas Ikan Gurame) */}
        <path
          d="M380,75 C430,48 510,42 568,68 L555,102 C495,90 435,90 380,98 Z"
          fill="url(#realFinGrad)"
          stroke="#231b14"
          strokeWidth="1.8"
        />
        {/* Sharp Fin Spines & Serrations (12+ jari-jari tajam) */}
        <g stroke="#1a140f" strokeWidth="2.2" strokeLinecap="round">
          <line x1="390" y1="95" x2="395" y2="65" />
          <line x1="410" y1="92" x2="420" y2="54" />
          <line x1="432" y1="88" x2="445" y2="48" />
          <line x1="455" y1="85" x2="470" y2="45" />
          <line x1="478" y1="83" x2="495" y2="44" />
          <line x1="500" y1="82" x2="520" y2="47" />
          <line x1="522" y1="82" x2="542" y2="52" />
          <line x1="544" y1="83" x2="560" y2="60" />
        </g>
        {/* Inter-radial translucent highlights */}
        <g stroke="#a89b88" strokeWidth="1" opacity="0.45">
          <line x1="400" y1="93" x2="408" y2="60" />
          <line x1="421" y1="90" x2="432" y2="51" />
          <line x1="443" y1="86" x2="457" y2="46" />
          <line x1="466" y1="84" x2="482" y2="44" />
          <line x1="489" y1="82" x2="507" y2="45" />
          <line x1="511" y1="82" x2="531" y2="49" />
          <line x1="533" y1="82" x2="551" y2="56" />
        </g>

        {/* Lower Anal Fin (Sirip Bawah Lebar Menyeluruh dengan Jari-jari Halus) */}
        <path
          d="M380,325 C440,342 505,338 555,302 L542,275 C490,292 435,298 380,298 Z"
          fill="url(#realFinGrad)"
          stroke="#231b14"
          strokeWidth="1.8"
        />
        <g stroke="#1a140f" strokeWidth="1.8" opacity="0.8">
          <line x1="395" y1="300" x2="402" y2="330" />
          <line x1="420" y1="300" x2="430" y2="336" />
          <line x1="445" y1="298" x2="458" y2="338" />
          <line x1="472" y1="295" x2="488" y2="336" />
          <line x1="500" y1="290" x2="518" y2="328" />
          <line x1="528" y1="282" x2="542" y2="312" />
        </g>

        {/* Main Living Gurame Torso & Body Shape */}
        <path
          d="M380,75 C460,82 555,108 630,148 C675,172 710,198 732,212 C715,232 675,260 622,286 C548,320 450,332 380,325 Z"
          fill="url(#realFishBody)"
          stroke="#1a140f"
          strokeWidth="2.5"
        />

        {/* Authentic Ctenoid Scale Overlay */}
        <path
          d="M380,75 C460,82 555,108 630,148 C675,172 710,198 732,212 C715,232 675,260 622,286 C548,320 450,332 380,325 Z"
          fill="url(#realScaleTexture)"
          opacity="0.92"
        />

        {/* Characteristic Adult Gurame Forehead Hump & Slope */}
        <path
          d="M580,120 C625,138 668,168 695,192 C672,192 630,180 580,160 Z"
          fill="#584c3c"
          opacity="0.75"
        />

        {/* Throat & Fleshy Belly Contour */}
        <path
          d="M420,268 C500,272 575,248 625,222 C595,265 515,310 420,310 Z"
          fill="#6d614f"
          opacity="0.5"
        />

        {/* Realistic Gill Cover (Operculum) */}
        <path
          d="M592,138 C620,172 624,225 588,268"
          stroke="#1f1812"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M598,148 C624,180 626,215 596,252"
          stroke="#8c7d69"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Preoperculum fold */}
        <path
          d="M625,160 C642,185 645,212 628,235"
          stroke="#2a221a"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Pectoral Fin */}
        <path
          d="M485,200 C532,190 568,206 578,228 C562,238 518,242 482,226 Z"
          fill="#4a3e30"
          stroke="#1a140e"
          strokeWidth="1.8"
          opacity="0.9"
        />
        {/* Fine rays in pectoral fin */}
        <g stroke="#8c7d6a" strokeWidth="1.2" opacity="0.75">
          <line x1="490" y1="205" x2="568" y2="218" />
          <line x1="492" y1="212" x2="565" y2="225" />
          <line x1="490" y1="220" x2="550" y2="232" />
        </g>

        {/* Authentic Realistic Gourami Eye */}
        <circle cx="668" cy="180" r="16" fill="#18130d" stroke="#3d3326" strokeWidth="2" />
        <circle cx="668" cy="180" r="13" fill="url(#realEyeIris)" />
        <circle cx="668" cy="180" r="7.5" fill="url(#realEyePupil)" />
        <ellipse
          cx="664"
          cy="175"
          rx="3.5"
          ry="2.2"
          fill="#ffffff"
          opacity="0.9"
          transform="rotate(-15 664 175)"
        />
        <circle cx="671" cy="183" r="1.5" fill="#ffffff" opacity="0.6" />

        {/* Realistic Protruding Mouth & Thick Lips */}
        <path
          d="M720,206 C728,209 734,213 732,217 C724,221 714,221 706,219"
          fill="#3a3025"
          stroke="#140f0b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M706,220 C716,224 726,227 724,233 C716,238 702,236 694,231"
          fill="#4d4133"
          stroke="#140f0b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Wet Specular Sheen across Forehead & Back */}
        <path
          d="M530,105 C595,125 650,152 698,185"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
          fill="none"
        />
        <path
          d="M420,85 C460,82 505,88 535,98"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
          fill="none"
        />
        <ellipse
          cx="615"
          cy="165"
          rx="28"
          ry="8"
          fill="#ffffff"
          opacity="0.15"
          transform="rotate(18 615 165)"
        />
      </g>
    </svg>
  );
};
