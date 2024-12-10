import { cva, type VariantProps } from "class-variance-authority";
import { ElementType } from "react";
import { cn } from "../../lib/utils";

const typographyVariants = cva("inline-block", {
  variants: {
    variant: {
      body: "text-base font-normal",
      h1: "sm:text-4xl text-3xl leading-tight font-bold text-title",
      h2: "sm:text-3xl text-2xl leading-tight font-bold text-title",
      h3: "sm:text-2xl text-xl leading-tight font-bold text-title",
      h4: "sm:text-xl text-lg leading-tight font-bold text-title",
      h5: "sm:text-lg text-base leading-tight font-bold text-title",
      h6: "text-base leading-tight font-bold text-title",
      subtitle: "font-medium text-subtitle",
      overtitle:
        "text-base font-medium uppercase tracking-wider text-overtitle",
      label: "text-sm font-medium text-caption",
      main: "text-base font-medium text-color-main",
      accent: "text-base font-medium text-color-accent",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type TypographyVariant = VariantProps<typeof typographyVariants>["variant"];

type TypographyProps = VariantProps<typeof typographyVariants> & {
  element?: ElementType;
  text: string;
  highlightWords?: number[];
  className?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  element = "span",
  align,
  text,
  highlightWords = [],
  className,
}) => {
  const Element = element;

  return (
    <Element className={cn(typographyVariants({ variant, align }), className)}>
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
