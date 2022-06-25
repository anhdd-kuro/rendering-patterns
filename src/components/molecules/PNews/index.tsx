import { PLink } from "@/components/atoms";
import { Date } from "@/helpers";

type Props = {
  date: Date;
  text: string;
  url: string;
};

export const PNews: React.FC<Props> = ({ date, url, text }) => {
  return (
    <div className="flex items-center">
      <p className="mr-5 text-gray-400 text-sm">{Date.toString(date, "yyyy-mm-dd")}</p>
      <PLink fontSizeClass="text-lg" textColorClass="text-blue-800" href={url} isExternal={false}>
        {text}
      </PLink>
    </div>
  );
};
