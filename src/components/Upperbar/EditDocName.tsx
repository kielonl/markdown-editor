import { useContext, useState } from "react";
import { DocumentsContext } from "../../contexts/DocumentsContext";
import Icon from "../Icon";
import TextField from "../TextField";
import Typography from "../Typography";

const EditDocName = () => {
  const { changeName, documents, currentDocument } =
    useContext(DocumentsContext);
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
            value={documents[currentDocument].name}
            onChange={(e) => changeName(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => setIsEditing(false)}
          />
        ) : (
          <Typography variant="headingM" className="text-dark-100">
            {documents[currentDocument].name}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default EditDocName;
