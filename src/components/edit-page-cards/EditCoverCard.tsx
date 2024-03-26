import c from "../../styles/EditCoverCard.module.scss";
import { useDesign } from "../../contexts/design-context";
import { useMediaQuery } from "@mui/material";
import EditButton from "../sub-components/EditButton";
import DownloadButton from "../sub-components/DownloadButton";
import { EditMenuParent } from "../../interfaces/enums";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setEditPanelActiveTab, setIsShowEditPanelMobile } from "../../redux/navigation-slice";

export default function EditCoverCard() {
  const design = useDesign();
  const coverOpinion = useSelector((state: RootState) => state.opinions.coverOpinion);
  const { isShowEditPanel, editPanelActiveTab } = useSelector((state: RootState) => state.navigation);;
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const coverSentenceClasses =
    c.oneSentenceMiddle + " " + design.editPage.fontFamily + " " + design.editPage.textDirection;

  function setIsShowEditPanel() {
    dispatch(setEditPanelActiveTab(0));
    dispatch(setIsShowEditPanelMobile(!isShowEditPanel.mobile));
  }

  return (
    <>
      {isMobile && (
        <div className={c.header}>
          <p className={c.title}>תמונת באנר</p>
          <EditButton parent={EditMenuParent.Cover} />
        </div>
      )}

      <section
        className={
          !isMobile && editPanelActiveTab === 0
            ? c.coverPictureContainer + " " + c.coverSelected
            : c.coverPictureContainer + " " + c.coverNotSelected
        }
        onClick={() => (isMobile ? setIsShowEditPanel() : null)}
      >
        <div
          id="coverPictureHtmlToCanvas"
          className={c.coverPictureHtmlToCanvas}
        >
          <div
            className={c.coverPictureDesignContainer}
            style={{
              backgroundColor: design.editPage.backgroundColor,
            }}
          >
            <div
              className={coverSentenceClasses}
              style={
                design.cover.isShowTextBackground
                  ? {
                    color: design.cover.textColor,
                    fontSize: design.cover.font.emSize + "em",
                    backgroundColor: design.editPage.sentenceBgColor,
                  }
                  : {
                    color: design.cover.textColor,
                    fontSize: design.cover.font.emSize + "em",
                    backgroundColor: design.editPage.backgroundColor,
                  }
              }
            >
              {coverOpinion}
            </div>
          </div>
        </div>
      </section>

      {isMobile && !isShowEditPanel.mobile && (
        <div className={c.download}>
          <DownloadButton parent={EditMenuParent.Cover} />
        </div>
      )}
    </>
  );
}
