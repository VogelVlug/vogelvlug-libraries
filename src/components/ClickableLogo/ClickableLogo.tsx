"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { useDesignSystem } from "../../provider/DesignSystemProvider";

const logoVariants = cva("w-auto", {
  variants: {
    height: {
      sm: "h-6",
      md: "h-8",
      lg: "h-12",
    },
  },
  defaultVariants: {
    height: "md",
  },
});

export const ClickableLogo: React.FC<VariantProps<typeof logoVariants>> = ({
  height,
}) => {
  const { logo, ImageElement, LinkElement } = useDesignSystem();

  const props = {
    alt: "Logo",
    className: cn(logoVariants({ height })),
  };

  return (
    <LinkElement href="/">
      <ImageElement src={ImageElement === "img" ? logo.src : logo} {...props} />
    </LinkElement>
  );
};
