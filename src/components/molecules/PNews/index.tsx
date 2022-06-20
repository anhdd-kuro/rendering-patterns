import { PLink } from "@/components/atoms";
import { Date } from "@/helpers";

export type Props = {
  news: {
    date: Date;
    text: string;
    url: string;
  };
};

export const PNews: React.FC<Props> = ({ news }) => {
  return (
    news && (
      <div className="flex items-center">
        <p className="mr-5 text-gray-400 text-sm">{Date.toString(news.date, "yyyy-mm-dd")}</p>
        <PLink
          fontSizeClass="text-lg"
          textColorClass="text-blue-800"
          href={news.url}
          isExternal={false}
        >
          {news.text}
        </PLink>
      </div>
    )
  );
};
