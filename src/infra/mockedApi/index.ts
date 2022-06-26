import { createServer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";

const graphQLSchema = `
type Member {
  id: ID!
  nickname: String!
  role: String!
  firstName: String
  lastName: String
  catchCopy: String
  imageUrl: String
}

type Query {
  members: [Member]
}
`;

export function makeServer() {
  return createServer({
    urlPrefix: process.env.API_SERVER,
    routes() {
      // this.passthrough("/_next/static/development/_devPagesManifest.json");
      this.passthrough((request) => {
        if (request.url === "/_next/static/development/_devPagesManifest.json") return true;
      });
      const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema);

      this.post("", graphQLHandler);
    },
    seeds(server) {
      server.create("Member", {
        // @ts-ignore
        role: "Human Tactics Executive",
        firstName: "Charity",
        lastName: "Mayer",
        nickname: "Dustin Schuster",
        catchCopy: "Do consequat irure enim eu non reprehenderit ipsum ad incididunt sit.",
        imageUrl: "",
      });
    },
  });
}
