import { createContext } from "react";

interface DocumentsContextType {
  documents: { name: string; content: string }[];
  setDocuments: (documents: { name: string; content: string }[]) => void;
  currentDocument: number;
  setCurrentDocument: (currentDocument: number) => void;
}

export const DocumentsContext = createContext<DocumentsContextType>({
  documents: [],
  setDocuments: () => {},
  currentDocument: 0,
  setCurrentDocument: () => {},
});
