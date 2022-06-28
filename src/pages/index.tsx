import { PHeadingWithTopIcon } from "@/components/molecules/PHeadingWithTopIcon";
import { PNewsList, PBlogWithWriterCreditList, PMembers, PHome } from "@/components";
import type { NextPage } from "next";
import { useMembers } from "@/features/member/hooks";
import { useMemo } from "react";
import { useBlogs } from "@/features/blog/hooks";

const Home: NextPage = () => {
  const { data: members } = useMembers();
  const displayMembers = useMemo(
    () =>
      members?.map((member) => ({
        ...member,
      })) ?? [],
    [members],
  );

  const { blogs } = useBlogs();
  const displayBlogs = useMemo(
    () =>
      blogs.map(({ writer, ...blog }) => ({
        blog: { ...blog, date: new Date(blog.date) },
        writer: { name: writer.nickname, ...writer },
      })),
    [blogs],
  );

  return (
    <PHome
      mainVisual={<div>Main Visual</div>}
      newsSection={<PNewsList news={[]} />}
      blogSectionTitle={
        <PHeadingWithTopIcon
          tag="h2"
          text="Blog"
          textColorClass="text-blue-800"
          fontBold
          fontSizeClass="text-2xl"
        />
      }
      blogsSectionContent={<PBlogWithWriterCreditList blogs={displayBlogs} heading="h3" />}
      membersSectionTitle={
        <PHeadingWithTopIcon
          tag="h2"
          text="Member"
          textColorClass="text-blue-800"
          fontBold
          fontSizeClass="text-2xl"
        />
      }
      membersSectionContent={<PMembers members={displayMembers} />}
    />
  );
};

export default Home;
