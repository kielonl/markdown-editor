import { useState } from "react";
import { load, save } from "../services/storageManager";
import { DocumentsContext } from "./DocumentsContext";

interface DocumentsContextProviderProps {
  children: React.ReactNode;
}

const DocumentsContextProvider: React.FC<DocumentsContextProviderProps> = ({
  children,
}) => {
  const localDocuments = load("documents") || [
    {
      name: "New Document",
      content: "",
    },
  ];

  const [documents, setDocuments] =
    useState<{ name: string; content: string }[]>(localDocuments);

  const [currentDocument, setCurrentDocument] = useState<number>(0);

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

  const changeName = (name: string) => {
    const newDocuments = [...documents];
    newDocuments[currentDocument].name = name;
    setDocuments(newDocuments);
  };

  const changeContent = (content: string) => {
    const newDocuments = [...documents];
    newDocuments[currentDocument].content = content;
    setDocuments(newDocuments);
  };

  const saveChanges = () => {
    save("documents", documents);
  };

  return (
    <DocumentsContext.Provider
      value={{
        documents,
        setDocuments,
        currentDocument,
        newDocument,
        deleteDocument,
        setCurrentDocument,
        changeName,
        changeContent,
        saveChanges,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};

export default DocumentsContextProvider;
