import c from "../../../styles/EditPanel.module.scss";
import { Button, Switch, TextField, useMediaQuery } from "@mui/material";
import clsx from "clsx";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FontSizeSlider from "../../sub-components/FontSizeSlider";
import { EditMenuParent } from "../../../interfaces/enums";
import ProfileColorInput from "../../sub-components/ProfileColorInput";
import DownloadButton from "../../sub-components/DownloadButton";
import HideDownButton from "../../sub-components/HideDownButton";
import { useDesign } from "../../../contexts/design-context";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileOpinion, uploadProfileImage } from '../../../redux/opinions-slice';
import { RootState } from "../../../redux/store";
import { setAFieldTouched, setIsShowAdvancedEditProfile } from "../../../redux/navigation-slice";

export default function ProfileEditPanel() {
  const dispatch = useDispatch();
  const profileOpinion = useSelector((state: RootState) => state.opinions.profileOpinion);
  const { aFieldTouched, isShowAdvancedEdit } = useSelector((state: RootState) => state.navigation);;
  const isMobile = useMediaQuery("(max-width: 650px)");
  const design = useDesign();
  const advancedEdtiLabel = { inputProps: { "aria-label": "עריכה מתקדמת" } };

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
      const profileImageString = e.target?.result as string;
      dispatch(uploadProfileImage(profileImageString));
    };
    reader.readAsDataURL(file as Blob);

    if (!aFieldTouched) {
      dispatch(setAFieldTouched(true));
    }
  }

  function profileTextChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const profileOpinion = event.target?.value as string;
    dispatch(updateProfileOpinion(profileOpinion));

    if (!aFieldTouched)
      dispatch(setAFieldTouched(true));
  }

  function updateAdvanced(event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof event.target.checked == "boolean") {
      dispatch(setIsShowAdvancedEditProfile(event.target.checked));
    }

    if (!aFieldTouched) {
      dispatch(setAFieldTouched(true));
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
            value={profileOpinion}
            onChange={profileTextChangeHandler}
            inputProps={{ maxLength: 14 }}
            fullWidth
            className={clsx(design.editPage.textDirection)}
          />
        </div>

        <div className={c.advancedContainer}>
          <div className={c.elementContainer + " " + c.advancedEditElement}>
            <label className={c.elementLabel}>עריכה מתקדמת</label>
            <Switch
              {...advancedEdtiLabel}
              checked={isShowAdvancedEdit.profile}
              onChange={updateAdvanced}
            />
          </div>

          {isShowAdvancedEdit.profile && (
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
