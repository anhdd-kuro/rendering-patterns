import { getMembers } from "@/features/member/services/api";
import { useQuery, UseQueryOptions } from "react-query";
import { Member } from "../../domain";
import { memberKeys } from "./keys";

type MemberQueryOptions = UseQueryOptions<Member[], unknown, Member[], unknown[]>;

const defaultOptions: MemberQueryOptions = {
  initialData: [],
};

export const useMembers = (options?: MemberQueryOptions) => {
  return useQuery(memberKeys.all, () => getMembers(), {
    ...defaultOptions,
    ...options,
  });
};
