import { twMerge } from "tailwind-merge";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  icon?: JSX.Element;
  size?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  icon,
  size = "px-8 py-1",
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        `bg-orange hover:bg-orange-hover ${size} rounded-[4px] flex flex-row gap-1 justify-center items-center`,
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
};
export default Button;
