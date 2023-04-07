import { useContext } from "react";
import { DocumentsContext } from "../../contexts/DocumentsContext";
import Button from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

const newDocument = () => {
  const { newDocument } = useContext(DocumentsContext);

  return (
    <Button
      onClick={newDocument}
      icon={<Icon.Document />}
      size={"p-2 sm:px-3 sm:py-1"}
      className="mx-2"
    >
      <Typography variant="headingM" className="hidden sm:block text-white">
        New Document
      </Typography>
    </Button>
  );
};

export default newDocument;
