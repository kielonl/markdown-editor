import Button from "../Button";
import EditDocName from "./EditDocName";
import Icon from "../Icon";
import Typography from "../Typography";
import { twMerge } from "tailwind-merge";

interface UpperBarProps {
  className?: string;
}

const UpperBar: React.FC<UpperBarProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-full h-20 bg-dark-800 flex flex-row items-center gap-2",
        className
      )}
    >
      <Typography
        variant="headingM"
        className="text-white text-[15px] tracking-[5px] font-bold px-4"
      >
        MARKDOWN
      </Typography>
      <EditDocName />
      <div className="flex-1"></div>
      <Icon.Delete />
      <Button icon={<Icon.Save />} size={"px-3 py-1"}>
        Save Changes
      </Button>
    </div>
  );
};

export default UpperBar;
