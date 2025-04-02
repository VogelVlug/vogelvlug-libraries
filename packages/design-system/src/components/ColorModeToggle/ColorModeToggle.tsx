"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../Button/Button";
import { useDesignSystem } from "../../provider/DesignSystemProvider";

export const ColorModeToggle = () => {
  const { colorMode, setColorMode } = useDesignSystem();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle color mode</span>
    </Button>
  );
};
