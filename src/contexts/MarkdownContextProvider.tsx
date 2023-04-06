import React, { useState } from "react";
import { MarkdownContext } from "./MarkdownContext";

interface MarkdownContextProviderProps {
  children: React.ReactNode;
}

const MarkdownContextProvider: React.FC<MarkdownContextProviderProps> = ({
  children,
}) => {
  const [markdown, setMarkdown] = useState("");
  const value = { markdown, setMarkdown };

  return (
    <MarkdownContext.Provider value={value}>
      {children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownContextProvider;
