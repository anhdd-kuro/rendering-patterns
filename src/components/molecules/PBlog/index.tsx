import { PHeading, PImage, PLink, PTag } from "@/components/atoms";
import { Date, Type, Style } from "@/helpers";

type Props = {
  data: {
    id: string;
    url: string;
    thumbnail?: {
      src: string;
      alt: string;
    };
    date: Date;
    category: string;
    title: string;
    tags?: string[];
  };
  heading: Type.HeadingTag;
  creditContent: React.ReactNode;
};

export const PBlog: React.FC<Props> = ({ data, heading, creditContent }) => {
  console.log(data);

  return (
    <figure className="relative flex justify-between">
      <div role="img" className="relative w-32 h-32 overflow-hidden mr-10">
        <PLink href={data.url} isExternal={false}>
          <PImage
            src={data.thumbnail?.src}
            role="thumbnail"
            alt={data.thumbnail?.alt || `${data.title}の画像`}
          />
        </PLink>
      </div>
      <figcaption className={Style.clsx("relative flex-1 flex flex-col gap-3")}>
        <div className="flex items-center leading-none text-[0.8em]">
          <p className="text-gray-500 font-bold">{Date.toString(data.date, "yyyy-mm-dd")}</p>
          <p
            className="ml-1 mb-[0.3em] px-1"
            style={{
              background:
                "linear-gradient(180deg, transparent, transparent 56%, #f6d322 57%, #f6d322)",
            }}
          >
            {data.category}
          </p>
        </div>
        <PHeading text={data.title} tag={heading} fontSizeClass="text-2xl" />
        <div className="space-x-2">
          {data.tags?.map((tag, index) => (
            <PTag label={tag} key={index} fontSizeClass="text-xs" />
          ))}
        </div>
      </figcaption>
      {creditContent}
    </figure>
  );
};
