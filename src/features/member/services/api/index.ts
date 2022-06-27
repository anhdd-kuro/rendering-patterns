import { memberSchema } from "@/features/member/domain";
import { graphQLClient, gql } from "@/infra/graphqlClient";

const query = gql`
  {
    members {
      id
      nickname
      catchCopy
      imageUrl
      role
    }
  }
`;

export const fetchMember = async () => {
  const data = await graphQLClient.request(query);

  const validatedData = memberSchema.array().parse(data.members);

  return validatedData;
};
