import { PBlogWithWriterCredit } from "../PBlogWithWriterCredit";

type Props = {
  blogs: React.ComponentProps<typeof PBlogWithWriterCredit>[];
};

export const PBlogWithWriterCreditList: React.FC<Props> = ({ blogs }) => {
  return (
    <ul className="flex flex-col gap-y-8">
      <li>
        {blogs?.map((blog, index) => (
          <PBlogWithWriterCredit writer={blog.writer} blog={blog.blog} key={index} />
        ))}
      </li>
    </ul>
  );
};
