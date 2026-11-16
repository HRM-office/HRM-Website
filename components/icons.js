// Phosphor duotone across the site: a two-tone icon (solid line + soft fill) that reads as ours,
// not the thin single-stroke set most UI kits ship. The ssr build works in server and client components.
import {
  GraduationCap, ChartBar, Brain, LinkSimple, BookOpenText, Star, Stack, SquaresFour, Sparkle, FlowArrow,
  UsersThree, Target, ShieldCheck, FileText, Briefcase, EnvelopeSimple, Heart, Medal, Phone, UserPlus,
  Handshake, UserGear, Money, HandCoins, Clock, CalendarCheck, Gavel, SignOut, IdentificationCard,
  DownloadSimple, ChartLineUp, WhatsappLogo, MapPin, LinkedinLogo, InstagramLogo, FacebookLogo, XLogo, Buildings,
} from "@phosphor-icons/react/dist/ssr";

const ICONS = {
  cap: GraduationCap, chart: ChartBar, brain: Brain, link: LinkSimple, book: BookOpenText, star: Star,
  layers: Stack, grid: SquaresFour, spark: Sparkle, flow: FlowArrow, users: UsersThree, target: Target,
  shield: ShieldCheck, doc: FileText, case: Briefcase, mail: EnvelopeSimple, heart: Heart, award: Medal,
  phone: Phone, userPlus: UserPlus, handshake: Handshake, hands: UserGear, money: Money, loan: HandCoins,
  clock: Clock, calendar: CalendarCheck, gavel: Gavel, exit: SignOut, id: IdentificationCard,
  download: DownloadSimple, growth: ChartLineUp, whatsapp: WhatsappLogo, pin: MapPin,
  linkedin: LinkedinLogo, instagram: InstagramLogo, facebook: FacebookLogo, x: XLogo, buildings: Buildings,
};

// Brand logos (social, WhatsApp) use weight="fill" so they match the real marks.
export const Icon = ({ name, size = 20, weight = "duotone" }) => {
  const C = ICONS[name] || Sparkle;
  return <C size={size} weight={weight} aria-hidden="true" />;
};
