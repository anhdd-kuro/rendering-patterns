type Props = {
  disabled?: boolean;
  rounded?: boolean;
  bordered?: boolean;
  children?: React.ReactNode;
  onClick?: void;
};

const disabledStyles = "opacity-60 cursor-not-allowed";
const borderedStyles = "border border-gray";
const roundedStyles = "rounded";

const PButton: React.FC<Props> = ({
  children,
  disabled = false,
  bordered = false,
  rounded = false,
  onClick,
}) => {
  return (
    <button
      className={[
        "flex-center",
        `${disabled ? disabledStyles : ""}`,
        `${bordered ? borderedStyles : ""}`,
        `${rounded ? roundedStyles : ""}`,
      ].join(" ")}
      disabled={disabled}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};

export { PButton };
