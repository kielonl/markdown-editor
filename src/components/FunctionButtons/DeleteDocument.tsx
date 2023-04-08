import { DocumentsUtils } from "../../utils/DocumentsUtils";
import Icon from "../Icon";

const DeleteDocument = () => {
  const { deleteDocument } = DocumentsUtils();
  return (
    <div onClick={deleteDocument}>
      <Icon.Delete />
    </div>
  );
};

export default DeleteDocument;
