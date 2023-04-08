import { DocumentsUtils } from "../../utils/DocumentsUtils";
import Icon from "../Icon";
import Popup from "../Popup";
import Typography from "../Typography";

const DeleteDocument = () => {
  const { deleteDocument, document } = DocumentsUtils();
  return (
    <Popup
      trigger={<Icon.Delete />}
      titleText={"Delete this document?"}
      confirm={
        <button
          onClick={deleteDocument}
          className="bg-orange hover:bg-orange-hover px-8 py-1 w-full rounded-[4px] text-dark-100"
        >
          <Typography variant="headingM">{"Confirm & delete"}</Typography>
        </button>
      }
    >
      Are you sure you want to delete the '{document.name}' document and its
      contents? This action cannot be reversed.
    </Popup>
  );
};

export default DeleteDocument;
