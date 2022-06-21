import { PHeading, PImage, PLink, PTag } from "@/components/atoms";
import { Date, Type, Style } from "@/helpers";

const StyledTailwind = Style.StyledTailwind;

type Props = {
  url: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  date: Date;
  category: string;
  title: string;
  tags: string[];
  heading: Type.HeadingTag;
  creditContent: React.ReactNode;
};

export const PBlog: React.FC<Props> = ({
  url,
  thumbnail,
  title,
  date,
  category,
  heading,
  tags,
  creditContent,
}) => {
  return (
    <figure className="relative flex justify-between">
      <div role="img" className="relative w-32 h-32 overflow-hidden mr-10">
        <PLink href={url} isExternal={false}>
          <PImage src={thumbnail.src} alt={thumbnail.alt || `${title}の画像`} />
        </PLink>
      </div>
      <figcaption className={Style.Style.clsx("relative flex-1 flex flex-col pb-12")}>
        <div className="flex items-center leading-none">
          <p className="text-gray-500 text-[0.8em] font-bold">
            {Date.toString(date, "yyyy-mm-dd")}
          </p>
          <p
            className="ml-1 mb-[0.3em] px-1 text-[0.8em]"
            style={{
              background: "linear-gradient(180deg, #fff, #fff 56%, #f6d322 57%, #f6d322)",
            }}
          >
            {category}
          </p>
        </div>
        <StyledTailwind
          component={PHeading}
          props={{ text: title, tag: heading, fontSizeClass: "text-2xl", fontBold: true }}
          className="mt-3"
        />
        <div className="mt-3 space-x-2">
          {tags.map((tag, index) => (
            <PTag label={tag} key={index} fontSizeClass="text-sm" />
          ))}
        </div>
      </figcaption>
      {creditContent}
    </figure>
  );
};
