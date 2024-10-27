"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
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
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  routes,
  secondaryCta,
  primaryCta,
}) => {
  return (
    <div className="bg-default container mx-auto flex pt-4 pb-4 justify-between items-center">
      <ClickableLogo logo={logo} />
      <div className="flex gap-4">
        {routes.map((route) => (
          <Button variant="tertiary" color="main" className="group">
            {route.title}
          </Button>
        ))}
        <Button variant="secondary" color="main" className="group">
          {secondaryCta?.title}
        </Button>
        <Button variant="primary" color="main" className="group">
          {primaryCta?.title}
        </Button>
      </div>
    </div>
  );
};
