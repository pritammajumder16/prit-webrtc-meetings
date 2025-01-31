import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-md focus:outline-none  transition duration-150";

  const variantStyles = {
    primary:
      "flex cursor-pointer disabled:cursor-not-allowed items-center gap-2 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 dark:text-white disabled:bg-gray-100 disabled:hover:bg-gray-100  disabled:dark:hover:bg-gray-500 disabled:dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-800",
    secondary:
      "bg-gray-500 dark:bg-gray-700 text-white hover:bg-gray-600 dark:hover:bg-gray-800 ",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
