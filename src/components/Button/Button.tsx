"use client";

import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";
import { useDesignSystem } from "../../provider/DesignSystemProvider";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  color?: "main" | "accent";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  href,
  onClick,
  variant = "primary",
  color = "main",
  startIcon,
  endIcon,
  className,
}) => {
  const { isNext } = useDesignSystem();

  const Element = href ? (isNext ? Link : "a") : "button";

  const classLoopUp = {
    primary: {
      main: "bg-fill-main hover:bg-fill-main-hover text-fill-main-onfill ring-main-100 focus:ring-4",
      accent:
        "bg-fill-accent hover:bg-fill-accent-hover text-fill-accent-onfill ring-accent-100 focus:ring-4",
    },
    secondary: {
      main: "border-main text-color-main border-2 hover:bg-main-100 ring-neutral-200 focus:ring-4",
      accent:
        "border-accent text-color-accent border-2 hover:bg-accent-100 ring-neutral-200 focus:ring-4",
    },
    tertiary: {
      main: "bg-transparent hover:bg-neutral-200",
      accent: "bg-transparent hover:bg-accent-100",
    },
  };

  const combinedClassName = `${classLoopUp[variant][color]} rounded-lg transition px-1.5 py-0.5 transform active:scale-95 flex items-center gap-2 ${className}`;

  return (
    <Element
      // @ts-expect-error If it is a Next.js Link, there will be a href
      href={href}
      onClick={onClick}
      className={combinedClassName}
    >
      {startIcon}
      {children}
      {endIcon}
    </Element>
  );
};
