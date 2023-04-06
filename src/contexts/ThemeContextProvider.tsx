import { useEffect, useState } from "react";
import { load, save } from "../services/storageManager";
import { ThemeContext } from "./ThemeContext";

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const storageTheme = load("theme") as string;
  const [theme, setTheme] = useState(storageTheme || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
    save("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
