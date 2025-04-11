"use client";

import { HeaderProps } from "../types";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Nav: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <DesktopNav {...props} />
      <MobileNav {...props} />
    </>
  );
}; 