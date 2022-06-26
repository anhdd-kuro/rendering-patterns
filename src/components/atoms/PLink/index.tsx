import { Style } from "@/helpers";
import { TwTextColorClass, TwFontSizeClass } from "@/tailwind.types";
import Link from "next/link";

export type Props = {
  children: React.ReactNode;
  href: string;
  isExternal: boolean;
  textColorClass?: TwTextColorClass;
  fontSizeClass?: TwFontSizeClass;
};

export const PLink: React.FC<Props> = ({ isExternal, href, children, ...styleClass }) => {
  return (
    <Link href={href} passHref={isExternal}>
      <a
        className={Style.clsx(styleClass)}
        {...(isExternal && { rel: "noopener", target: "_blank" })}
      >
        {children}
      </a>
    </Link>
  );
};
