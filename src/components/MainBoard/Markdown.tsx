import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { DocumentsContext } from "../../contexts/DocumentsContext";
import Icon from "../Icon";
import Typography from "../Typography";

interface MarkdownProps {
  className?: string;
  showPreview: boolean;
  setShowPreview: (showPreview: boolean) => void;
}

const Markdown: React.FC<MarkdownProps> = ({
  className,
  showPreview,
  setShowPreview,
}) => {
  const { documents, currentDocument, changeContent } =
    useContext(DocumentsContext);

  const documentContent = documents[currentDocument].content;

  return (
    <div
      className={twMerge(
        className,
        "border-r-2 border-dark-300 dark:border-dark-600"
      )}
    >
      <Typography
        variant="headingS"
        className="bg-dark-200 text-dark-500 dark:bg-dark-900 h-[4vh] p-2 flex flex-row items-center justify-between"
      >
        MARKDOWN
        <div
          onClick={() => setShowPreview(!showPreview)}
          className="block sm:hidden"
        >
          {!showPreview ? <Icon.showPreview /> : <Icon.hidePreview />}
        </div>
      </Typography>

      <textarea
        onChange={(e) => changeContent(e.target.value)}
        value={documentContent}
        className="min-h-[90vh] w-full p-2 resize-none focus:outline-none dark:bg-dark-1000 dark:text-white"
      />
    </div>
  );
};

export default Markdown;
