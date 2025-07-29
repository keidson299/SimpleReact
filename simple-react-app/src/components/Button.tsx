import React, { ReactNode } from "react";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger";
  onButtonClick: () => void;
}

const Button = ({ onButtonClick, color = "primary" }: ButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onButtonClick();
      }}
    >
      Alert Button
    </button>
  );
};

export default Button;
