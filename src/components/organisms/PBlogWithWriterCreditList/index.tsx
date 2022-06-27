import { PLink } from "@/components/atoms";
import { Style } from "@/helpers";
import { PBlogWithWriterCredit } from "../PBlogWithWriterCredit";

type Props = {
  blogs: Omit<React.ComponentProps<typeof PBlogWithWriterCredit>, "heading">[];
  heading: React.ComponentProps<typeof PBlogWithWriterCredit>["heading"];
};

export const PBlogWithWriterCreditList: React.FC<Props> = ({ blogs, heading }) => {
  return (
    <div>
      <ul className="flex flex-col gap-y-8">
        {blogs?.map((item, index) => (
          <li key={index}>
            <PBlogWithWriterCredit writer={item.writer} blog={item.blog} heading={heading} />
          </li>
        ))}
      </ul>
      <div
        className={Style.clsx(
          "mt-16 mx-auto ",
          "font-bold text-sm hover:opacity-50",
          "border rounded",
          "[&>*]:block [&>*]:py-4 [&>*]:text-center",
        )}
      >
        <PLink href="/blog" isExternal={false}>
          ブログをもっと見る →
        </PLink>
      </div>
    </div>
  );
};
