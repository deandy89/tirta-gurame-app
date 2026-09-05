import React from "react";

interface FreshFilletSVGProps {
  filletGrad: [string, string, string];
  className?: string;
}

export const FreshFilletSVG: React.FC<FreshFilletSVGProps> = ({
  filletGrad,
  className = "w-full h-auto filter drop-shadow-2xl",
}) => {
  return (
    <svg viewBox="0 0 760 400" className={className}>
      <defs>
        {/* Dynamic Raw Meat Gradient */}
        <linearGradient id="meatGrad" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor={filletGrad[0]} />
          <stop offset="25%" stopColor={filletGrad[1]} />
          <stop offset="60%" stopColor={filletGrad[1]} />
          <stop offset="85%" stopColor={filletGrad[2]} />
          <stop offset="100%" stopColor={filletGrad[2]} />
        </linearGradient>

        <linearGradient id="fatStreak" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#fff5ec" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f1d6c2" stopOpacity="0.1" />
        </linearGradient>

        <linearGradient id="skinTrim" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d2219" />
          <stop offset="12%" stopColor="#6e513b" />
          <stop offset="88%" stopColor="#b6835a" />
          <stop offset="100%" stopColor="#2a1f16" />
        </linearGradient>

        {/* Realistic Scale Texture on the upper fillet skin edge */}
        <pattern id="scalePattern" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="5" fill="none" stroke="#4a3729" strokeWidth="0.8" opacity="0.35" />
        </pattern>

        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-5" dy="9" stdDeviation="12" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Tail & Rear Realistic Cut */}
      <g filter="url(#softGlow)" className="transition-transform duration-500 group-hover:scale-[1.01]">
        {/* Caudal Fin with realistic rays */}
        <path
          d="M90,200 C50,140 20,110 5,90 C15,150 25,180 30,200 C25,220 15,250 5,310 C20,290 50,260 90,200 Z"
          fill="#8c6142"
          opacity="0.9"
        />
        {/* Fin rays */}
        <g stroke="#563b27" strokeWidth="1.2" opacity="0.7">
          <line x1="10" y1="95" x2="85" y2="195" />
          <line x1="20" y1="130" x2="85" y2="197" />
          <line x1="30" y1="170" x2="85" y2="200" />
          <line x1="30" y1="230" x2="85" y2="200" />
          <line x1="20" y1="270" x2="85" y2="203" />
          <line x1="10" y1="305" x2="85" y2="205" />
        </g>

        {/* Main Fillet Outer Skin Outline */}
        <path
          d="M85,200 C110,135 180,90 280,75 L380,75 L380,325 L280,325 C180,310 110,265 85,200 Z"
          fill="url(#skinTrim)"
        />
        <path
          d="M85,200 C110,135 180,90 280,75 L380,75 L380,325 L280,325 C180,310 110,265 85,200 Z"
          fill="url(#scalePattern)"
        />

        {/* Realistic Cut Layer (Tebal Daging Alami) */}
        <path
          d="M95,200 C120,145 190,105 285,88 L380,88 L380,312 L285,312 C190,295 120,255 95,200 Z"
          fill="url(#meatGrad)"
        />

        {/* Photorealistic Muscle Fiber Arcs (Gurame Meat Flakes / Myotomes) */}
        <g stroke="#b86d49" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
          <path d="M125,195 C140,165 170,145 205,138" />
          <path d="M125,205 C140,235 170,255 205,262" />
          <path d="M160,195 C180,160 215,140 255,132" />
          <path d="M160,205 C180,240 215,260 255,268" />
          <path d="M200,195 C225,155 265,135 310,126" />
          <path d="M200,205 C225,245 265,265 310,274" />
          <path d="M250,195 C280,150 325,130 375,122" />
          <path d="M250,205 C280,250 325,270 375,278" />
        </g>

        {/* Marbling Fat Streaks (Lapisan Lemak Gurih Alami) */}
        <g fill="url(#fatStreak)">
          <path d="M140,185 C160,155 190,140 220,135 Q190,145 140,185 Z" />
          <path d="M190,185 C215,150 250,135 285,130 Q250,140 190,185 Z" />
          <path d="M240,185 C270,145 310,130 350,125 Q310,135 240,185 Z" />
          <path d="M140,215 C160,245 190,260 220,265 Q190,255 140,215 Z" />
          <path d="M190,215 C215,250 250,265 285,270 Q250,260 190,215 Z" />
          <path d="M240,215 C270,255 310,270 350,275 Q310,265 240,215 Z" />
        </g>

        {/* Spine & Cut Edge Bone Cross-Section */}
        <path d="M98,200 L380,200" stroke="#a25937" strokeWidth="4" strokeDasharray="10,4" />
        <circle cx="375" cy="200" r="5.5" fill="#fdf0e7" stroke="#7e3f22" strokeWidth="2" />

        {/* Fresh Moist Specular Sheen (Kilauan Daging Basah Segar) */}
        <path
          d="M145,150 C210,120 290,105 375,102"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M185,200 C250,198 320,198 375,198"
          stroke="#ffffff"
          strokeWidth="2.5"
          opacity="0.7"
        />
        <ellipse
          cx="340"
          cy="155"
          rx="14"
          ry="5"
          fill="#ffffff"
          opacity="0.5"
          transform="rotate(-10 340 155)"
        />
        <ellipse
          cx="320"
          cy="245"
          rx="14"
          ry="5"
          fill="#ffffff"
          opacity="0.45"
          transform="rotate(10 320 245)"
        />
      </g>
    </svg>
  );
};
