"use client";

import { Optional } from "@vogelvlug/typescript-utils";
import { createContext, PropsWithChildren, useContext } from "react";

interface DesignSystemContextValue {
  LinkElement: React.ElementType;
  ImageElement: React.ElementType;
  logo: {
    src: string;
  };
}

const DesignSystemContext = createContext<DesignSystemContextValue>({
  logo: { src: "" },
  ImageElement: "img",
  LinkElement: "a",
});

export const DesignSystemProvider: React.FC<
  PropsWithChildren<
    Optional<DesignSystemContextValue, "ImageElement" | "LinkElement">
  >
> = ({
  children,
  logo,
  ImageElement = "img",
  LinkElement = "a",
}) => {
  return (
    <DesignSystemContext.Provider
      value={{
        logo,
        ImageElement,
        LinkElement,
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
