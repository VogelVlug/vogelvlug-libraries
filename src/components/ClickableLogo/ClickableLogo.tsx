"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDesignSystem } from "../../provider/DesignSystemProvider";

interface ClickableLogoProps {
  logo: {
    src: string;
  };
  height?: 8 | 12;
}

export const ClickableLogo: React.FC<ClickableLogoProps> = ({
  logo,
  height = 8,
}) => {
  const { isNext } = useDesignSystem();

  const heightClassLookup = {
    8: "h-8",
    12: "h-12",
  };

  if (isNext) {
    return (
      <Link href="/">
        {/** TODO: Fix this any. Works, but isnt pretty */}
        <Image
          src={logo as any}
          alt="Logo"
          className={`${heightClassLookup[height]} w-auto`}
        />
      </Link>
    );
  }

  return (
    <a href="/">
      <img
        src={logo.src}
        alt="Logo"
        className={`${heightClassLookup[height]} w-auto`}
      />
    </a>
  );
};
