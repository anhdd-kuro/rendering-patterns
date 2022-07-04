import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(process.env.API_SERVER || "", {
  headers: {
    // authorization: "Bearer MY_TOKEN",
  },
});
