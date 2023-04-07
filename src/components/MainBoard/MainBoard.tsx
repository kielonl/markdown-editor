import { useState } from "react";
import Markdown from "./Markdown";
import Preview from "./Preview";

const MainBoard = () => {
  const [showPreview, setShowPreview] = useState<boolean>(false);

  return (
    <div className="max-h-full max-w-full flex flex-row ">
      <Markdown
        className={`${showPreview ? "hidden" : "w-full sm:w-[50%]"}`}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
      <Preview
        className={`${showPreview ? "w-full " : "sm:w-[50%] hidden sm:block"}`}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
    </div>
  );
};

export default MainBoard;
