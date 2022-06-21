import { PBlog } from "@/components/molecules/PBlog";
import { PWriter } from "@/components/molecules/PWriter";
import { useMemo } from "react";

type Props = {
  writer: React.ComponentProps<typeof PWriter>;
  blog: React.ComponentProps<typeof PBlog>;
};

export const PBlogWithWriterCredit: React.FC<Props> = ({ writer, blog }) => {
  const Writer = useMemo(
    () => (
      <div className="absolute right-0 bottom-0 text-sm">
        <PWriter {...writer} />
      </div>
    ),
    [writer],
  );

  return <PBlog {...blog} creditContent={Writer} />;
};
