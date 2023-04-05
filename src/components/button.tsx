import { ReactNode } from "react";
type ButtonColorType = "red" | "green" | "yellow";

type ButtonProps = {
  animate?: boolean;
  value?: string;
  icon?: ReactNode;
  color?: ButtonColorType;
};

const Button = ({
  animate,
  value = "TEXT",
  icon,
  color = "red",
}: ButtonProps) => {
  const colorSwitcher = (color: ButtonColorType) => {
    switch (color) {
      case "red":
        return "btn--red";
      case "green":
        return "btn--green";
      case "yellow":
        return "btn--yellow";
      default:
        return "btn-yellow";
    }
  };
  return (
    <div className="btn__wrapper">
      <button
        className={`btn ${colorSwitcher(color)} ${
          animate ? "btn--animate" : ""
        }`}
      >
        {value}
        <span>{icon}</span>
      </button>
    </div>
  );
};
export default Button;
