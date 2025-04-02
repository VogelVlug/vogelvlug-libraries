"use client";

import { Optional } from "@vogelvlug/typescript-utils";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

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
    Optional<
      DesignSystemContextValue,
      "ImageElement" | "LinkElement" | "colorMode" | "setColorMode"
    >
  >
> = ({
  children,
  logo,
  ImageElement = "img",
  LinkElement = "a",
  colorMode: defaultColorMode = "system",
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>(defaultColorMode);

  // Load color mode from localStorage upon first render (dirty workaround for SSR)
  useEffect(() => {
    const colorMode = localStorage?.getItem(STORAGE_KEY) as ColorMode;
    setColorMode(colorMode);
    applyColorMode(colorMode);
  }, []);

  // Update the color mode whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, colorMode);
    applyColorMode(colorMode);
  }, [colorMode]);

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
