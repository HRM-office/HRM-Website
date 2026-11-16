// Brand illustrations, drawn in code so they stay sharp and on palette.
const TONES = {
  teal: { top: ["#d6f7f8", "#8ee3e8"], left: ["#2bbec5", "#10737c"], right: ["#7ae0e5", "#1f9aa2"] },
  amber: { top: ["#ffe9b8", "#ffc95c"], left: ["#f7b32b", "#cf7a0c"], right: ["#f2792b", "#b94c16"] },
  navy: { top: ["#ffffff", "#c9d4f2"], left: ["#5c7bd6", "#263d85"], right: ["#a9bbee", "#4a6fd0"] },
};

const Flute = ({ id, stops }) => (
  <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stopColor={stops[0]} />
    <stop offset=".55" stopColor={stops[0]} />
    <stop offset="1" stopColor={stops[1]} />
  </linearGradient>
);

const strip = (points, fill) => (
  <polygon key={points} points={points} fill={`url(#${fill})`} stroke={`url(#${fill})`} strokeWidth="2.4" strokeLinejoin="round" />
);

// Isometric cube built from fluted glass ribs.
export function RibCube({ tone = "teal", className = "", style }) {
  const t = TONES[tone];
  const N = 9;
  const w = 90 / N;
  const leftY = (x) => 60 + (x - 10) * (50 / 90);
  const rightY = (x) => 110 - (x - 100) * (50 / 90);
  const ribs = [];
  for (let i = 0; i < N; i++) {
    const a = 10 + i * w + 1;
    const b = a + w - 2.4;
    ribs.push(strip(`${a},${leftY(a)} ${b},${leftY(b)} ${b},${leftY(b) + 100} ${a},${leftY(a) + 100}`, `c-${tone}-l`));
    const c = 100 + i * w + 1;
    const d = c + w - 2.4;
    ribs.push(strip(`${c},${rightY(c)} ${d},${rightY(d)} ${d},${rightY(d) + 100} ${c},${rightY(c) + 100}`, `c-${tone}-r`));
    const sx = 10 + i * w + 1;
    const sy = 60 - (i * w + 1) * (50 / 90);
    const ex = sx + w - 2.4;
    const ey = 60 - (i * w + w - 1.4) * (50 / 90);
    ribs.push(strip(`${sx},${sy} ${ex},${ey} ${ex + 88},${ey + 49} ${sx + 88},${sy + 49}`, `c-${tone}-t`));
  }
  return (
    <svg className={`cube ${className}`} style={style} viewBox="0 0 200 220" aria-hidden="true">
      <defs>
        <Flute id={`c-${tone}-t`} stops={t.top} />
        <Flute id={`c-${tone}-l`} stops={t.left} />
        <Flute id={`c-${tone}-r`} stops={t.right} />
      </defs>
      {ribs}
    </svg>
  );
}

// A document folder with papers tucked inside, leaning back for depth.
// [label, tab x, tab y, tab width, colour], back to front.
const FILES = [
  ["Payroll", 34, 16, 50, "#263d85"],
  ["Hiring", 90, 24, 44, "#0f7a80"],
  ["Leave", 140, 32, 42, "#c2410c"],
  ["Training", 44, 42, 54, "#6d4bc4"],
  ["Compliance", 104, 52, 66, "#1d5fa8"],
];

export const Folder3D = ({ className = "" }) => (
  <svg className={`cube ${className}`} viewBox="0 0 220 200" aria-hidden="true">
    <defs>
      <linearGradient id="fd-back" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f2a024" /><stop offset="1" stopColor="#c8680c" /></linearGradient>
      <linearGradient id="fd-front" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffd77a" /><stop offset=".55" stopColor="#f7b32b" /><stop offset="1" stopColor="#ec8a1e" /></linearGradient>
      <linearGradient id="fd-paper" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#dfe6f7" /></linearGradient>
    </defs>
    <g transform="matrix(1 -.12 0 1 0 22)">
      <path d="M18 40a8 8 0 0 1 8-8h52l14 16h102a8 8 0 0 1 8 8v112a8 8 0 0 1-8 8H26a8 8 0 0 1-8-8z" fill="url(#fd-back)" />
      {/* Divider sheets with labelled tabs: the HR functions filed inside. The front ones are half hidden on purpose. */}
      {FILES.map(([label, x, y, w, color], i) => (
        <g key={label} fontFamily="inherit">
          <rect x={x} y={y} width={w} height="16" rx="5" fill={color} />
          <rect x="28" y={y + 12} width="164" height="110" rx="5" fill={i % 2 ? "#eef2fb" : "url(#fd-paper)"} />
          <rect x={x} y={y + 9} width={w} height="7" fill={color} />
          <text x={x + w / 2} y={y + 11.5} textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#fff">{label}</text>
        </g>
      ))}
      <path d="M10 84a8 8 0 0 1 8-8h184a8 8 0 0 1 8 9l-10 92a8 8 0 0 1-8 7H26a8 8 0 0 1-8-7z" fill="url(#fd-front)" />
      <path d="M20 84h182" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".55" />
      <rect x="74" y="120" width="76" height="22" rx="5" fill="#fff" opacity=".9" />
      <text x="112" y="135" textAnchor="middle" fontSize="10" fontWeight="700" fill="#263d85" fontFamily="inherit">HR files</text>
    </g>
  </svg>
);

const BINDERS = [["#263d85", "#1a2758", "#4a6fd0"], ["#2bbec5", "#147f87", "#7ae0e5"], ["#f7b32b", "#c8800c", "#ffd77a"], ["#f2792b", "#b94c16", "#ffad78"]];

// A tray of upright binders: the paperwork we take off your hands.
export const FileRack = ({ className = "" }) => (
  <svg className={`cube ${className}`} viewBox="0 0 230 200" aria-hidden="true">
    <path d="M24 150h170l16-12H40z" fill="#dfe6f7" />
    {BINDERS.map(([face, side, top], i) => {
      const lean = i === 3 ? "rotate(12 0 112)" : "";
      return (
        <g key={face} transform={`translate(${40 + i * 38} 26) ${lean}`}>
          <path d="M30 0l14-10v112l-14 10z" fill={side} />
          <path d="M0 0h30l14-10H14z" fill={top} />
          <rect width="30" height="112" fill={face} />
          <rect x="6" y="18" width="18" height="30" rx="3" fill="#fff" opacity=".92" />
          <rect x="9" y="25" width="12" height="3" rx="1.500" fill={side} />
          <rect x="9" y="32" width="9" height="3" rx="1.500" fill={side} opacity=".6" />
          <circle cx="15" cy="88" r="5" fill={side} />
        </g>
      );
    })}
    <rect x="24" y="150" width="170" height="24" rx="3" fill="#a9bbee" />
    <path d="M194 150l16-12v24l-16 12z" fill="#7d93d6" />
    <rect x="24" y="150" width="170" height="4" fill="#fff" opacity=".5" />
  </svg>
);

