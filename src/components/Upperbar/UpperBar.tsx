import EditDocName from "./EditDocName";
import Icon from "../Icon";
import SidebarIcon from "../Sidebar/SidebarIcon";
import SaveChanges from "../FunctionButtons/SaveChanges";
import DeleteDocument from "../FunctionButtons/DeleteDocument";

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
      <DeleteDocument />
      <SaveChanges />
    </div>
  );
};

export default UpperBar;
