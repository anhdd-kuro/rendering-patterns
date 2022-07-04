import { graphQLClient, Member } from "@/infra/graphql";
import { MemberInputSchema, GetAllMembers } from "@/features/member/domain";

import { z } from "zod";

export const getAllMembers = async (): Promise<Member[]> => {
  const { members } = await graphQLClient.request(GetAllMembers);

  const validatedData = MemberInputSchema().extend({ id: z.string() }).array().parse(members);

  return validatedData;
};
