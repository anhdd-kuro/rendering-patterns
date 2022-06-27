import { PHeadingWithTopIcon } from "@/components/molecules/PHeadingWithTopIcon";
import { PNewsList, PBlogWithWriterCreditList, PMembers, PHome } from "@/components";
import type { NextPage } from "next";
import { useMembers } from "@/hooks/member";
import { useMemo } from "react";

const Home: NextPage = () => {
  const { members } = useMembers();
  const displayMembers = useMemo(
    () =>
      members.map((member) => ({
        nickname: member.nickname,
        role: member.role || "",
        catchCopy: member.catchCopy || "",
      })),
    [members],
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
      blogsSectionContent={<PBlogWithWriterCreditList blogs={[]} />}
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
