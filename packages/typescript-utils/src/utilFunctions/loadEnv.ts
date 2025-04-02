export const loadEnv = (key: string): string => {
  const env = process.env[key];

  if (!env)
    throw new Error(
      `Enviroment variable with the specified key ${key} was not found.`,
    );

  return env;
};
