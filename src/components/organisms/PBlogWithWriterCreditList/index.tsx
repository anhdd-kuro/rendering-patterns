import { PLink } from "@/components/atoms";
import { Style } from "@/helpers";
import { PBlogWithWriterCredit } from "../PBlogWithWriterCredit";

type Props = {
  blogs: React.ComponentProps<typeof PBlogWithWriterCredit>[];
};

export const PBlogWithWriterCreditList: React.FC<Props> = ({ blogs }) => {
  return (
    <div>
      <ul className="flex flex-col gap-y-8">
        {blogs?.map((blog, index) => (
          <li key={index}>
            <PBlogWithWriterCredit writer={blog.writer} blog={blog.blog} />
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
