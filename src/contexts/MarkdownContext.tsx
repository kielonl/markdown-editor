import { createContext } from "react";

interface MarkdownContextType {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

export const MarkdownContext = createContext<MarkdownContextType>({
  markdown: "",
  setMarkdown: () => {},
});
