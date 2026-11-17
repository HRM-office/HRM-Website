import Image from "next/image";

// Training hero: professionals in brand-colour hexagons joined by dashed lines.
const PEOPLE = [
  // [head-and-shoulders cutout, tone, left %, top %, width %]; equal sizes so no one looks closer than the rest.
  ["hex-portrait-dark-c", "teal", 2, 2, 38],
  ["hex-portrait-exec", "amber", 58, 0, 38],
  ["hex-woman-navy-c", "orange", 0, 54, 38],
  ["hex-portrait-suit", "sky", 56, 56, 38],
];

export function HexPeople() {
  return (
    <div className="hexp" aria-hidden="true">
      <span className="hexp__map" />
      <svg className="hexp__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M21 22 H76 V75 H20 V22" />
      </svg>
      {PEOPLE.map(([f, tone, x, y, w], i) => (
        <span className={`hex hex--${tone}`} key={f} style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, "--d": `${-i * 1.4}s` }}>
          <Image quality={90} src={`/photos/${f}.webp`} alt="" fill sizes="260px" className="hex__head" />
        </span>
      ))}
      <i className="hexp__dot hexp__dot--a" /><i className="hexp__dot hexp__dot--b" />
      <i className="hexp__plus hexp__plus--a" /><i className="hexp__plus hexp__plus--b" />
    </div>
  );
}
