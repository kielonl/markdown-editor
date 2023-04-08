import * as AlertDialog from "@radix-ui/react-alert-dialog";

interface PopupProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  titleText?: React.ReactNode;
  confirm?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
  trigger,
  children,
  titleText,
  confirm,
}) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{trigger}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-dark-overlay data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[350px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-dark-900  p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <AlertDialog.Title asChild>
            <h4 className="font-robotoSlab font-bold text-[20px] text-dark-700 dark:text-dark-100">
              {titleText}
            </h4>
          </AlertDialog.Title>
          <AlertDialog.Description className="font-robotoSlab text-[14px] text-dark-500 my-2">
            {children}
          </AlertDialog.Description>
          <AlertDialog.Action asChild>{confirm}</AlertDialog.Action>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Popup;
