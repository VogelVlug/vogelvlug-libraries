export const objectKeys = <T extends Record<string, unknown>>(
  object: T,
): Array<keyof T> => {
  return Object.keys(object) as Array<keyof T>;
};
