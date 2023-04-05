import Markdown from "./Markdown";
import Preview from "./Preview";

const MainBoard = () => {
  return (
    <div className="max-h-full max-w-full  flex flex-row ">
      <Markdown className="w-[50%]" />
      <Preview className="w-[50%]" />
    </div>
  );
};

export default MainBoard;
