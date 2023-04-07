import { twMerge } from "tailwind-merge";
import "./SidebarIcon.css";

interface SidebarIconProps {
  className?: string;
  onClick?: () => void;
  active: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({
  className,
  onClick,
  active,
}) => {
  return (
    <>
      <div
        onClick={() => onClick && onClick()}
        className={twMerge("hamburger", className, active && "active")}
        id="hamburger-1"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </>
  );
};

export default SidebarIcon;
