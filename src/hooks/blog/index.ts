import { fetchBlog } from "@/infra/api/blogs";
import { useEffect, useState } from "react";
import { Blog } from "@/domain/blog";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchBlog();
      setBlogs(data);
    })();

    // return () => {};
  }, [setBlogs]);

  return {
    blogs,
  };
};
