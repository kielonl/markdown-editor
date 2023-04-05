interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  icon?: JSX.Element;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  icon,
  ...props
}) => {
  return (
    <button
      {...props}
      className="bg-orange hover:bg-orange-hover px-8 py-1 rounded-[4px] flex flex-row gap-1 justify-center items-center"
    >
      {icon}
      {children}
    </button>
  );
};
export default Button;
