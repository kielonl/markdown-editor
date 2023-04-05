import { useState } from "react";
import Icon from "../Icon";
import TextField from "../TextField";
import Typography from "../Typography";

const EditDocName = () => {
  const [documentName, setDocumentName] = useState<string>("Document name");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <Icon.Document />

      <div className="flex flex-col" onClick={() => setIsEditing(true)}>
        <Typography variant="bodyS" className="text-dark-500">
          Document name
        </Typography>
        {isEditing ? (
          <TextField
            value={documentName}
            onChange={handleNameChange}
            onKeyDown={handleKeyDown}
            onBlur={() => setIsEditing(false)}
          />
        ) : (
          <Typography variant="headingM" className="text-dark-100">
            {documentName}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default EditDocName;
