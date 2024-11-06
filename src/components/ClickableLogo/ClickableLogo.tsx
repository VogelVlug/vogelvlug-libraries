"use client";

import React from "react";
import { useDesignSystem } from "../../provider/DesignSystemProvider";

interface ClickableLogoProps {
  height?: 2 | 3;
}

export const ClickableLogo: React.FC<ClickableLogoProps> = ({ height = 2 }) => {
  const { logo, customImageElement, customLinkElement } = useDesignSystem();

  const heightClassLookup = {
    2: "h-2",
    3: "h-3",
  };

  const props = {
    alt: "Logo",
    className: `${heightClassLookup[height]} w-auto`,
  };

  const ImageElement = customImageElement || "img";
  const LinkElement = customLinkElement || "a";

  return (
    <LinkElement href="/">
      <ImageElement src={ImageElement === "img" ? logo.src : logo} {...props} />
    </LinkElement>
  );
};
