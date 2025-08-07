import styles from "./Button.module.css";

interface ButtonProps {
  color?: "primary" | "secondary" | "danger";
  onButtonClick: () => void;
}

const Button = ({ onButtonClick, color = "primary" }: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={() => {
        onButtonClick();
      }}
    >
      ALERT BUTTON
    </button>
  );
};

export default Button;
