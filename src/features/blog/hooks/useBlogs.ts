import { useEffect, useState } from "react";
import { fetchBlog } from "../services/api";
import { Blog } from "../domain";

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
