import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownContext } from "../../contexts/MarkdownContext";
import Icon from "../Icon";
import Typography from "../Typography";
import "./markdown-styles.css";

interface PreviewProps {
  className?: string;
  showPreview: boolean;
  setShowPreview: (showPreview: boolean) => void;
}

const Preview: React.FC<PreviewProps> = ({
  className,
  showPreview,
  setShowPreview,
}) => {
  const markdown = useContext(MarkdownContext).markdown;

  return (
    <div className={className}>
      <Typography
        variant="headingS"
        className="bg-dark-200 text-dark-500 p-2 flex flex-row items-center justify-between"
      >
        PREVIEW
        <div onClick={() => setShowPreview(!showPreview)}>
          {!showPreview ? <Icon.showPreview /> : <Icon.hidePreview />}
        </div>
      </Typography>

      <div className="max-h-[85vh] break-words overflow-auto container mx-auto">
        <ReactMarkdown children={markdown} className={"react-markdown"} />
      </div>
    </div>
  );
};

export default Preview;
