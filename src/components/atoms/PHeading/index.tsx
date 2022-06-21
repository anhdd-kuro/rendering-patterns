import { Type, Style } from "@/helpers";
import { TwFontSizeClass } from "@/tailwind.types";

type Props = {
  text: string;
  tag: Type.HeadingTag;
  fontBold?: boolean;
  fontSizeClass?: TwFontSizeClass;
};

export const PHeading: React.FC<Props> = ({
  text,
  tag: Tag,
  fontBold = false,
  fontSizeClass = "text-base",
}: Props) => {
  return (
    <Tag className={Style.clsx("p-heading", fontBold && "font-bold", fontSizeClass)}>{text}</Tag>
  );
};
