import { cls } from "@/app/utils/arrays";
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "cta" | "success" | "fail" | "hint";
}

const classes = {
  base: "font-sans font-semibold rounded-lg border-2 text-lg font-semibold transition-colors disabled:pointer-events-none disabled:border-gray-100",
  variant: {
    hint: "px-5 py-4 border-green-500 bg-white disabled:border-green-500",
    primary:
      "px-5 py-4 border-mb-lila bg-white md:hover:bg-mb-lila md:hover:text-white disabled:border-gray-100",
    cta: "bg-mb-pink border-mb-pink text-white px-0 py-0",
    success:
      "px-5 py-4 border-[#27CA40] bg-[#27CA40] disabled:border-[#27CA40]",
    fail: "px-5 py-4 border-[#FF261B] bg-[#FF261B] text-white disabled:border-[#FF261B]",
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
