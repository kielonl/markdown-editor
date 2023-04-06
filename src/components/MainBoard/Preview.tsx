import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownContext } from "../../contexts/MarkdownContext";
import Typography from "../Typography";
import "./markdown-styles.css";

interface PreviewProps {
  className?: string;
}

const Preview: React.FC<PreviewProps> = ({ className }) => {
  const markdown = useContext(MarkdownContext).markdown;

  return (
    <div className={className}>
      <Typography variant="headingS" className="bg-dark-200 text-dark-500 p-2">
        PREVIEW
      </Typography>
      <div className="max-h-[85vh] break-words overflow-auto">
        <ReactMarkdown children={markdown} className={"react-markdown"} />
      </div>
    </div>
  );
};

export default Preview;
