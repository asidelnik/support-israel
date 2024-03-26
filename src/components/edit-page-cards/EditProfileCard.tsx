import c from "../../styles/EditProfileCard.module.scss";
import { Button, useMediaQuery } from "@mui/material";
import { useDesign } from "../../contexts/design-context";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { EditMenuParent } from "../../interfaces/enums";
import EditButton from "../sub-components/EditButton";
import DownloadButton from "../sub-components/DownloadButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { uploadProfileImage } from "../../redux/opinions-slice";
import { setAFieldTouched, setEditPanelActiveTab, setIsShowEditPanelMobile } from "../../redux/navigation-slice";

export default function EditProfileCard() {
  const dispatch = useDispatch();
  const { uploadedProfileImageUrl, profileOpinion } = useSelector((state: RootState) => state.opinions);
  const { aFieldTouched, isShowEditPanel, editPanelActiveTab } = useSelector((state: RootState) => state.navigation);;
  const design = useDesign();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const profileTextContainerClasses =
    c.profileTextContainer + " " + design.editPage.fontFamily;

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const reader = new FileReader();

    reader.onload = function (e: ProgressEvent<FileReader>) {
      const profileOpinion = e.target?.result as string;
      dispatch(uploadProfileImage(profileOpinion));
    };
    reader.readAsDataURL(file as Blob);

    if (!aFieldTouched)
      dispatch(setAFieldTouched(true));
  }

  function setIsShowEditPanel() {
    dispatch(setEditPanelActiveTab(1));
    dispatch(setIsShowEditPanelMobile(!isShowEditPanel.mobile));
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
            !isMobile && editPanelActiveTab === 1
              ? c.profilePictureHtmlToCanvas + " " + c.profileSelected
              : c.profilePictureHtmlToCanvas + " " + c.profileNotSelected
          }
        >
          <div className={c.profilePictureDesignContainer}>
            {uploadedProfileImageUrl ? (
              <div className={c.uploadedImageContainer}>
                <img
                  src={uploadedProfileImageUrl}
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
              <div className={c.profileText + " " + design.cover.textDirection}>{profileOpinion}</div>
            </div>
          </div>
        </div>
      </section>

      {isMobile && !isShowEditPanel.mobile && (
        <div>
          <DownloadButton parent={EditMenuParent.Profile} />
        </div>
      )}
    </>
  );
}
