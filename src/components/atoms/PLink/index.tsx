import { TextClass } from "tailwind.types";
import { Style } from "@/helpers";
import Link from "next/link";

export type Props = {
  children: React.ReactNode;
  href: string;
  textClass?: TextClass;
  isExternal: boolean;
};

export const PLink: React.FC<Props> = ({ isExternal, ...props }) => {
  return isExternal ? <ExternalLink {...props} /> : <InternalLink {...props} />;
};

const ExternalLink: React.FC<Omit<Props, "isExternal">> = ({ children, textClass, ...props }) => {
  return (
    <a {...props} rel="noopener" target="_blank" className={Style.joinClass([textClass])}>
      {children}
    </a>
  );
};

const InternalLink: React.FC<Omit<Props, "isExternal">> = ({
  children,
  href,
  textClass,
  ...props
}) => {
  return (
    <Link href={href}>
      <a {...props} className={Style.joinClass([textClass])}>
        {children}
      </a>
    </Link>
  );
};
