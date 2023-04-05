import Typography from "../Typography";

interface PreviewProps {
  className?: string;
}

const Preview: React.FC<PreviewProps> = ({ className }) => {
  return (
    <div className={className}>
      <Typography variant="headingS" className="bg-dark-200 text-dark-500 p-2">
        PREVIEW
      </Typography>
      <div className="max-h-[90vh] break-words overflow-auto">
        markdown output
      </div>
    </div>
  );
};

export default Preview;
