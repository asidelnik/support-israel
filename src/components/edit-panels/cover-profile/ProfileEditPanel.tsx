import c from "../../../styles/EditPanel.module.scss";
import { Button, Switch, TextField, useMediaQuery } from "@mui/material";
import clsx from "clsx";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import {
  useOpinions,
  useOpinionsDispatch,
} from "../../../contexts/opinions-context";
import FontSizeSlider from "../../sub-components/FontSizeSlider";
import { EditMenuParent } from "../../../interfaces/enums";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../../contexts/navigation-context";
import ProfileColorInput from "../../sub-components/ProfileColorInput";
import DownloadButton from "../../sub-components/DownloadButton";
import HideDownButton from "../../sub-components/HideDownButton";

export default function ProfileEditPanel() {
  const opinionsDispatch = useOpinionsDispatch();
  const opinion = useOpinions();
  const navDispatch = useNavigationDispatch();
  const nav = useNavigation();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const advancedEdtiLabel = { inputProps: { "aria-label": "עריכה מתקדמת" } };

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
      opinionsDispatch({
        type: "upload-profile-image",
        payload: e.target?.result as string,
      });
    };
    reader.readAsDataURL(file as Blob);

    if (!nav.aFieldTouched)
      navDispatch({ type: "set-a-field-touched", payload: true });
  }

  function profileTextChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    opinionsDispatch({
      type: "update-profile-opinion",
      payload: event.target?.value as string,
    });

    if (!nav.aFieldTouched)
      navDispatch({ type: "set-a-field-touched", payload: true });
  }

  function updateAdvanced(event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof event.target.checked == "boolean") {
      navDispatch({
        type: "set-is-show-advanced-edit",
        payload: {
          ...nav.isShowAdvancedEdit,
          profile: event.target.checked,
        },
      });
    }

    if (!nav.aFieldTouched) {
      navDispatch({ type: "set-a-field-touched", payload: true });
    }
  }

  return (
    <>
      <nav className={c.stepMenu}>
        <div className={c.header}>
          <h3>עריכת תמונת פרופיל</h3>
          {isMobile && <HideDownButton />}
        </div>

        <div className={c.elementContainer}>
          <label className={c.elementLabel}>הוספת תמונת פרופיל</label>

          <Button
            variant="contained"
            component="label"
            className={clsx("upload-profile-picture")}
            startIcon={<FileUploadIcon className={clsx("icon")} />}
          >
            הוספה
            <input
              type="file"
              id="fileInput"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>

          <div className={c.customToolTip}>
            מומלץ תמונה ריבועית (רוחב = גובה)
          </div>
        </div>

        <div className={c.elementContainer}>
          <label className={c.elementLabel}>טקסט</label>
          <TextField
            id="text-field"
            maxRows={1}
            value={opinion.profileOpinion}
            onChange={profileTextChangeHandler}
            inputProps={{ maxLength: 14 }}
            fullWidth
          />
        </div>

        <div className={c.advancedContainer}>
          <div className={c.elementContainer + " " + c.advancedEditElement}>
            <label className={c.elementLabel}>עריכה מתקדמת</label>
            <Switch
              {...advancedEdtiLabel}
              checked={nav.isShowAdvancedEdit.profile}
              onChange={updateAdvanced}
            />
          </div>

          {nav.isShowAdvancedEdit.profile && (
            <>
              <div
                className={c.elementContainer}
                style={{ borderBlockStart: "1px solid rgb(48 48 48 / 10%)" }}
              >
                <ProfileColorInput />
              </div>

              <div className={c.elementContainer}>
                <label className={c.elementLabel}>גודל הטקסט</label>
                <FontSizeSlider parent={EditMenuParent.Profile} />
              </div>
            </>
          )}
        </div>

        <div
          className={c.elementContainer}
          style={{ paddingBlockStart: "1.8rem" }}
        >
          <label className={c.elementLabel}>הורדת תמונת פרופיל</label>
          <DownloadButton parent={EditMenuParent.Profile} />
        </div>
      </nav>
    </>
  );
}
