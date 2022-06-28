import { memberSchema } from "@/features/member/domain";
import { graphQLClient, createQueryFromObject } from "@/infra/graphqlClient";

const defaultQuery = createQueryFromObject("members", memberSchema.shape);

export const getMembers = async (query: string = defaultQuery) => {
  const { members } = await graphQLClient.request(query);

  const validatedData = memberSchema.array().parse(members);

  return validatedData;
};
