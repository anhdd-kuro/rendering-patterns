import { addPrefixToKey } from "@/infra/react-query";

export const keys = Object.freeze(
  addPrefixToKey(
    {
      getAll: ["getAll"],
    },
    "member",
  ),
);
