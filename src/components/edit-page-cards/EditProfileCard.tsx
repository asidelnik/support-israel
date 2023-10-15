import c from "../../styles/EditProfileCard.module.scss";
import { Button, useMediaQuery } from "@mui/material";
import { useDesign } from "../../contexts/design-context";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";
import {
  useOpinions,
  useOpinionsDispatch,
} from "../../contexts/opinions-context";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { EditMenuParent } from "../../interfaces/enums";
import EditButton from "../sub-components/EditButton";
import DownloadButton from "../sub-components/DownloadButton";

export default function EditProfileCard() {
  const opinions = useOpinions();
  const opinionsDispatch = useOpinionsDispatch();
  const nav = useNavigation();
  const navDispatch = useNavigationDispatch();
  const design = useDesign();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const profileTextContainerClasses =
    c.profileTextContainer + " " + design.editPage.fontFamily;

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

  function setIsShowEditPanel() {
    navDispatch({
      type: "set-edit-panel-active-tab",
      payload: 1,
    });

    navDispatch({
      type: "set-is-show-edit-panel-mobile",
      payload: !nav.isShowEditPanel.mobile,
    });
  }

  return (
    <>
      {isMobile && (
        <div className={c.header}>
          <p className={c.title}>תמונת פרופיל</p>
          <EditButton parent={EditMenuParent.Profile} />
        </div>
      )}

      <section className={c.profilePictureContainer}>
        <div
          id="profilePictureHtmlToCanvas"
          className={
            !isMobile && nav.editPanelActiveTab === 1
              ? c.profilePictureHtmlToCanvas + " " + c.profileSelected
              : c.profilePictureHtmlToCanvas + " " + c.profileNotSelected
          }
        >
          <div className={c.profilePictureDesignContainer}>
            {opinions.uploadedProfileImageUrl ? (
              <div className={c.uploadedImageContainer}>
                <img
                  src={opinions.uploadedProfileImageUrl}
                  alt="Uploaded"
                  className={c.uploadedImage}
                />
              </div>
            ) : (
              <div className={c.uploadedImageContainer}>
                <div className={c.imagePlaceholder}>
                  <Button component="label">
                    <PhotoCameraIcon className={c.icon} />
                    <input
                      type="file"
                      id="fileInput"
                      hidden
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </Button>
                </div>
              </div>
            )}
            <div
              className={profileTextContainerClasses}
              style={{
                backgroundColor: design.editPage.backgroundColor,
                fontSize: design.editPage.profilePicture.font.emSize + "em",
                color: design.editPage.profilePicture.textColor,
              }}
              onClick={() => (isMobile ? setIsShowEditPanel() : null)}
            >
              <div className={c.profileText + " " + design.cover.textDirection}>{opinions.profileOpinion}</div>
            </div>
          </div>
        </div>
      </section>

      {isMobile && !nav.isShowEditPanel.mobile && (
        <div>
          <DownloadButton parent={EditMenuParent.Profile} />
        </div>
      )}
    </>
  );
}
