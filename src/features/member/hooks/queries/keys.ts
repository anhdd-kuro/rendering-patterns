import { addPrefixToKey } from "@/infra/queryClient";

const keys = {
  all: ["all"],
} as const;

export const memberKeys = Object.freeze(addPrefixToKey(keys, "member"));
