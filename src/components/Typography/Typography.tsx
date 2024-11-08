"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { ElementType } from "react";

const typographyVariants = cva("inline-block", {
  variants: {
    variant: {
      body: "text-base font-normal",
      h1: "text-4xl leading-tight font-bold text-title",
      h2: "text-3xl leading-tight font-bold text-title",
      h3: "text-2xl leading-tight font-bold text-title",
      h4: "text-xl leading-tight font-bold text-title",
      h5: "text-lg leading-tight font-bold text-title",
      h6: "text-base leading-tight font-bold text-title",
      subtitle: "font-medium text-subtitle",
      overtitle: "text-base font-medium uppercase tracking-wider text-overtitle",
      label: "text-sm font-medium text-caption",
      main: "text-base font-medium text-color-main",
      accent: "text-base font-medium text-color-accent"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body"
  }
});

type TypographyProps = VariantProps<typeof typographyVariants> & {
  element?: ElementType;
  text: string;
  highlightWords?: number[];
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  element = "span",
  align,
  text,
  highlightWords = [],
}) => {
  const Element = element;

  return (
    <Element className={typographyVariants({ variant, align })}>
      {text.split(" ").map((word, index) => {
        if (highlightWords.includes(index)) {
          return (
            <span key={index} className="text-color-accent">
              {word}{" "}
            </span>
          );
        }
        return word + " ";
      })}
    </Element>
  );
};