import clsx from "clsx";
import { tv } from "tailwind-variants";
import { forwardRef, HTMLAttributes } from "react";

const styles = tv({
  base: "flex justify-center items-center cursor-pointer transition-all duration-150",
  variants: {
    variant: {
      primary: "bg-[#3692FF] text-white hover:bg-blue-500",
      outlined: "bg-white text-gray600 border border-gray200 hover:bg-gray100",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md", // 6px
      lg: "rounded-lg", // 8px
      full: "rounded-full",
    },
    size: {
      sm: "w-10 h-10",
      md: "px-[23px] h-[42px]",
      lg: "px-[23px]  h-12",
      full: "w-full h-14",
    },
  },
});

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "chidren" | "onClick"> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  radius?: "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg" | "full";
  variant?: "primary" | "outlined";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    disabled = false,
    radius = "lg",
    size = "md",
    variant = "primary",
    onClick,
    ...rest
  },
  ref,
) {
  const classes = styles({
    variant,
    radius,
    size,
  });

  return (
    <button
      ref={ref}
      className={clsx(classes, className)}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
