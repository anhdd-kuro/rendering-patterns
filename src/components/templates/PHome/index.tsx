import { Style } from "@/helpers";

type Props = {
  mainVisual: React.ReactNode;
  newsSection: React.ReactNode;
  blogsSectionContent: React.ReactNode;
  blogSectionTitle: React.ReactNode;
  membersSectionContent: React.ReactNode;
  membersSectionTitle: React.ReactNode;
};

export const PHome: React.FC<Props> = ({
  mainVisual,
  blogsSectionContent,
  blogSectionTitle,
  membersSectionTitle,
  membersSectionContent,
  newsSection,
}) => {
  return (
    <>
      <section id="main-visual">{mainVisual ? mainVisual : "Main Visual"}</section>
      <section id="news" className="p-6">
        {newsSection || <p>News Section</p>}
      </section>
      <section
        id="blog"
        className={Style.clsx(
          "flex flex-col",
          "border-yellow-300 border-8 py-[100px] px-[200px] space-y-20",
        )}
      >
        {blogSectionTitle || <h2>Blogs Title</h2>}
        {blogsSectionContent || <p>Blogs Content</p>}
      </section>
      <section
        id="members"
        className={Style.clsx(
          "flex flex-col",
          "border-blue-600 border-8 py-[100px] px-[200px] space-y-20",
        )}
      >
        {membersSectionTitle || <h2>Members Title</h2>}
        {membersSectionContent || <p>Members Content</p>}
      </section>
    </>
  );
};
