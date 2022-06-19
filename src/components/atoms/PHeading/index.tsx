import { Style } from "@/helpers";
import { TwFontSizeClass } from "@/tailwind.types";

type Props = {
  text: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontBold?: boolean;
  fontSizeClass: TwFontSizeClass;
};

export const PHeading: React.FC<Props> = ({
  text,
  tag: Tag,
  fontBold = false,
  fontSizeClass = "text-base",
}: Props) => {
  return <Tag className={Style.joinClass([fontBold && "font-bold", fontSizeClass])}>{text}</Tag>;
};
