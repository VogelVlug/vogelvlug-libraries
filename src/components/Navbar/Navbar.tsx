"use client";

import { ReactNode } from "react";
import { Button } from "../Button/Button";
import { ClickableLogo } from "../ClickableLogo/ClickableLogo";

interface NavbarProps {
  logo: {
    src: string;
  };
  routes: {
    path: string;
    title: string;
  }[];
  secondaryCta?: {
    path: string;
    title: string;
  };
  primaryCta?: {
    path: string;
    title: string;
  };
  userMenu?: ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  routes,
  secondaryCta,
  primaryCta,
  userMenu,
}) => {
  return (
    <div className="bg-default container mx-auto flex pt-4 pb-4 justify-between items-center">
      <ClickableLogo logo={logo} />
      <div className="flex gap-4">
        {routes.map((route) => (
          <Button variant="tertiary" color="main" href={route.path}>
            {route.title}
          </Button>
        ))}
        {secondaryCta && (
          <Button variant="secondary" color="main" href={secondaryCta.path}>
            {secondaryCta.title}
          </Button>
        )}
        {primaryCta && (
          <Button variant="primary" color="main" href={primaryCta.path}>
            {primaryCta.title}
          </Button>
        )}
        {userMenu}
      </div>
    </div>
  );
};
