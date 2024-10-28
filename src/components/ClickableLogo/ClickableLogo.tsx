"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDesignSystem } from "../../provider/DesignSystemProvider";

interface ClickableLogoProps {
  logo: {
    src: string;
  };
  height?: 2 | 3;
}

export const ClickableLogo: React.FC<ClickableLogoProps> = ({
  logo,
  height = 2,
}) => {
  const { isNext } = useDesignSystem();

  const heightClassLookup = {
    2: "h-2",
    3: "h-3",
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
