import { useFetchingToast } from "@/components/atoms/PToast/hooks";
import { getAllMembers } from "@/features/member/services";
import { Member } from "@/infra/graphql";
import { useQuery } from "react-query";
import { keys } from "./keys";

export const useMembers = () => {
  const result = useQuery<Member[], unknown>(keys.getAll, getAllMembers, {
    initialData: [],
  });

  useFetchingToast({ id: keys.getAll.toString(), fetchingState: result });

  return result;
};
