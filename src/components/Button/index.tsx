import React, { ButtonHTMLAttributes, MouseEvent } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  iconImg?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = "primary",
  disabled = false,
  iconImg,
  children,
  ...rest
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick && !disabled) {
      onClick(event);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`button ${variant} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      {...rest}
    >
      {iconImg && <img className="button-img-icon" src={iconImg} />}
      {children}
    </button>
  );
};

export default Button;
