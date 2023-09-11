import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Button({ children }: Props) {
  return (
    <button
      className="bg-mb-pink w-60 rounded-lg px-7 py-4 text-lg font-semibold transition-colors hover:bg-white hover:text-black"
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
