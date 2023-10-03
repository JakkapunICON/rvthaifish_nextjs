import { MainNavItem } from "@/types/nav";

interface MenuConfig {
  mainNav: MainNavItem[];
}

export const menuConfig: MenuConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about"
    },
    {
      title: "Contact",
      href: "/contact"
    }
  ]
};
