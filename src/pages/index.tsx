import { PHeadingWithTopIcon } from "@/components/molecules/PHeadingWithTopIcon";
import { PNewsList, PBlogWithWriterCreditList, PMembers, PHome } from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
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
      membersSectionContent={<PMembers members={[]} />}
    />
  );
};

export default Home;
