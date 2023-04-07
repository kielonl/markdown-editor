import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { DocumentsContext } from "../../contexts/DocumentsContext";
import NewDocument from "../FunctionButtons/NewDocument";
import Icon from "../Icon";
import ThemeToggler from "../ThemeToggler";
import Typography from "../Typography";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { documents, setCurrentDocument } = useContext(DocumentsContext);

  const allDocuments = documents.map((document, index) => {
    return (
      <div
        key={index}
        onClick={() => setCurrentDocument(index)}
        className="flex flex-row items-center p-2 cursor-pointer"
      >
        <Icon.Document className="mr-2" />
        <div className="flex-1">{document.name}</div>
      </div>
    );
  });

  return (
    <>
      <div
        className={twMerge(
          "h-full w-52 fixed top-0 left-0 overflow-x-hidden right-[25px] transition-[margin-left] duration-500 bg-dark-900 text-white",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <Icon.Logo className="m-6" />
          <Typography variant="headingS" className="text-dark-500 mx-6 my-2">
            MY DOCUMENTS
          </Typography>
          <NewDocument />
          {allDocuments}
          <div className="flex-1"></div>
          <ThemeToggler />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
