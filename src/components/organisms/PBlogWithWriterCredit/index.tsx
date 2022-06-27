import { PBlog } from "@/components/molecules/PBlog";
import { PWriter } from "@/components/molecules/PWriter";
import { useMemo } from "react";

type Props = {
  writer: React.ComponentProps<typeof PWriter>;
  blog: React.ComponentProps<typeof PBlog>["data"];
  heading: React.ComponentProps<typeof PBlog>["heading"];
};

export const PBlogWithWriterCredit: React.FC<Props> = ({ writer, blog, heading }) => {
  const Writer = useMemo(
    () => (
      <div className="absolute right-0 bottom-0 text-sm">
        <PWriter {...writer} />
      </div>
    ),
    [writer],
  );

  return <PBlog data={blog} heading={heading} creditContent={Writer} />;
};
