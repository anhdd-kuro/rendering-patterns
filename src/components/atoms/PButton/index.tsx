import { BackgroundClass } from "tailwind.types";
import { Style } from "@/helpers";

type Props = {
  disabled?: boolean;
  rounded?: boolean;
  bordered?: boolean;
  children?: React.ReactNode;
  onClick?: void;
  bgClass?: BackgroundClass;
};

const disabledStyles = "opacity-60 cursor-not-allowed";
const borderedStyles = "border border-gray-300";
const roundedStyles = "rounded";

const PButton: React.FC<Props> = ({
  children,
  disabled = false,
  bordered = true,
  rounded = false,
  onClick,
  bgClass,
}) => {
  return (
    <button
      className={Style.joinClass([
        "flex-center",
        `${disabled && disabledStyles}`,
        `${bordered && borderedStyles}`,
        `${rounded && roundedStyles}`,
        bgClass,
      ])}
      disabled={disabled}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};

export { PButton };
