import { QueryClient } from "react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient();

function queryErrorHandler(error: unknown): void {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title = error instanceof Error ? error.message : "Error connecting to server";

  // prevent duplicate toasts
  toast.error(title);
}

export const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
    staleTime: 600000, // 10 minutes
    cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
  mutations: {
    onError: queryErrorHandler,
  },
};

export const addPrefixToKey = <T extends object>(keys: T, ...prefix: unknown[]) => {
  const newKeys = {} as Record<keyof T, unknown[]>;
  for (const [key, value] of Object.entries(keys)) {
    newKeys[key as keyof T] = [...prefix, ...value];
  }
  return newKeys;
};
