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

  const props = {
    alt: "Logo",
    className: `${heightClassLookup[height]} w-auto`,
  };

  if (isNext) {
    return (
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image src={logo as any} {...props} />
      </Link>
    );
  }

  return (
    <a href="/">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={logo.src} {...props} />
    </a>
  );
};
