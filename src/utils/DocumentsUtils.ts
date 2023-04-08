import { useContext } from "react";
import { DocumentsContext } from "../contexts/DocumentsContext";
import { save } from "../services/storageManager";

export const DocumentsUtils = () => {
  const { documents, setDocuments, currentDocument, setCurrentDocument } =
    useContext(DocumentsContext);

  const currentDocumentName = documents[currentDocument].name;
  const currentDocumentContent = documents[currentDocument].content;

  const saveChanges = () => {
    save("documents", documents);
  };

  const newDocument = () => {
    const newDocuments = [...documents];
    newDocuments.push({
      name: "New Document",
      content: "",
    });
    setDocuments(newDocuments);
    setCurrentDocument(newDocuments.length - 1);
    saveChanges();
  };

  const deleteDocument = () => {
    const newDocuments = [...documents];
    newDocuments.splice(currentDocument, 1);

    if (!newDocuments.length) {
      newDocuments.push({
        name: "New Document",
        content: "",
      });
    }
    setDocuments(newDocuments);

    setCurrentDocument(0);
  };

  const renameDocument = (name: string) => {
    const newDocuments = [...documents];
    newDocuments[currentDocument].name = name;
    setDocuments(newDocuments);
  };

  const updateDocument = (content: string) => {
    const newDocuments = [...documents];
    newDocuments[currentDocument].content = content;
    setDocuments(newDocuments);
  };

  return {
    newDocument,
    deleteDocument,
    renameDocument,
    updateDocument,
    saveChanges,
    document: { name: currentDocumentName, content: currentDocumentContent },
  };
};
