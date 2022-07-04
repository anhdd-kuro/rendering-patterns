import { GraphQl } from "@/infra";
import { MemberInputSchema, GetAllMembers } from "@/features/member/domain";

import { z } from "zod";

export const getAllMembers = async (): Promise<GraphQl.Member[]> => {
  const { members } = await GraphQl.graphQLClient.request(GetAllMembers);

  const validatedData = MemberInputSchema().extend({ id: z.string() }).array().parse(members);

  return validatedData;
};
