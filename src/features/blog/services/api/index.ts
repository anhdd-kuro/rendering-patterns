import { blogSchema } from "@/features/blog/domain";
import { graphQLClient, gql } from "@/infra/graphqlClient";

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
  const data = await graphQLClient.request(query);

  const validatedData = blogSchema.array().parse(data.blogs);

  return validatedData;
};
