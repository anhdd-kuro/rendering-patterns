import { blogSchema } from "@/features/blog/domain";
import { GraphQl } from "@/infra";
import { gql } from "graphql-request";

const query = gql`
  {
    blogs {
      id
      date
      category
      title
      url
      thumbnail {
        src
        alt
      }
      tags
      writer {
        id
        nickname
        role
        imageUrl
      }
    }
  }
`;

export const fetchBlog = async () => {
  const data = await GraphQl.graphQLClient.request(query);

  const validatedData = blogSchema.array().parse(data.blogs);

  return validatedData;
};
