"use client";

import { ClickableLogo } from "../ClickableLogo/ClickableLogo";
import { Nav } from "./components/Nav";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = (props) => {
  const { hideMenuOnPage = false } = props;

  if (hideMenuOnPage) return null;

  return (
    <div className="bg-default sticky top-0 z-50">
      <div className="mx-auto flex h-16 items-center justify-between px-8">
        <ClickableLogo />
        <div>
          <Nav {...props} />
        </div>
      </div>
    </div>
  );
};

