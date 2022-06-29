import { GraphQLClient, gql } from "graphql-request";
export { gql };

export const graphQLClient = new GraphQLClient(process.env.API_SERVER || "", {
  headers: {
    // authorization: "Bearer MY_TOKEN",
  },
});

export const createQueryFromObject = <T extends object>(model: string, obj: T) => gql`
{
  ${model} {
    ${Object.keys(obj).join(" ")}
  }
}
`;

export const fetcher = <TData, TVariables>(
  operation: string,
  variables?: TVariables,
  options?: RequestInit["headers"],
): (() => Promise<TData>) => {
  return async () => {
    const { data } = await graphQLClient.request(operation, variables, options);

    return data;
  };
};
