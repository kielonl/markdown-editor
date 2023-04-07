import classNames from "classnames";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownContext } from "../../contexts/MarkdownContext";
import { ThemeContext } from "../../contexts/ThemeContext";
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
  const { theme } = useContext(ThemeContext);

  return (
    <div className={className}>
      <Typography
        variant="headingS"
        className="bg-dark-200 text-dark-500 dark:bg-dark-900 h-[4vh] p-2 flex flex-row items-center justify-between"
      >
        PREVIEW
        <div onClick={() => setShowPreview(!showPreview)}>
          {!showPreview ? <Icon.showPreview /> : <Icon.hidePreview />}
        </div>
      </Typography>

      <div className="min-h-[90vh] h-full break-words overflow-auto container mx-auto dark:bg-dark-1000">
        <ReactMarkdown
          children={markdown}
          className={classNames("react-markdown", {
            "react-markdown-dark": theme === "dark",
          })}
        />
      </div>
    </div>
  );
};

export default Preview;
