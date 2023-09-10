"use client";

import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

type Props = {};

export default function LogoIcon({}: Props) {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <Icons.logo className="h-6 w-6 hidden md:block" />
      <span className="font-bold inline-block">{siteConfig.name}</span>
    </Link>
  );
}
