import { GraphQLClient, gql } from "graphql-request";
export { gql };

export const graphQLClient = new GraphQLClient(process.env.API_SERVER || "", {
  headers: {
    // authorization: "Bearer MY_TOKEN",
  },
});

export const request = graphQLClient.request;

export const createQueryFromObject = <T extends object>(model: string, obj: T) => gql`
{
  ${model} {
    ${Object.keys(obj).join(" ")}
  }
}
`;
