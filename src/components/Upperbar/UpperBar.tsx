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
      <Icon.Logo className="mx-4 hidden sm:block" />
      <EditDocName />
      <div className="flex-1"></div>
      <Icon.Delete />
      <Button
        icon={<Icon.Save />}
        size={"p-2 sm:px-3 sm:py-1"}
        className="mx-2"
      >
        <div className="hidden sm:block">Save Changes</div>
      </Button>
    </div>
  );
};

export default UpperBar;
