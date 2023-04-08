import { useState } from "react";
import { DocumentsUtils } from "../../utils/DocumentsUtils";
import Icon from "../Icon";
import TextField from "../TextField";
import Typography from "../Typography";

const EditDocName = () => {
  const { renameDocument, document } = DocumentsUtils();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-row items-center gap-2 m-2">
      <Icon.Document />

      <div className="flex flex-col " onClick={() => setIsEditing(true)}>
        <Typography variant="bodyS" className="text-dark-500 hidden sm:block">
          Document name
        </Typography>
        {isEditing ? (
          <TextField
            value={document.name}
            onChange={(e) => renameDocument(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => setIsEditing(false)}
          />
        ) : (
          <Typography variant="headingM" className="text-dark-100">
            {document.name}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default EditDocName;
