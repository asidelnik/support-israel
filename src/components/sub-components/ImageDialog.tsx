import { Dialog, IconButton } from "@mui/material";
import { ImageDialogProps } from "../../interfaces/interfaces";
import CloseIcon from "@mui/icons-material/Close";

export default function ImageDialog({
  open,
  onClose,
  imgSrc,
  imgAlt,
}: ImageDialogProps) {
  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="md"
    >
      <div className="opinions-excel-format-container">
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
        <h3>פורמט קובץ אקסל שצריך להזין כדי לקבל כרזת דעות</h3>
        <img
          src={imgSrc}
          alt={imgAlt}
        />
        <div className="list-container">
          <ul>
            <li>השורה הראשונה ריקה חוץ מהתא הראשון שמכיל את המלל ״קבוצה״</li>
            <li>כל שורה היא קבוצה של דעות</li>
            <li>התא הראשון בכל שורה מכיל את שם הקבוצה</li>
            <li>כל התאים הבאים מכילים דעה יחידה</li>
            <li>ניתן להוסיף כמה קבוצות וכמה דעות שרוצים</li>
          </ul>
        </div>
      </div>
    </Dialog>
  );
}
