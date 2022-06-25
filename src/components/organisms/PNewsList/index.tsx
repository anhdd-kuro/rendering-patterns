import { PNews } from "@/components/molecules/PNews";

type Props = {
  news: React.ComponentProps<typeof PNews>[];
};

export const PNewsList: React.FC<Props> = ({ news }) => {
  return (
    <ul className="flex flex-col relative">
      {news.map((item, index) => (
        <li key={index} className="p-4">
          <PNews {...item} />
        </li>
      ))}
    </ul>
  );
};
