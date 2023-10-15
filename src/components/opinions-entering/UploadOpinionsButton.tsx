import { read, utils } from "xlsx";
import { useOpinionsDispatch } from "../../contexts/opinions-context";
import { Alert, Button, Snackbar } from "@mui/material";
import clsx from "clsx";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import ImageDialog from "../sub-components/ImageDialog";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigationDispatch } from "../../contexts/navigation-context";
import imageUrl from "../../assets/images/opinions-excel-format.png";

const UploadOpinionsButton = () => {
  const [noOpinionRecordsError, setNoOpinionRecordsError] = useState(false);
  const [isShowExcelFileFormat, setIsShowExcelFileFormat] = useState(false);
  const opinionsDispatch = useOpinionsDispatch();
  const navDispatch = useNavigationDispatch();

  async function handleFileUpload(event: any) {
    const file = event.target.files[0];
    const ab = await file.arrayBuffer();
    const wb = read(ab);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const data: string[] = utils.sheet_to_json<string>(ws);

    const mappedObjects = data.map((obj: any, groupIndex: number) => {
      const groupTitle = obj["קבוצה"];
      delete obj["קבוצה"];

      const newObj = {
        key: groupIndex,
        title: groupTitle,
        opinions: Object.keys(obj)
          .filter((key: string) => key !== "")
          .map((key: string, opinionIndex: number) => {
            return {
              key: opinionIndex,
              text: obj[key],
              isActive: true,
            };
          }),
      };
      return newObj;
    });

    if (mappedObjects.length > 0) {
      opinionsDispatch({
        type: "upload-excel-opinion-groups",
        payload: mappedObjects,
      });

      navDispatch({
        type: "set-is-opinions-uploaded",
        payload: true,
      });
    } else {
      setNoOpinionRecordsError(true);
    }
  }

  function snackBarHandleClose(
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) {
    if (reason === "clickaway") {
      return;
    }

    setNoOpinionRecordsError(false);
  }

  function dialogHandleClose() {
    setIsShowExcelFileFormat(false);
  }

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<DescriptionIcon className={clsx("icon")} />}
        onClick={() => setIsShowExcelFileFormat(true)}
        fullWidth
        style={{ marginBlockEnd: "12px" }}
      >
        הסבר פורמט הקובץ
      </Button>

      <Button
        variant="contained"
        component="label"
        className={clsx("upload-profile-picture")}
        startIcon={<FileUploadIcon className={clsx("icon")} />}
      >
        הוספה
        <input
          type="file"
          hidden
          id="fileInput"
          accept=".xlsx"
          onChange={handleFileUpload}
        />
      </Button>

      {isShowExcelFileFormat && (
        <ImageDialog
          open={isShowExcelFileFormat}
          onClose={dialogHandleClose}
          imgSrc={imageUrl}
          imgAlt="Poster Excel File Format"
        />
      )}

      {noOpinionRecordsError && (
        <Snackbar
          open={noOpinionRecordsError}
          autoHideDuration={6000}
          onClose={snackBarHandleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          key={"bottom" + "center"}
          message="לא נמצאו דעות בקובץ"
        >
          <Alert
            onClose={snackBarHandleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            לא נמצאו דעות בקובץ. שימ/י לב לפורמט
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default UploadOpinionsButton;
