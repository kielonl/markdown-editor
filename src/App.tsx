import MainBoard from "./components/MainBoard/MainBoard";
import UpperBar from "./components/Upperbar/UpperBar";
import MarkdownContextProvider from "./contexts/MarkdownContextProvider";
import ThemeContextProvider from "./contexts/ThemeContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <MarkdownContextProvider>
        <div className="h-full w-full dark:bg-dark-1000">
          <UpperBar />
          <MainBoard />
        </div>
      </MarkdownContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
