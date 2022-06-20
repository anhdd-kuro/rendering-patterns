import Link from "next/link";
import { TwBackgroundColorClass, TwTextColorClass } from "@/tailwind.types";
import { Style } from "@/helpers";

type Props = {
  href?: string;
  label: string;
  bgClass?: TwBackgroundColorClass;
  textClass?: TwTextColorClass;
};

const defaultStyles = Style.joinClass([
  "inline-flex items-center justify-center",
  "p-3 min-h-6 rounded",
  "before:content-['#']",
]);

const PTag: React.FC<Props> = ({
  href,
  textClass = "text-state-900",
  bgClass = "bg-gray-200",
  ...props
}) => {
  const styles = Style.joinClass([defaultStyles, `${textClass}`, `${bgClass}`]);

  return href ? (
    <LinkTag href={href} {...props} styles={styles} />
  ) : (
    <NormalTag {...props} styles={styles} />
  );
};

const NormalTag: React.FC<{ label: string; styles: string }> = ({ label, styles }) => {
  return <span className={styles}>{label}</span>;
};

const LinkTag: React.FC<{ label: string; href: string; styles: string }> = ({
  href,
  label,
  styles,
}) => {
  return (
    <Link href={href}>
      <a className={styles}>{label}</a>
    </Link>
  );
};

export { PTag };
