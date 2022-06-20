import { TwTextColorClass, TwFontSizeClass } from "@/tailwind.types";
import Link from "next/link";

export type Props = {
  children: React.ReactNode;
  href: string;
  isExternal: boolean;
  textColorClass?: TwTextColorClass;
  fontSizeClass?: TwFontSizeClass;
};

export const PLink: React.FC<Props> = ({ isExternal, ...props }) => {
  return isExternal ? <ExternalLink {...props} /> : <InternalLink {...props} />;
};

const ExternalLink: React.FC<Omit<Props, "isExternal">> = ({
  children,
  textColorClass,
  ...props
}) => {
  return (
    <a {...props} rel="noopener" target="_blank" className={textColorClass}>
      {children}
    </a>
  );
};

const InternalLink: React.FC<Omit<Props, "isExternal">> = ({
  children,
  href,
  textColorClass,
  ...props
}) => {
  return (
    <Link href={href}>
      <a {...props} className={textColorClass}>
        {children}
      </a>
    </Link>
  );
};
