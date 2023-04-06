import { useState } from "react";
import MainBoard from "./components/MainBoard/MainBoard";
import Sidebar from "./components/Sidebar/Sidebar";
import UpperBar from "./components/Upperbar/UpperBar";
import MarkdownContextProvider from "./contexts/MarkdownContextProvider";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const App = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  return (
    <ThemeContextProvider>
      <MarkdownContextProvider>
        <div className="h-full w-full dark:bg-dark-1000">
          <Sidebar className={`${!showSidebar && "-ml-52"}`} />
          <div
            className={`${
              showSidebar && "ml-52"
            } transition-margin-left duration-500`}
          >
            <UpperBar
              toggleSidebar={() => setShowSidebar(!showSidebar)}
              showSidebar={showSidebar}
            />
            <MainBoard />
          </div>
        </div>
      </MarkdownContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
