import { useFetchingToast } from "@/components/atoms/PToast/hooks";
import { getAllMembers } from "@/features/member/services";
import { Member } from "@/infra/graphql";
import { useQuery, UseQueryOptions } from "react-query";
import { keys } from "./keys";

export const useMembers = <TError>(options?: UseQueryOptions<Member[], TError>) => {
  const result = useQuery<Member[], TError>(keys.getAll, getAllMembers, {
    initialData: [],
    ...options,
  });

  useFetchingToast({ id: keys.getAll.toString(), fetchingState: result });

  return result;
};
