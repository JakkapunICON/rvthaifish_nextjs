"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import LogoIcon from "@/components/header/logo-icon";

export function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <LogoIcon />
      {/* <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
      </Link> */}

      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link href="/about" className={cn("transition-colors hover:text-foreground/80", pathname === "/about" ? "text-foreground" : "text-foreground/60")}>
          About
        </Link>
        <Link
          href="/contact"
          className={cn("transition-colors hover:text-foreground/80", pathname?.startsWith("/contact") ? "text-foreground" : "text-foreground/60")}
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
