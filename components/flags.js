// Flags from across Africa as overlapping round chips. Drawn in SVG so they stay crisp and need no image files.
const STAR = "12,8.4 12.85,11.05 15.4,11.05 13.3,12.6 14.1,15.2 12,13.6 9.9,15.2 10.7,12.6 8.6,11.05 11.15,11.05";
const V = (a, b, c) => <><rect width="8" height="24" fill={a} /><rect x="8" width="8" height="24" fill={b} /><rect x="16" width="8" height="24" fill={c} /></>;
const H = (a, b, c) => <><rect width="24" height="8" fill={a} /><rect y="8" width="24" height="8" fill={b} /><rect y="16" width="24" height="8" fill={c} /></>;

const FLAGS = [
  ["Nigeria", V("#008751", "#ffffff", "#008751")],
  ["Ghana", <>{H("#ce1126", "#fcd116", "#006b3f")}<polygon points={STAR} fill="#000" /></>],
  ["Kenya", <>
    <rect width="24" height="24" fill="#fff" />
    <rect width="24" height="7.2" fill="#000" /><rect y="8.4" width="24" height="7.2" fill="#bb0000" /><rect y="16.8" width="24" height="7.2" fill="#006600" />
    <ellipse cx="12" cy="12" rx="3" ry="6.2" fill="#bb0000" stroke="#000" strokeWidth=".9" />
  </>],
  ["South Africa", <>
    <rect width="24" height="12" fill="#e03c31" /><rect y="12" width="24" height="12" fill="#001489" />
    <polygon points="0,2 10,10.2 24,10.2 24,13.8 10,13.8 0,22" fill="#fff" />
    <polygon points="0,4 10.6,11.2 24,11.2 24,12.8 10.6,12.8 0,20" fill="#007749" />
    <polygon points="0,6.2 8.6,12 0,17.8" fill="#ffb81c" />
    <polygon points="0,7.8 6.4,12 0,16.2" fill="#000" />
  </>],
  ["Egypt", <>{H("#ce1126", "#ffffff", "#000000")}<circle cx="12" cy="12" r="2.2" fill="#c09300" /></>],
];

export const FlagStack = () => (
  <span className="flags" role="img" aria-label={`Serving ${FLAGS.map(([n]) => n).join(", ")} and teams across Africa`}>
    {FLAGS.map(([name, art]) => (
      <span className="flag" key={name}>
        <svg viewBox="0 0 24 24" aria-hidden="true">{art}</svg>
      </span>
    ))}
  </span>
);
