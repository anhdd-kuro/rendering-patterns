import { MemberInputSchema, useGetMemberQuery } from "@/infra/graphql/generated";
import { useMemo } from "react";

export const useMembers = () => {
  const getMembersQuery = useGetMemberQuery();

  const members = useMemo(() => {
    return MemberInputSchema().parse(getMembersQuery.data);
  }, [getMembersQuery]);

  return {
    getMembersQuery,
    members,
  };
};
