import c from "../../styles/PosterPage.module.scss";
import { Button, Checkbox, Link } from "@mui/material";
import PosterColorThemeSelect from "../sub-components/PosterColorThemeSelect";
import DownloadIcon from "@mui/icons-material/Download";
import FontSizeSliderPoster from "../sub-components/FontSizeSliderPoster";
import clsx from "clsx";
import { downloadPosterImage } from "../../functions/download-functions";
import UploadOpinionsButton from "../opinions-entering/UploadOpinionsButton";
import { useState } from "react";
import { useNavigationDispatch } from "../../contexts/navigation-context";

export default function PosterEditPanel() {
  const [isTermsApproved, setIsTermsApproved] = useState(false);
  const navDispatch = useNavigationDispatch();
  const label = { inputProps: { "aria-label": "הסכמה לתנאי השימוש" } };

  function updateTerms(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked !== isTermsApproved) {
      setIsTermsApproved(event.target.checked);
    }
  }
  return (
    <>
      <nav className={c.editPanel}>
        <div className={c.fieldContainer}>
          <label className={c.label}>הוספת דעות מקובץ אקסל</label>
          <UploadOpinionsButton />
        </div>

        <div className={c.fieldContainer}>
          <label className={c.label}>סגנון</label>
          <PosterColorThemeSelect />
        </div>

        <div className={c.fieldContainer}>
          <label className={c.label}>גודל הטקסט</label>
          <FontSizeSliderPoster />
        </div>

        <div className={c.fieldContainer}>
          <label className={c.label}>הורדת כרזת דעות</label>

          <p className={c.terms}>
            <Checkbox
              {...label}
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
            startIcon={<DownloadIcon className={clsx("icon")} />}
            className={clsx(c.iconButton)}
            disabled={!isTermsApproved}
            onClick={downloadPosterImage}
            fullWidth
          >
            הורדה
          </Button>
        </div>
      </nav>
    </>
  );
}
