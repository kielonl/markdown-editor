import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Icon from "./Icon";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-row  items-center gap-2 m-2">
      <Icon.DarkMode color={`${theme === "dark" ? "white" : ""}`} />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-dark-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-[21px]  after:content-[''] after:absolute after:top-[5.5px] after:left-[5px] after:bg-dark-100 after:border-gray-300 after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
      </label>
      <Icon.LightMode color={`${theme === "light" ? "white" : ""}`} />
    </div>
  );
};

export default ThemeToggler;
