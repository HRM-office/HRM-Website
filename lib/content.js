// All facts here come from the live hrmoffice.org pages.
export const ASSET = "https://www.hrmoffice.org";
export const AIHR_PARTNER = "https://www.aihr.com/partner/hrmoffice/";
export const PHONE = "+234 704 307 1341";
export const PHONE_HREF = "tel:+2347043071341";
export const EMAIL = "hello@hrmoffice.org";
export const WHATSAPP = "https://wa.me/2347043071341";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Tapa+House+3%2F5+Immam+Dauda+St+Surulere+Lagos";

export const PROGRAMS = [
  { name: "Certificate Programs", page: "/training/certificate-programs/", time: "3-6 months", level: "All levels", href: "https://www.aihr.com/human-resources-certifications/" },
  { name: "People Analytics", page: "/training/people-analytics/", time: "2-4 months", level: "Intermediate", href: "https://www.aihr.com/hr-analytics/" },
  { name: "Digital HR", page: "/training/digital-hr/", time: "4-6 months", level: "Intermediate", href: "https://www.aihr.com/digital-hr/" },
  { name: "Business Partnering", page: "/training/business-partering/", time: "4-6 months", level: "Advanced", href: "https://www.aihr.com/business-partnering/" },
  { name: "HR Essentials Membership", time: "Ongoing", level: "Beginner", href: "https://www.aihr.com/hr-essentials/" },
  { name: "Full Academy Access", page: "/training/full-academy/", time: "12 months", level: "All levels", href: "https://www.aihr.com/package-deals/" },
];

export const MODULES = [
  "Recruitment", "HR information system", "Employee self service", "Performance management",
  "Payroll management", "Time and attendance", "Leave management", "Loans and salary advance",
  "Employee onboarding", "Training and development", "Discipline management",
  "Retirement and exit", "Reports and analytics",
];

export const RECRUIT_STEPS = [
  ["Requirement analysis", "We dig into the role, your culture and what a good hire looks like."],
  ["Talent sourcing", "We search our network and job channels for the right candidates."],
  ["Screening and assessment", "Skills tests and culture-fit checks before anyone reaches you."],
  ["Interview coordination", "We schedule, run and collect feedback on every interview."],
  ["Offer and onboarding", "Support through the offer, paperwork and a smooth first day."],
];
export const OUTSOURCE_STEPS = [
  ["Needs assessment", "We review how HR runs today and where it can improve."],
  ["Custom solution", "We design a plan around your requirements and team size."],
  ["Seamless transition", "We roll it out with little disruption to daily work."],
  ["Ongoing support", "We run HR day to day and review performance with you regularly."],
];
export const AIHR_BENEFITS = [
  "Access to globally recognized HR certifications",
  "Latest industry insights and best practices",
  "Continuous professional development programs",
  "Networking opportunities with HR leaders worldwide",
  "Career advancement through certified expertise",
  "Evidence-based HR methodologies and frameworks",
];

export const QUOTES = {
  ogochukwu: {
    text: "Seamless and hassle-free HR Management is the best way I can describe HRMOffice services. We chose their HRMOffice Outsourcing package and we have not had any need to worry about people management issues any longer. The time it takes to fill a vacant role is so short, yet you feel so satisfied with the quality of talent recruited. Thank you HRMOffice team for your top-notch outsourcing and recruitment services.",
    name: "Ogochukwu Odikpo", role: "CEO, LifeBounty Pharmacy & Stores",
    company: "LifeBounty", tag: "Outsourcing and recruitment", pull: "The time it takes to fill a vacant role is so short",
  },
  simon: {
    text: "Getting to outsource our workforce management to HRMOffice has helped us immensely as their team of HR Experts did streamline all our HR processes and made employee engagement seamless. Their automated HR Management has transformed our HR services and employee experience.",
    name: "Simon Chukwunweluwa", role: "Managing Director, Digital Energy",
    company: "Digital Energy", tag: "HR outsourcing", pull: "their team of HR Experts did streamline all our HR processes", logo: ["digital-energy", 389, 137],
  },
  janefrancis: {
    text: "HRMOffice software and digital platform has become part of our company because the features are robust enough to handle our end-to-end HR functions, it's very user friendly and easy to navigate. Our employees love it much more than a few other HRMS we have tried in the past. Plus, their prompt support is a bonus. Highly recommended HRMS!",
    name: "Dr. Janefrancis Duru", role: "Group Head, Management Services, ACI Holdings",
    company: "ACI Holdings", tag: "HR software", pull: "Our employees love it much more than a few other HRMS we have tried", logo: ["aci-holdings", 100, 36],
  },
};


// One person framed from each wide photo. The live site has only these four images.
export const PHOTOS = {
  team: { src: "Hero_team.webp", pos: "55% 50%" },
  tablet: { src: "about_1.webp", pos: "72% 30%", zoom: 1.35 },
  lead: { src: "aboutusTeam.webp", pos: "50% 30%", zoom: 1.4 },
  man: { src: "Hero_team.webp", pos: "40% 40%", zoom: 2 },
  clip: { src: "Hero_team.webp", pos: "88% 22%", zoom: 2.2 },
  // Local photos (paths start with "/"), so each page gets its own hero.
  expoBooth: { src: "/photos/expo-booth.webp", pos: "42% 45%" },
  expoCrowd: { src: "/photos/expo-crowd.webp", pos: "45% 40%" },
  expoPair: { src: "/photos/expo-pair.webp", pos: "55% 35%" },
  expoTalk: { src: "/photos/expo-talk.webp", pos: "28% 35%" },
  laptop: { src: "/photos/laptop.webp", pos: "50% 22%" },
  lobby: { src: "/photos/lobby.webp", pos: "65% 28%" },
  officeBraids: { src: "/photos/office-braids.webp", pos: "36% 25%" },
  officeBlue: { src: "/photos/office-blue.webp", pos: "50% 22%" },
  desk: { src: "/photos/desk.webp", pos: "50% 25%" },
  suit: { src: "/photos/suit.webp", pos: "50% 18%" },
  // Client-supplied photography (Downloads/hrm), converted to webp.
  cafeStaff: { src: "/photos/hrm-cafe-staff.webp", pos: "45% 20%" },
  portraitGlasses: { src: "/photos/hrm-portrait-glasses.webp", pos: "50% 25%" },
  portraitSuit: { src: "/photos/hrm-portrait-suit.webp", pos: "50% 20%" },
  teamLaptop: { src: "/photos/hrm-team-laptop.webp", pos: "55% 30%" },
  duoArms: { src: "/photos/hrm-duo-arms.webp", pos: "50% 25%" },
  meetingWomen: { src: "/photos/hrm-meeting-women.webp", pos: "45% 35%" },
  officeChat: { src: "/photos/hrm-office-chat.webp", pos: "50% 35%" },
  handshake: { src: "/photos/hrm-handshake.webp", pos: "55% 30%" },
  laptopPair: { src: "/photos/hrm-laptop-pair.webp", pos: "50% 30%" },
  execOutdoor: { src: "/photos/hrm-exec-outdoor.webp", pos: "40% 35%" },
  deskSmile: { src: "/photos/hrm-desk-smile.webp", pos: "50% 25%" },
  interview: { src: "/photos/hrm-interview.webp", pos: "60% 30%" },
  clientMeeting: { src: "/photos/hrm-client-meeting.webp", pos: "60% 35%" },
  callDesk: { src: "/photos/hrm-call-desk.webp", pos: "60% 35%" },
  womanNavy: { src: "/photos/hrm-woman-navy.webp", pos: "50% 25%" },
  manOutdoor: { src: "/photos/hrm-man-outdoor.webp", pos: "50% 20%" },
  portraitDark: { src: "/photos/hrm-portrait-dark.webp", pos: "50% 30%" },
};

// Client story: the line that matters as a headline, the full quote with that line marked, then who said it.
export const Quote = ({ q, className = "", ...rest }) => {
  const at = q.text.toLowerCase().indexOf(q.pull.toLowerCase());
  const body = at < 0 ? q.text : <>{q.text.slice(0, at)}<mark>{q.text.slice(at, at + q.pull.length)}</mark>{q.text.slice(at + q.pull.length)}</>;
  const initials = q.name.replace(/^Dr\.\s*/, "").split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <figure className={`tq ${className}`} {...rest}>
      <p className="tq__tag">{q.tag}</p>
      <blockquote>
        <p className="tq__pull" aria-hidden="true">{q.pull.charAt(0).toUpperCase() + q.pull.slice(1)}.</p>
        <p className="tq__body">{body}</p>
      </blockquote>
      <figcaption>
        <span className="tq__mono" aria-hidden="true">{initials}</span>
        <span><b>{q.name}</b><small>{q.role}</small></span>
        {q.logo && <img className="tq__logo" src={`/logos/${q.logo[0]}.webp`} alt="" width={q.logo[1]} height={q.logo[2]} loading="lazy" />}
      </figcaption>
    </figure>
  );
};

// Downloadable PDFs. Drop the file in /public/downloads and set `file` (e.g. "/downloads/training-calendar-2026.pdf");
// until then the button asks for it on WhatsApp, so the offer never leads to a dead link.
export const DOWNLOADS = {
  calendar: {
    eyebrow: "Plan your year", title: "2026 training calendar", cover: "Training calendar", year: "2026", file: null,
    text: "Every public course and certification date for the year in one PDF. Share it with your team and book your dates early.",
    cta: "Get the calendar",
  },
  software: {
    eyebrow: "Take it to your team", title: "HR software brochure", cover: "HR software", year: "Brochure", file: null,
    text: "All thirteen modules, how setup works and what support looks like, in a short PDF to share with management.",
    cta: "Get the brochure",
  },
  outsourcing: {
    eyebrow: "For your next management meeting", title: "HR outsourcing brochure", cover: "HR outsourcing", year: "Brochure", file: null,
    text: "What we take over, how the handover works and what you get each month, in a short PDF to share.",
    cta: "Get the brochure",
  },
};

// Program detail pages, with the figures the live hrmoffice.org pages publish. Slugs keep the live URLs.
export const PROGRAM_PAGES = {
  "certificate-programs": {
    name: "Certificate Programs", icon: "cap", photo: "deskSmile",
    intro: "Advance your HR career with globally recognized certifications, built by industry experts and delivered with AIHR.",
    stats: [["4.8/5", "average rating"], ["50,000+", "certified professionals"], ["95%", "career advancement rate"]],
    why: [["Global recognition", "AIHR certificates are recognized by top employers worldwide."], ["Expert instructors", "Learn from industry leaders and HR practitioners."], ["Career growth", "95% of graduates report career advancement within 12 months."], ["Local support", "Personal guidance from HRM Office's certified HR consultants."]],
  },
  "people-analytics": {
    name: "People Analytics", icon: "chart", photo: "laptopPair",
    intro: "Turn HR data into decisions. Learn the art and science of people analytics and show the business what your numbers mean.",
    stats: [["4.9/5", "rating"], ["8,500+", "graduates"], ["10 weeks", "program"]],
    why: [["Data-driven insight", "Use analytics to make strategic HR decisions."], ["Expert instructors", "Learn from industry leaders and HR practitioners."], ["Career growth", "95% of graduates report career advancement within 12 months."], ["Local support", "Personal guidance from HRM Office's certified HR consultants."]],
  },
  "digital-hr": {
    name: "Digital HR", icon: "brain", photo: "officeBlue",
    intro: "Lead HR's digital transformation. Learn digital HR strategy and how to bring the right technology into your function.",
    stats: [["4.8/5", "average rating"], ["35,000+", "digital HR professionals"], ["90%", "digital transformation success"]],
    why: [["Digital expertise", "Learn from digital HR specialists and technology experts."], ["Industry recognition", "AIHR digital HR certificates are valued by top employers."], ["Career advancement", "90% of graduates advance in digital HR roles within 12 months."], ["Practical focus", "Hands-on training with real digital HR tools and platforms."]],
  },
  "business-partering": {
    name: "Business Partnering", icon: "link", photo: "clientMeeting",
    intro: "Become the strategic HR business partner leadership listens to: stakeholder management, business acumen and strategic alignment.",
    stats: [["4.9/5", "rating"], ["2,500+", "graduates"], ["14 weeks", "program"]],
    why: [["Strategic partnership", "Master stakeholder management and business alignment."], ["Expert instructors", "Learn from industry leaders and HR practitioners."], ["Career growth", "95% of graduates report career advancement within 12 months."], ["Local support", "Personal guidance from HRM Office's certified HR consultants."]],
  },
  "full-academy": {
    name: "Full Academy Access", icon: "star", photo: "execOutdoor",
    intro: "Unlimited access to AIHR's complete academy, from foundational skills to C-level expertise, in one membership.",
    stats: [["4.9/5", "rating"], ["50+", "courses"], ["500+ hours", "of content"]],
    why: [["Complete access", "Every AIHR course and resource in one membership."], ["Expert instructors", "Learn from industry leaders and HR practitioners."], ["Career growth", "95% of graduates report career advancement within 12 months."], ["Local support", "Personal guidance from HRM Office's certified HR consultants."]],
  },
};
