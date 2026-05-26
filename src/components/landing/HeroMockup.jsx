/**
 * Mockup ilustrativo do hero — desenhado totalmente em SVG.
 * Representa notebook + smartphone com cards, grids, blocos e botões.
 * Sem textos reais para evitar letras borradas. Cores oficiais da marca.
 */
export default function HeroMockup() {
  const dots = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      dots.push(
        <circle
          key={`d-${r}-${c}`}
          cx={620 + c * 14}
          cy={70 + r * 14}
          r="2"
          fill="#55BFC3"
        />
      );
    }
  }

  const navItems = [152, 180, 208, 236, 264].map((y, i) => (
    <g key={y}>
      <rect
        x="100"
        y={y}
        width="14"
        height="14"
        rx="4"
        fill={i === 1 ? "#FF8C32" : "#E9EDF2"}
      />
      <rect
        x="122"
        y={y + 4}
        width="60"
        height="6"
        rx="3"
        fill={i === 1 ? "#24384C" : "#A9B4C2"}
      />
    </g>
  ));

  return (
    <div className="pl-mockup-wrap" aria-hidden="true">
      <svg
        className="pl-mockup"
        viewBox="0 0 720 520"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Notebook e smartphone exibindo uma landing page moderna"
      >
        <defs>
          <linearGradient id="screen-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F3F6FA" />
            <stop offset="100%" stopColor="#E9EDF2" />
          </linearGradient>
          <linearGradient id="laptop-shell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E4661" />
            <stop offset="100%" stopColor="#1B2A3A" />
          </linearGradient>
          <linearGradient id="screen-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="phone-shell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B2A3A" />
            <stop offset="100%" stopColor="#0F1924" />
          </linearGradient>
          <linearGradient id="card-accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF8C32" />
            <stop offset="100%" stopColor="#F07512" />
          </linearGradient>
          <linearGradient id="card-support" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#55BFC3" />
            <stop offset="100%" stopColor="#3FA5A9" />
          </linearGradient>
          <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow
              dx="0"
              dy="20"
              stdDeviation="22"
              floodColor="#24384C"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        {/* Notebook */}
        <g filter="url(#soft-shadow)">
          <rect x="60" y="40" width="560" height="360" rx="18" fill="url(#laptop-shell)" />
          <rect x="72" y="52" width="536" height="336" rx="10" fill="url(#screen-bg)" />

          {/* Top bar */}
          <rect x="72" y="52" width="536" height="28" fill="#FFFFFF" rx="10" />
          <circle cx="92" cy="66" r="4" fill="#FF8C32" />
          <circle cx="106" cy="66" r="4" fill="#55BFC3" />
          <circle cx="120" cy="66" r="4" fill="#CDD5DF" />
          <rect x="220" y="60" width="180" height="12" rx="6" fill="#E9EDF2" />
          <rect x="556" y="60" width="40" height="12" rx="6" fill="#24384C" />

          {/* Sidebar */}
          <rect x="84" y="92" width="120" height="284" rx="10" fill="#FFFFFF" />
          <rect x="100" y="108" width="78" height="8" rx="4" fill="#24384C" />
          <rect x="100" y="124" width="50" height="6" rx="3" fill="#CDD5DF" />
          {navItems}
          <rect x="100" y="318" width="88" height="44" rx="10" fill="#24384C" />
          <rect x="112" y="334" width="64" height="6" rx="3" fill="#FFFFFF" />
          <rect x="112" y="346" width="40" height="5" rx="2.5" fill="#55BFC3" />

          {/* Headline */}
          <rect x="220" y="100" width="270" height="14" rx="5" fill="#24384C" />
          <rect x="220" y="120" width="220" height="14" rx="5" fill="#24384C" />
          <rect x="220" y="140" width="160" height="10" rx="4" fill="#A9B4C2" />

          {/* CTAs */}
          <rect x="220" y="166" width="120" height="30" rx="15" fill="url(#card-accent)" />
          <rect x="350" y="166" width="90" height="30" rx="15" fill="#FFFFFF" stroke="#CDD5DF" />

          {/* Stat cards */}
          <rect x="220" y="216" width="120" height="60" rx="12" fill="#FFFFFF" />
          <rect x="234" y="230" width="30" height="6" rx="3" fill="#A9B4C2" />
          <rect x="234" y="244" width="60" height="14" rx="4" fill="#24384C" />
          <rect x="234" y="262" width="32" height="6" rx="3" fill="#FF8C32" />

          <rect x="348" y="216" width="120" height="60" rx="12" fill="url(#card-support)" />
          <rect x="362" y="230" width="30" height="6" rx="3" fill="#FFFFFF" opacity="0.6" />
          <rect x="362" y="244" width="60" height="14" rx="4" fill="#FFFFFF" />
          <rect x="362" y="262" width="32" height="6" rx="3" fill="#FFFFFF" opacity="0.6" />

          <rect x="476" y="216" width="120" height="60" rx="12" fill="#FFFFFF" />
          <rect x="490" y="230" width="30" height="6" rx="3" fill="#A9B4C2" />
          <rect x="490" y="244" width="60" height="14" rx="4" fill="#24384C" />
          <rect x="490" y="262" width="32" height="6" rx="3" fill="#55BFC3" />

          {/* Chart */}
          <rect x="220" y="290" width="376" height="78" rx="12" fill="#FFFFFF" />
          <rect x="234" y="304" width="80" height="8" rx="3" fill="#24384C" />
          <rect x="234" y="318" width="50" height="6" rx="3" fill="#A9B4C2" />
          <polyline
            points="240,360 270,344 300,350 332,326 364,336 398,318 432,328 466,310 500,322 534,300 568,314"
            fill="none"
            stroke="#FF8C32"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="240,362 270,352 300,358 332,344 364,348 398,338 432,344 466,332 500,338 534,326 568,332"
            fill="none"
            stroke="#55BFC3"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Base/teclado */}
          <rect x="40" y="400" width="600" height="14" rx="6" fill="url(#laptop-shell)" />
          <rect x="40" y="414" width="600" height="6" rx="3" fill="#0F1924" opacity="0.85" />
          <rect x="304" y="400" width="72" height="6" rx="3" fill="#0F1924" opacity="0.7" />
        </g>

        {/* Smartphone */}
        <g filter="url(#soft-shadow)">
          <rect x="500" y="250" width="170" height="250" rx="26" fill="url(#phone-shell)" />
          <rect x="510" y="260" width="150" height="230" rx="20" fill="url(#screen-glow)" />
          <rect x="568" y="266" width="34" height="6" rx="3" fill="#0F1924" />

          <rect x="522" y="284" width="54" height="8" rx="3" fill="#24384C" />
          <rect x="522" y="298" width="32" height="5" rx="2.5" fill="#A9B4C2" />

          <rect x="522" y="316" width="128" height="64" rx="12" fill="#24384C" />
          <rect x="534" y="328" width="72" height="6" rx="3" fill="#FFFFFF" />
          <rect x="534" y="340" width="48" height="5" rx="2.5" fill="#55BFC3" />
          <rect x="534" y="356" width="56" height="14" rx="7" fill="url(#card-accent)" />

          <rect x="522" y="390" width="60" height="44" rx="10" fill="#FFFFFF" />
          <rect x="532" y="400" width="20" height="6" rx="3" fill="#FF8C32" />
          <rect x="532" y="412" width="32" height="5" rx="2.5" fill="#A9B4C2" />
          <rect x="532" y="421" width="22" height="5" rx="2.5" fill="#24384C" />

          <rect x="590" y="390" width="60" height="44" rx="10" fill="url(#card-support)" />
          <rect x="600" y="400" width="20" height="6" rx="3" fill="#FFFFFF" opacity="0.7" />
          <rect x="600" y="412" width="32" height="5" rx="2.5" fill="#FFFFFF" opacity="0.85" />
          <rect x="600" y="421" width="22" height="5" rx="2.5" fill="#FFFFFF" />

          <rect x="522" y="444" width="128" height="8" rx="3" fill="#E2E7EE" />
          <rect x="522" y="458" width="108" height="8" rx="3" fill="#E2E7EE" />
          <rect x="522" y="472" width="84" height="8" rx="3" fill="#E2E7EE" />
        </g>

        {/* Floating chip */}
        <g>
          <rect x="40" y="350" width="156" height="56" rx="14" fill="#FFFFFF" filter="url(#soft-shadow)" />
          <circle cx="68" cy="378" r="14" fill="#FF8C32" />
          <path
            d="M62 378 l4 4 l8 -8"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="92" y="366" width="86" height="8" rx="3" fill="#24384C" />
          <rect x="92" y="382" width="60" height="6" rx="3" fill="#A9B4C2" />
        </g>

        {/* Floating dot grid */}
        <g opacity="0.7">{dots}</g>
      </svg>
    </div>
  );
}
