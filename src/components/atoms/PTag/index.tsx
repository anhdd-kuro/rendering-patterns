import Link from "next/link";
import { TwBackgroundColorClass, TwTextColorClass, TwFontSizeClass } from "@/tailwind.types";
import { Style } from "@/helpers";

type Props = {
  href?: string;
  label: string;
  bgColorClass?: TwBackgroundColorClass;
  textColorClass?: TwTextColorClass;
  fontSizeClass?: TwFontSizeClass;
};

const defaultStyles = Style.clsx(
  "inline-flex items-center justify-center",
  "py-[0.5em] px-[1em] min-h-6 rounded-full",
  "before:content-['#']",
);

const PTag: React.FC<Props> = ({
  href,
  textColorClass = "text-state-900",
  bgColorClass = "bg-gray-200",
  fontSizeClass,
  ...props
}) => {
  const styles = Style.clsx(defaultStyles, textColorClass, bgColorClass, fontSizeClass);

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
