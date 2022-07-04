import { useFetchingToast } from "@/components/atoms/PToast/hooks";
import { getAllMembers } from "@/features/member/services";
import { GraphQl } from "@/infra";
import { useQuery, UseQueryOptions } from "react-query";
import { keys } from "./keys";

export const useMembers = <TError>(options?: UseQueryOptions<GraphQl.Member[], TError>) => {
  const result = useQuery<GraphQl.Member[], TError>(keys.getAll, getAllMembers, {
    initialData: [],
    ...options,
  });

  useFetchingToast({ id: keys.getAll.toString(), fetchingState: result });

  return result;
};
