"use client";

import { Optional } from "@vogelvlug/typescript-utils";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type ColorMode = "dark" | "light" | "system";

const STORAGE_KEY = "vogelvlug-design-system-color-mode" as const;

interface DesignSystemContextValue {
  LinkElement: React.ElementType;
  ImageElement: React.ElementType;
  logo: {
    src: string;
  };
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
}

const DesignSystemContext = createContext<DesignSystemContextValue>({
  logo: { src: "" },
  ImageElement: "img",
  LinkElement: "a",
  colorMode: "system",
  setColorMode: () => null,
});

const applyColorMode = (colorMode: ColorMode) => {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (colorMode === "system") {
    const systemColorMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    root.classList.add(systemColorMode);
    return;
  }

  root.classList.add(colorMode);
};

export const DesignSystemProvider: React.FC<
  PropsWithChildren<
    Optional<DesignSystemContextValue, "ImageElement" | "LinkElement" | "colorMode" | "setColorMode">
  >
> = ({
  children,
  logo,
  ImageElement = "img",
  LinkElement = "a",
  colorMode: defaultColorMode = "system",
}) => {
  const [colorMode, setColorModeState] = useState<ColorMode>(
    () => (localStorage?.getItem(STORAGE_KEY) as ColorMode) || defaultColorMode
  );

  const setColorMode = (newColorMode: ColorMode) => {
    localStorage?.setItem(STORAGE_KEY, newColorMode);
    setColorModeState(newColorMode);
    applyColorMode(newColorMode);
  };

  // Initialize color mode
  if (typeof window !== 'undefined') {
    applyColorMode(colorMode);
  }

  return (
    <DesignSystemContext.Provider
      value={{
        logo,
        ImageElement,
        LinkElement,
        colorMode,
        setColorMode,
      }}
    >
      {children}
    </DesignSystemContext.Provider>
  );
};

export const useDesignSystem = () => {
  const ctx = useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error(
      "useDesignSystem must be used within a DesignSystemProvider",
    );
  }
  return ctx;
};
