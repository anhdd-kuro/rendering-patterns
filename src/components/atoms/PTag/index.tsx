import Link from "next/link";

type Props = {
  href?: string;
  label: string;
};

const styles = [
  "inline-flex items-center justify-center",
  "p-3 min-h-6",
  "text-state-900 bg-gray-200 rounded",
  "before:content-['#']",
].join(" ");

const PTag: React.FC<Props> = ({ href, ...props }) => {
  return href ? <LinkTag href={href} {...props} /> : <NormalTag {...props} />;
};

const NormalTag: React.FC<Pick<Props, "label">> = ({ label }) => {
  return <span className={styles}>{label}</span>;
};

const LinkTag: React.FC<Required<Props>> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className={styles}>{label}</a>
    </Link>
  );
};

export { PTag };
