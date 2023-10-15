import { Dialog, IconButton } from "@mui/material";
import { TextDialogProps } from "../../interfaces/interfaces";
import CloseIcon from "@mui/icons-material/Close";
import classes from "../../styles/TextDialog.module.scss";

export default function TextDialog({ open, onClose, child }: TextDialogProps) {
  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="md"
    >
      <div className={classes.textDialogContainer}>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        {child}
      </div>
    </Dialog>
  );
}
