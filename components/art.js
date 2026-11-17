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

const TAB_COLORS = ["#2bbec5", "#ffffff", "#f2792b", "#263d85", "#ffd77a", "#7ae0e5", "#ffffff", "#c2410c", "#4a6fd0"];

// Isometric cube built from fluted glass ribs.
// With `files`, the cube reads as a box of filed folders: index tabs stand up from the top.
export function RibCube({ tone = "teal", className = "", style, files = false }) {
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
  // files: each rib on the top face is a folder, with a coloured index tab standing up at its back edge.
  const tabs = files ? Array.from({ length: N }, (_, i) => {
    const sx = 10 + i * w + 1, sy = 60 - (i * w + 1) * (50 / 90);
    const at = [0.62, 0.3, 0.78, 0.45, 0.15, 0.7, 0.36, 0.86, 0.52][i];
    const x = sx + 88 * at, y = sy + 49 * at, dx = 13, dy = 13 * (49 / 88), h = 9;
    return <polygon key={`tab${i}`} points={`${x},${y} ${x + dx},${y + dy} ${x + dx},${y + dy - h} ${x + 2},${y - h + 1}`} fill={TAB_COLORS[i % TAB_COLORS.length]} stroke="#0d1433" strokeOpacity=".15" strokeWidth=".6" />;
  }) : null;
  return (
    <svg className={`cube ${className}`} style={style} viewBox={files ? "0 -6 200 226" : "0 0 200 220"} aria-hidden="true">
      <defs>
        <Flute id={`c-${tone}-t`} stops={t.top} />
        <Flute id={`c-${tone}-l`} stops={t.left} />
        <Flute id={`c-${tone}-r`} stops={t.right} />
      </defs>
      {ribs}
      {tabs}
    </svg>
  );
}

// A document folder with papers tucked inside, leaning back for depth.
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

