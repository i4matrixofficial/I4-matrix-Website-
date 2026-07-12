import {
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Compass,
  DatabaseZap,
  Figma,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Map,
  MessageSquareQuote,
  Rocket,
  Route,
  Smartphone,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const companies = ["MAS Holdings", "Brandix", "Dialog", "Hayleys", "Commercial Bank", "LOLC"];

export const services = [
  {
    title: "Web Application Development",
    icon: Code2,
    description: "Secure, scalable web platforms built with modern frontend architecture and robust backend systems.",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    benefits: ["Fast delivery", "Clean architecture", "Enterprise-grade UX"],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "High-performance mobile experiences for customer portals, booking workflows, and operations teams.",
    technologies: ["React Native", "Expo", "Firebase", "REST APIs"],
    benefits: ["iOS and Android", "Offline-ready flows", "Push notifications"],
  },
  {
    title: "UI/UX Design",
    icon: Figma,
    description: "Premium product design systems shaped around conversion, clarity, and everyday operational use.",
    technologies: ["Figma", "Design Systems", "Prototyping", "Research"],
    benefits: ["Reduced friction", "Consistent interfaces", "Better adoption"],
  },
  {
    title: "Tourism System Development",
    icon: Map,
    description: "Reservation, itinerary, supplier, and guest-management systems for tourism businesses.",
    technologies: ["Booking Engines", "CRMs", "Payments", "Analytics"],
    benefits: ["Real-time inventory", "Guest portals", "Revenue visibility"],
  },
  {
    title: "Transport Management Systems",
    icon: Route,
    description: "Fleet, route, driver, and dispatch platforms designed for clarity under daily operational pressure.",
    technologies: ["GPS", "Dashboards", "APIs", "Automation"],
    benefits: ["Route control", "Lower admin load", "Live reporting"],
  },
  {
    title: "Backend API Development",
    icon: DatabaseZap,
    description: "Reliable APIs, integrations, authentication, and data models that support long-term product growth.",
    technologies: ["NestJS", "Express", "Prisma", "JWT"],
    benefits: ["Secure contracts", "Clean documentation", "Scalable services"],
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    description: "Cloud deployment, monitoring, storage, and infrastructure planning for resilient digital products.",
    technologies: ["AWS", "Vercel", "Docker", "CI/CD"],
    benefits: ["High availability", "Automated releases", "Cost control"],
  },
];

export const projects = [
  {
    title: "Tapro Lanka",
    category: "Tourism",
    status: "Live platform",
    description: "A tourism operations platform for destination packages, guest inquiries, and supplier workflows.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: "/images/demo1.png",
  },
  {
    title: "i4Van",
    category: "Transport",
    status: "Scaling",
    description: "A transport management product covering fleet availability, booking operations, and live dispatch.",
    technologies: ["React", "REST APIs", "Maps", "Cloud"],
    image: "/images/demo2.png",
  },
  {
    title: "Tourism Project",
    category: "Travel Tech",
    status: "In development",
    description: "A digital travel platform with curated itineraries, admin dashboards, and booking automation.",
    technologies: ["Next.js", "Framer Motion", "Payments", "CMS"],
    image: "/images/demo3.png",
  },
];

export const strengths = [
  { title: "Modern Technologies", icon: Sparkles, text: "Current frameworks, disciplined engineering, and interfaces that age well." },
  { title: "Scalable Systems", icon: Layers3, text: "Architecture planned around growth, integrations, and future product lines." },
  { title: "Secure Architecture", icon: LockKeyhole, text: "Authentication, data protection, and operational safeguards from the start." },
  { title: "Fast Development", icon: Rocket, text: "Focused delivery cycles without compromising product quality." },
  { title: "UI/UX Excellence", icon: Blocks, text: "Clear visual hierarchy and efficient workflows for real users." },
  { title: "Cloud Infrastructure", icon: Cloud, text: "Deployment, monitoring, and release practices built for reliability." },
];

export const team = [
  { name: "Isuru Fernando", role: "Founder / Solution Architect", group: "Management Team", initials: "IF" },
  { name: "Nethmi Perera", role: "Product Strategy Lead", group: "Business Analysts", initials: "NP" },
  { name: "Kavindu Silva", role: "Senior Full-Stack Developer", group: "Developers", initials: "KS" },
  { name: "Shenali Jayawardena", role: "UI/UX Designer", group: "Designers", initials: "SJ" },
  { name: "Dilan Wijesinghe", role: "Backend Engineer", group: "Developers", initials: "DW" },
  { name: "Amani Rodrigo", role: "Business Analyst", group: "Business Analysts", initials: "AR" },
];

export const testimonials = [
  {
    name: "Chamath Gunasekara",
    role: "Operations Director, Travel Group",
    quote: "i4Matrix translated a complex booking workflow into a product our team could run confidently from day one.",
  },
  {
    name: "Dilini Samarasinghe",
    role: "Head of Digital, Logistics Company",
    quote: "Their delivery style is structured, transparent, and technically strong. The final platform felt polished and reliable.",
  },
  {
    name: "Ruwan Ekanayake",
    role: "Managing Partner, SME Network",
    quote: "The interface quality stood out immediately. It gave our internal software the credibility of a mature product.",
  },
];

export const timeline = [
  { year: "2021", title: "Foundation", text: "i4Matrix began by building focused digital tools for service-led businesses." },
  { year: "2022", title: "Product Delivery", text: "The team expanded into tourism, transport, and custom web platforms." },
  { year: "2024", title: "Cloud Practice", text: "Deployment, monitoring, and API architecture became core delivery pillars." },
  { year: "2026", title: "Premium Software Studio", text: "i4Matrix now delivers end-to-end product strategy, design, and engineering." },
];

export const stats = [
  { value: 35, suffix: "+", label: "Product releases" },
  { value: 7, suffix: "+", label: "Core service areas" },
  { value: 98, suffix: "%", label: "Delivery satisfaction" },
  { value: 4, suffix: "x", label: "Average workflow speed gain" },
];

export const jobs = [
  { title: "Senior Full-Stack Developer", type: "Full-time", location: "Colombo / Hybrid", icon: Code2 },
  { title: "UI/UX Product Designer", type: "Full-time", location: "Remote-friendly", icon: Figma },
  { title: "Business Analyst", type: "Contract", location: "Colombo", icon: BriefcaseBusiness },
  { title: "Intern Software Engineer", type: "Internship", location: "Hybrid", icon: GraduationCap },
];

export const values = [
  { title: "Product thinking", icon: Compass, text: "We care about business outcomes, not just tickets closed." },
  { title: "Calm execution", icon: Workflow, text: "Clear planning, measured delivery, and strong communication." },
  { title: "Shared ownership", icon: UsersRound, text: "Design, engineering, and business work as one product team." },
  { title: "Measurable impact", icon: BarChart3, text: "Every release should create clarity, speed, or revenue potential." },
];

export const contact = {
  email: "hello@i4matrix.com",
  phone: "+94 77 456 7890",
  address: "i4Matrix Software Studio, Colombo, Sri Lanka",
  socials: ["LinkedIn", "Facebook", "Instagram", "X"],
};

export const faq = [
  { q: "How long does a typical software project take?", a: "Focused MVPs usually take 6 to 10 weeks. Larger operational platforms are planned in phased releases." },
  { q: "Can i4Matrix modernize an existing system?", a: "Yes. We audit the current platform, stabilize critical flows, then modernize interface, APIs, and infrastructure in stages." },
  { q: "Do you work with Sri Lankan and international clients?", a: "Yes. The company is based in Sri Lanka and supports both local and international software projects." },
];

export const quoteIcon = MessageSquareQuote;
