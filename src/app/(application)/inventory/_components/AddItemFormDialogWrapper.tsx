import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type AddItemFormDialogWrapperProps = {
  isDialogOpen: boolean;
  toggleDialogAction: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
};
export default function AddItemFormDialogWrapper({
  children,
  isDialogOpen,
  toggleDialogAction,
}: AddItemFormDialogWrapperProps) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={toggleDialogAction}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
