export interface NavItem {
  id: number;
  title: string;
  href: string;
}

export const navigation: NavItem[] = [
  {
    id: 1,
    title: "Home",
    href: "#home",
  },
  {
    id: 2,
    title: "Services",
    href: "#services",
  },
  {
    id: 3,
    title: "Technologies",
    href: "#technologies",
  },
  {
    id: 4,
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    title: "About",
    href: "#about",
  },
  {
    id: 6,
    title: "Contact",
    href: "#contact",
  },
];