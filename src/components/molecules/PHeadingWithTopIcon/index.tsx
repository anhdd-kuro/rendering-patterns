import { PHeading } from "@/components/atoms";
import { Style } from "@/helpers";
import DefaultIcon from "@/public/icon-title.png";

type Props = React.ComponentProps<typeof PHeading> & {
  icon?: string;
  align?: "left" | "center" | "right";
};

export const PHeadingWithTopIcon: React.FC<Props> = ({ icon, align = "center", ...props }) => {
  return (
    <div
      className={Style.clsx("pt-16 bg-top bg-no-repeat", `bg-top-${align} text-${align}`)}
      style={{
        backgroundImage: `url(${icon || DefaultIcon.src})`,
      }}
    >
      <PHeading {...props} />
    </div>
  );
};
