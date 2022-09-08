// @ts-nocheck
import { createServer } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import graphQLSchema from "@/infra/graphql/schema.gql";
import graphQLSchemaTest from "./generated-schema.gql";

export function makeServer() {
  return createServer({
    urlPrefix: process.env.API_SERVER,
    routes() {
      this.timing = 2000;
      // this.passthrough("/_next/static/development/_devPagesManifest.json");
      this.passthrough((request) => {
        if (request.url === "/_next/static/development/_devPagesManifest.json") return true;
      });
      const graphQLHandler = createGraphQLHandler(graphQLSchema, this.schema);

      this.post("", graphQLHandler);
    },
    seeds(server) {
      const members = server.createList("Member", 10, {
        role: "Human Tactics Executive",
        firstName: "Charity",
        lastName: "Mayer",
        nickname: "Dustin Schuster",
        catchCopy: "Do consequat irure enim eu non reprehenderit ipsum ad incididunt sit.",
        imageUrl: "",
      });

      const thumbnail = server.create("Thumbnail", {
        src: "",
        alt: "Quia saepe facilis et eum ea tempore quo.",
      });

      server.createList("Blog", 10, {
        url: "/",
        thumbnail: thumbnail,
        date: "2022/06/06",
        category: "Rustic",
        title: "Nulla error repellat repellat omnis et.",
        tags: ["natus", "deleniti"],
        writer: members[Math.floor(Math.random() * 10)],
      });
    },
  });
}
