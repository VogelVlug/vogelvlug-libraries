"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
} from "react";

interface DesignSystemContextValue {
  isNext: boolean;
  customLinkElement?: React.ElementType;
  customImageElement?: React.ElementType;
  logo: {
    src: string;
  };
}

const DesignSystemContext = createContext<DesignSystemContextValue>({
  logo: { src: "" },
  isNext: false,
});

export const DesignSystemProvider: React.FC<
  PropsWithChildren<DesignSystemContextValue>
> = ({ children, ...props }) => {
  return (
    <DesignSystemContext.Provider value={props}>
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
