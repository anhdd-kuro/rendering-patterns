import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const addPrefixToKey = <T extends object>(keys: T, ...prefix: unknown[]) => {
  const newKeys = {} as Record<keyof T, unknown[]>;
  for (const [key, value] of Object.entries(keys)) {
    newKeys[key as keyof T] = [...prefix, ...value];
  }
  return newKeys;
};
