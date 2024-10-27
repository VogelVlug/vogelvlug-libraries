"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface DesignSystemContextValue {
  isNext: boolean;
}

const DesignSystemContext = createContext<DesignSystemContextValue>({
  isNext: false,
});

export const DesignSystemProvider: React.FC<
  PropsWithChildren<{
    isNext: boolean;
  }>
> = ({ children, isNext }) => {
  return (
    <DesignSystemContext.Provider value={{ isNext }}>
      {children}
    </DesignSystemContext.Provider>
  );
};

export const useDesignSystem = () => {
  const ctx = useContext(DesignSystemContext);
  return ctx;
};
