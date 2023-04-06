import { twMerge } from "tailwind-merge";
import Icon from "../Icon";
import ThemeToggler from "../ThemeToggler";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <>
      <div
        className={twMerge(
          "h-full w-52 fixed top-0 left-0 overflow-x-hidden right-[25px] transition-[margin-left] duration-500 bg-dark-900 text-white",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <Icon.Logo className="m-6" />
          <div className="flex-1"></div>
          <ThemeToggler />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
