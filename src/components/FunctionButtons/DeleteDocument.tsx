import { useContext } from "react";
import { DocumentsContext } from "../../contexts/DocumentsContext";
import Icon from "../Icon";

const DeleteDocument = () => {
  const { deleteDocument } = useContext(DocumentsContext);
  return (
    <div onClick={() => deleteDocument()}>
      <Icon.Delete />
    </div>
  );
};

export default DeleteDocument;
