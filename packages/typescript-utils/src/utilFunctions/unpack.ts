import { NotUndefined } from "../utilTypes";

export const unpack = <T, K extends keyof T>(
  arr: Array<T> | null | undefined,
  key: K,
): NotUndefined<T[K]>[] => {
  if (!arr) return [];
  return arr
    .filter((item) => item[key])
    .map((item) => item[key]) as NotUndefined<T[K]>[];
};
