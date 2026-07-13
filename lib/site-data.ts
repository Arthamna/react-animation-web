export type Project = {
  title: string;
  discipline: string;
  date: string;
  image: string;
  color: string;
  href: string;
};

export const projects: Project[] = [
  { title: "Cozy", discipline: "Product Direction & Frontend Build", date: "Oct 2024 — Present", image: "/images/project-aurora-new.webp", color: "#d9d6cc", href: "dummy-link" },
  { title: "Rental Website", discipline: "Interface Strategy & Engineering", date: "Apr — Sep 2024", image: "/images/project-meridian-new.webp", color: "#d5e2ed", href: "dummy-link" },
  { title: "Luna Frontend", discipline: "Visual System & Web Production", date: "Sep — Nov 2023", image: "/images/project-lumen-new.webp", color: "#e7ddce", href: "dummy-link" },
  { title: "Ratio", discipline: "Creative Frontend & Interaction", date: "2024", image: "/images/project-nova-new.webp", color: "#d4d0c9", href: "dummy-link" },
];

export const gallery = [
  { image: "/images/gallery-01-new.webp", alt: "Layered architectural surface in soft neutral tones" },
  { image: "/images/gallery-02-new.webp", alt: "Sculptural facade photographed from below" },
  { image: "/images/gallery-03-new.webp", alt: "Geometric concrete building against an open sky" },
  { image: "/images/gallery-04-new.webp", alt: "Reflective glass architecture with rhythmic lines" },
  { image: "/images/gallery-05-new.webp", alt: "Curved modern structure with bold shadows" },
  { image: "/images/gallery-06-new.webp", alt: "Monochrome abstract pattern inspired by architecture" },
  { image: "/images/gallery-07-new.webp", alt: "Minimal building detail with strong perspective" },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
