import { twMerge } from "tailwind-merge";

interface TextFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={twMerge(
        "bg-transparent text-white border-b border-dark-200 focus:border-dark-300 focus:outline-none caret-orange",
        className
      )}
      autoFocus
    ></input>
  );
};

export default TextField;
