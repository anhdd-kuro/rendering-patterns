import { TwBackgroundColorClass } from "@/tailwind.types";
import { Style } from "@/helpers";

type Props = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  rounded?: boolean;
  bordered?: boolean;
  children?: React.ReactNode;
  backgroundColorClass?: TwBackgroundColorClass;
  onClick?: () => void;
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
  type = "button",
  backgroundColorClass,
}) => {
  return (
    <button
      className={Style.clsx(
        "flex-center",
        `${disabled && disabledStyles}`,
        `${bordered && borderedStyles}`,
        `${rounded && roundedStyles}`,
        backgroundColorClass,
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { PButton };
