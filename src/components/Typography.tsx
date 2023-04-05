import { twMerge } from "tailwind-merge";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
type Font = "robotoSlab" | "roboto" | "robotoMono";

interface TypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  variant?: Variant;
  fontFamily?: Font;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  fontFamily,
  className,
  children,
  ...props
}) => {
  const Component = variant || "div";

  const fontClasses: { [key in Font]: string } = {
    robotoSlab: "font-robotoSlab",
    roboto: "font-roboto",
    robotoMono: "font-robotoMono",
  };

  const font = fontClasses[fontFamily || "robotoSlab"];

  const variantClasses: { [key in Variant]: string } = {
    h1: font + "text-[32px] font-bold",
    h2: font + "text-[28px] font-light",
    h3: font + "text-[24px] font-bold",
    h4: font + "text-[20px] font-bold",
    h5: font + "text-[16px] font-bold",
    h6: font + "text-[14px] font-bold",
    div: font,
    span: font,
  };

  const classes = twMerge(variantClasses[variant || "div"], className);

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
