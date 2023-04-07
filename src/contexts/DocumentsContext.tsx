import { createContext } from "react";

interface DocumentsContextType {
  documents: { name: string; content: string }[];
  setDocuments: (documents: { name: string; content: string }[]) => void;
  currentDocument: number;
  setCurrentDocument: (currentDocument: number) => void;
  newDocument: () => void;
  deleteDocument: () => void;
  changeName: (name: string) => void;
  changeContent: (content: string) => void;
  saveChanges: () => void;
}

export const DocumentsContext = createContext<DocumentsContextType>({
  documents: [],
  setDocuments: () => {},
  currentDocument: 0,
  newDocument: () => {},
  deleteDocument: () => {},
  setCurrentDocument: () => {},
  changeName: () => {},
  changeContent: () => {},
  saveChanges: () => {},
});
