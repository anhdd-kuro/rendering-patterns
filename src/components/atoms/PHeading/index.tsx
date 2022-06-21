import { Type } from "@/helpers";
import { TwFontSizeClass } from "@/tailwind.types";
import clsx from "clsx";

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
  return <Tag className={clsx("p-heading", fontBold && "font-bold", fontSizeClass)}>{text}</Tag>;
};
