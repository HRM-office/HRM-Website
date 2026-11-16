import Image from "next/image";

// Recruitment hero: a search at the centre, linked to small candidate circles around it.
// Illustrative people; hovering a circle shows who they are.
const PEOPLE = [
  // [image, name, role · city, x%, y%, size px, focal point, zoom]
  ["hrm-portrait-dark", "Ngozi Eze", "HR Manager · Lagos", 18, 22, 50, "50% 32%", 1.5],
  ["hrm-portrait-suit", "Kunle Adebayo", "Finance Analyst · Abuja", 80, 16, 45, "50% 16%", 1.8],
  ["hrm-woman-navy", "Amaka Obi", "Payroll Officer · Lagos", 88, 58, 53, "48% 18%", 2.2],
  ["hrm-portrait-glasses", "Femi Ojo", "Sales Lead · Ibadan", 62, 88, 41, "52% 18%", 1.9],
  ["hrm-cafe-staff", "Efua Mensah", "Operations Lead · Accra", 14, 74, 43, "47% 14%", 3],
  ["hrm-man-outdoor", "Tunde Bello", "Accountant · Kano", 46, 6, 36, "50% 12%", 2.8],
];
// Tiny unnamed circles: the wider talent pool.
const DOTS = [[32, 40, 10], [70, 34, 8], [30, 90, 9], [92, 34, 7], [6, 46, 8], [74, 72, 10], [54, 30, 6], [38, 62, 7]];

export function TalentWall() {
  return (
    <div className="talent" aria-hidden="true">
      <div className="talent__map" />
      <svg className="talent__links" viewBox="0 0 100 100" preserveAspectRatio="none">
        {PEOPLE.map(([, , , x, y], n) => <line key={n} x1="50" y1="50" x2={x} y2={y} style={{ "--d": `${n * 0.35}s` }} />)}
        {DOTS.map(([x, y], n) => <line key={`d${n}`} className="talent__faint" x1="50" y1="50" x2={x} y2={y} />)}
      </svg>
      <div className="talent__core">
        <span className="talent__pulse" />
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.2" /><path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
      </div>
      {DOTS.map(([x, y, s], n) => <i className="talent__dot" key={n} style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, "--d": `${-n * 0.9}s` }} />)}
      {PEOPLE.map(([img, name, role, x, y, size, pos, zoom], n) => (
        <div className="tnode" key={name} style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, "--d": `${-n * 1.1}s` }}>
          <span className="tnode__face">
            <Image quality={90} src={`/photos/${img}.webp`} alt="" fill sizes="200px" style={{ objectFit: "cover", objectPosition: pos, transform: `scale(${zoom})`, transformOrigin: pos }} />
          </span>
          <i className="tnode__ok" />
          <span className={x > 50 ? "tnode__tip tnode__tip--l" : "tnode__tip"}><b>{name}</b><small>{role}</small><em>Screened</em></span>
        </div>
      ))}
    </div>
  );
}
