import { TwBackgroundColorClass } from "@/tailwind.types";
import { Style } from "@/helpers";

type Props = {
  disabled?: boolean;
  rounded?: boolean;
  bordered?: boolean;
  children?: React.ReactNode;
  backgroundColorClass?: TwBackgroundColorClass;
  onClick?: void;
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
  backgroundColorClass,
}) => {
  return (
    <button
      className={Style.joinClass([
        "flex-center",
        `${disabled && disabledStyles}`,
        `${bordered && borderedStyles}`,
        `${rounded && roundedStyles}`,
        backgroundColorClass,
      ])}
      disabled={disabled}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};

export { PButton };
