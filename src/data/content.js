// Text content and links for the site.
import {
  BusinessIcon,
  CameraIcon,
  ComputerIcon,
  DesignIcon,
  DevelopmentIcon,
  MarketingIcon,
} from "../components/Icons";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

export const learningPaths = [
  { label: "Design", Icon: DesignIcon },
  { label: "Development", Icon: DevelopmentIcon },
  { label: "IT & Software", Icon: ComputerIcon },
  { label: "Business", Icon: BusinessIcon },
  { label: "Marketing", Icon: MarketingIcon },
  { label: "Photography", Icon: CameraIcon },
];

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/sarah.webp",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/james.webp",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/alex.webp",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerColumns = [
  {
    title: "Browse",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    title: "",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    title: "Platform",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

// Decorative 3D shapes. x / y / size are in pixels, measured from the Figma frames.
export const heroShapes = [
  { name: "squiggle-lime", x: -122, y: 221, size: 387 },
  { name: "squiggle-white", x: 184, y: 477, size: 176, flip: true },
  { name: "torus-white", x: 14, y: 681, size: 344 },
  { name: "cylinder-lime", x: 1227, y: 220, size: 372 },
  { name: "pyramid-white", x: 1104, y: 464, size: 189 },
  { name: "spring-white", x: 1124, y: 672, size: 332 },
];

export const ctaShapes = [
  { name: "squiggle-lime", x: -122, y: -162, size: 387 },
  { name: "squiggle-white", x: 179, y: 5, size: 176, flip: true },
  { name: "cone-white", x: -50, y: 225, size: 189 },
  { name: "torus-lime", x: 16, y: 298, size: 344 },
  { name: "pyramid-lime", x: 1078, y: 0, size: 189 },
  { name: "cylinder-white", x: 1222, y: 5, size: 372 },
  { name: "spring-lime", x: 1107, y: 289, size: 332 },
];
