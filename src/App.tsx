import MainBoard from "./components/MainBoard/MainBoard";
import UpperBar from "./components/Upperbar/UpperBar";
import MarkdownContextProvider from "./contexts/MarkdownContextProvider";

const App = () => {
  return (
    <MarkdownContextProvider>
      <div className="h-full w-full">
        <UpperBar />
        <MainBoard />
      </div>
    </MarkdownContextProvider>
  );
};

export default App;
