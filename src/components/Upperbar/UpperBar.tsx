import Button from "../Button";
import EditDocName from "./EditDocName";
import Icon from "../Icon";
import Typography from "../Typography";
import SidebarIcon from "../Sidebar/SidebarIcon";

interface UpperBarProps {
  toggleSidebar: () => void;
  showSidebar: boolean;
}

const UpperBar: React.FC<UpperBarProps> = ({ toggleSidebar, showSidebar }) => {
  return (
    <div className="w-full h-[6vh] bg-dark-800 flex flex-row items-center gap-2">
      <SidebarIcon
        className="px-4 bg-dark-700"
        onClick={toggleSidebar}
        active={showSidebar}
      />
      <Icon.Logo
        className={`mx-4 hidden sm:block ${showSidebar && "sm:hidden"}`}
      />
      <EditDocName />
      <div className="flex-1"></div>
      <Icon.Delete />
      <Button
        icon={<Icon.Save />}
        size={"p-2 sm:px-3 sm:py-1"}
        className="mx-2"
      >
        <Typography variant="headingM" className="hidden sm:block text-white">
          Save Changes
        </Typography>
      </Button>
    </div>
  );
};

export default UpperBar;
