import Typography from "../Typography";

interface MarkdownProps {
  className?: string;
}

const Markdown: React.FC<MarkdownProps> = ({ className }) => {
  return (
    <div className={className}>
      <Typography variant="headingS" className="bg-dark-200 text-dark-500 p-2">
        MARKDOWN
      </Typography>
      <textarea className="min-h-[90vh] w-full p-2 resize-none focus:outline-none ">
        markdown input
      </textarea>
    </div>
  );
};

export default Markdown;
