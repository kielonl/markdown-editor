import MainBoard from "./components/MainBoard/MainBoard";
import UpperBar from "./components/Upperbar/UpperBar";

const App = () => {
  return (
    <div className="h-full w-full">
      <UpperBar />
      <MainBoard />
    </div>
  );
};

export default App;
