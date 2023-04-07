import classNames from "classnames";
import { useState } from "react";
import Markdown from "./Markdown";
import Preview from "./Preview";

const MainBoard = () => {
  const [showPreview, setShowPreview] = useState<boolean>(false);

  return (
    <div className="max-h-full max-w-full flex flex-row ">
      <Markdown
        className={classNames("w-full sm:w-[50%]", {
          hidden: showPreview,
        })}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
      <Preview
        className={classNames("w-full sm:w-[50%]", {
          hidden: !showPreview,
        })}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
    </div>
  );
};

export default MainBoard;
