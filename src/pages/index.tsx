import { PHeadingWithTopIcon } from "@/components/molecules/PHeadingWithTopIcon";
import { PNewsList, PBlogWithWriterCreditList, PMembers, PHome } from "@/components";
import type { NextPage } from "next";
import { useMembers } from "@/hooks/member";
import { useMemo } from "react";
import { useBlogs } from "@/hooks/blog";

const Home: NextPage = () => {
  const { members } = useMembers();
  const displayMembers = useMemo(
    () =>
      members.map((member) => ({
        ...member,
        role: member.role || "",
        catchCopy: member.catchCopy || "",
      })),
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
