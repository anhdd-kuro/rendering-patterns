import { GraphQl } from "@/infra";
import { GetAllMembers } from "./operation.types.generated";

import { z } from "zod";

export const getAllMembers = async (): Promise<GraphQl.Member[]> => {
  const { members } = await GraphQl.graphQLClient.request(GetAllMembers);

  const validatedData = GraphQl.MemberInputSchema()
    .extend({ id: z.string() })
    .array()
    .parse(members);

  return validatedData;
};
