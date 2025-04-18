"use client";

import { cn } from "../../lib/utils";
import { ClickableLogo } from "../ClickableLogo/ClickableLogo";
import { Nav } from "./components/Nav";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps & { className?: string }> = (
  props,
) => {
  const { hideMenuOnPage = false, className } = props;

  if (hideMenuOnPage) return null;

  return (
    <div className={cn("bg-default sticky top-0 z-50", className)}>
      <div className="mx-auto flex h-16 items-center justify-between px-8">
        <ClickableLogo />
        <div>
          <Nav {...props} />
        </div>
      </div>
    </div>
  );
};
