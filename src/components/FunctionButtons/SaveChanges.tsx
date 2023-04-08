import { DocumentsUtils } from "../../utils/DocumentsUtils";
import Button from "../Button";
import Icon from "../Icon";
import Typography from "../Typography";

const SaveChanges = () => {
  const { saveChanges } = DocumentsUtils();

  return (
    <Button
      onClick={saveChanges}
      icon={<Icon.Save />}
      size={"p-2 sm:px-3 sm:py-1"}
      className="mx-2"
    >
      <Typography variant="headingM" className="hidden sm:block text-white">
        Save Changes
      </Typography>
    </Button>
  );
};

export default SaveChanges;
