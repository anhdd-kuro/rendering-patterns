// import axiosClient from "@/infra/axiosClient";
import { memberSchema } from "@/domain/member";
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
  // const res = await axiosClient.post("", { data: graphqlQuery });
  const data = await graphQLClient.request(query);

  const validatedData = memberSchema.array().parse(data.members);

  return validatedData;
};
