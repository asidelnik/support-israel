import c from "../../styles/DownloadButton.module.scss";
import { useState } from "react";
import {
  downloadCoverPicture,
  downloadProfilePicture,
} from "../../functions/download-functions";
import DownloadIcon from "@mui/icons-material/Download";
import { Button, Checkbox, Link } from "@mui/material";
import clsx from "clsx";
import { EditMenuParent } from "../../interfaces/enums";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAFieldTouched, setEditPanelActiveTab, setIsShowTermsOfService } from "../../redux/navigation-slice";

type DownloadButtonProps = {
  parent: EditMenuParent;
};

export default function DownloadButton({ parent }: DownloadButtonProps) {
  const [isTermsApproved, setIsTermsApproved] = useState(false);
  const { aFieldTouched } = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch();
  const termsLabel = { inputProps: { "aria-label": "הסכמה לתנאי השימוש" } };

  function downloadHandler() {
    if (!aFieldTouched) {
      dispatch(setAFieldTouched(true));
    }

    if (parent === EditMenuParent.Profile) {
      downloadProfilePicture();
    } else if (parent === EditMenuParent.Cover) {
      downloadCoverPicture();
    }
  }

  function updateTerms(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setEditPanelActiveTab(parent === EditMenuParent.Cover ? 0 : 1));

    if (event.target.checked !== isTermsApproved) {
      setIsTermsApproved(event.target.checked);
    }
  }

  return (
    <>
      <p className={c.terms}>
        <Checkbox
          {...termsLabel}
          onChange={updateTerms}
        />
        <span>אני מסכים&nbsp;</span>
        <span>
          <Link onClick={() => dispatch(setIsShowTermsOfService(true))}>
            לתנאי השימוש
          </Link>
        </span>
        <span>&nbsp;של האתר</span>
      </p>

      <Button
        variant="contained"
        className={clsx(c.button)}
        startIcon={<DownloadIcon className={clsx(c.icon)} />}
        disabled={!isTermsApproved}
        onClick={downloadHandler}
        fullWidth
      >
        הורדה
      </Button>
    </>
  );
}
