import { Type, Style } from "@/helpers";
import { TwFontSizeClass, TwTextColorClass } from "@/tailwind.types";

type Props = {
  text: string;
  tag: Type.HeadingTag;
  fontBold?: boolean;
  fontSizeClass?: TwFontSizeClass;
  textColorClass?: TwTextColorClass;
};

export const PHeading: React.FC<Props> = ({
  text,
  tag: Tag,
  fontBold = false,
  fontSizeClass = "text-base",
  textColorClass,
}: Props) => {
  return (
    <Tag
      className={Style.clsx("p-heading", fontBold && "font-bold", fontSizeClass, textColorClass)}
    >
      {text}
    </Tag>
  );
};
