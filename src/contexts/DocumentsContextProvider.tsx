import { useState } from "react";
import { load } from "../services/storageManager";
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

  return (
    <DocumentsContext.Provider
      value={{
        documents,
        setDocuments,
        currentDocument,
        setCurrentDocument,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};

export default DocumentsContextProvider;
