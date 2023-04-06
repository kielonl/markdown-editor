import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { MarkdownContext } from "../../contexts/MarkdownContext";
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
  const { markdown, setMarkdown } = useContext(MarkdownContext);

  return (
    <div className={twMerge(className, "border-r-2 border-dark-300")}>
      <Typography
        variant="headingS"
        className="bg-dark-200 text-dark-500 p-2 flex flex-row items-center justify-between"
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
        onChange={(e) => setMarkdown(e.target.value)}
        value={markdown}
        className="min-h-[85vh] w-full p-2 resize-none focus:outline-none "
      />
    </div>
  );
};

export default Markdown;
