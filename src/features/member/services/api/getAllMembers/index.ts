import { GraphQl } from "@/infra";
import document from "@/features/operations.gql";

import { z } from "zod";

export const getAllMembers = async (): Promise<GraphQl.Member[]> => {
  const { members } = await GraphQl.graphQLClient.request(document.getAllMember);

  const validatedData = GraphQl.MemberInputSchema()
    .extend({ id: z.string() })
    .array()
    .parse(members);

  return validatedData;
};
