import c from "../../styles/DownloadButton.module.scss";
import { useState } from "react";
import {
  downloadCoverPicture,
  downloadProfilePicture,
} from "../../functions/download-functions";
import DownloadIcon from "@mui/icons-material/Download";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";
import { Button, Checkbox, Link } from "@mui/material";
import clsx from "clsx";
import { EditMenuParent } from "../../interfaces/enums";

type DownloadButtonProps = {
  parent: EditMenuParent;
};

export default function DownloadButton({ parent }: DownloadButtonProps) {
  const [isTermsApproved, setIsTermsApproved] = useState(false);
  const navDispatch = useNavigationDispatch();
  const nav = useNavigation();
  const termsLabel = { inputProps: { "aria-label": "הסכמה לתנאי השימוש" } };

  function downloadHandler() {
    if (!nav.aFieldTouched) {
      navDispatch({ type: "set-a-field-touched", payload: true });
    }

    if (parent === EditMenuParent.Profile) {
      downloadProfilePicture();
    } else if (parent === EditMenuParent.Cover) {
      downloadCoverPicture();
    }
  }

  function updateTerms(event: React.ChangeEvent<HTMLInputElement>) {
    navDispatch({
      type: "set-edit-panel-active-tab",
      payload: parent === EditMenuParent.Cover ? 0 : 1,
    });

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
          <Link
            onClick={() =>
              navDispatch({
                type: "set-is-show-terms-of-service",
                payload: true,
              })
            }
          >
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
