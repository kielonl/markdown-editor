import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { MarkdownContext } from "../../contexts/MarkdownContext";
import Typography from "../Typography";

interface MarkdownProps {
  className?: string;
}

const Markdown: React.FC<MarkdownProps> = ({ className }) => {
  const { markdown, setMarkdown } = useContext(MarkdownContext);

  return (
    <div
      className={twMerge(className, "border-r-2 border-b-2 border-dark-300")}
    >
      <Typography variant="headingS" className="bg-dark-200 text-dark-500 p-2">
        MARKDOWN
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
