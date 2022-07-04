import { gql } from "graphql-request";
export * from "./schema.types.generated";
import { graphQLClient } from "./graphqlClient";

export { graphQLClient };

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
    const result = await graphQLClient.request(operation, variables, options);
    return result;
  };
};
