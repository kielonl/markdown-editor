import classNames from "classnames";
import { useState } from "react";
import MainBoard from "./components/MainBoard/MainBoard";
import Sidebar from "./components/Sidebar/Sidebar";
import UpperBar from "./components/Upperbar/UpperBar";
import DocumentsContextProvider from "./contexts/DocumentsContextProvider";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const App = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <ThemeContextProvider>
      <DocumentsContextProvider>
        <div className="h-full w-full dark:bg-dark-1000">
          <Sidebar className={classNames({ "-ml-52": !showSidebar })} />
          <div
            className={classNames("transition-margin-left duration-500", {
              "ml-52": showSidebar,
            })}
          >
            <UpperBar
              toggleSidebar={() => setShowSidebar(!showSidebar)}
              showSidebar={showSidebar}
            />
            <MainBoard />
          </div>
        </div>
      </DocumentsContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
