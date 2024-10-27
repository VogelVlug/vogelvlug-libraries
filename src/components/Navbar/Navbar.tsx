"use client";

import { Button } from "../Button/Button";
import { ClickableLogo } from "../ClickableLogo/ClickableLogo";

interface NavbarProps {
  logo: {
    src: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <div className="bg-default container mx-auto flex pt-4 pb-4 justify-between items-center">
      <ClickableLogo logo={logo} />
      <div>
        <Button variant="tertiary" color="main">
          Login
        </Button>
      </div>
    </div>
  );
};
