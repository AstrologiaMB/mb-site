import { cls } from "@/app/utils/arrays";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "success" | "fail";
}

const classes = {
  base: "font-sans font-semibold rounded-lg border-2 px-5 py-4 text-lg font-semibold transition-colors disabled:pointer-events-none disabled:border-gray-100",
  variant: {
    primary:
      "border-mb-lila bg-white hover:bg-mb-lila hover:text-white disabled:border-gray-100",
    success: "border-green-500 bg-white disabled:border-green-500",
    fail: "border-red-500 bg-white text-red-500 disabled:border-red-500",
  },
};

function Button({
  children,
  onClick,
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      onClick={onClick}
      className={cls(
        `${classes.base} ${classes.variant[variant]} ${className}`,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
