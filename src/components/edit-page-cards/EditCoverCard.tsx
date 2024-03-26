import c from "../../styles/EditCoverCard.module.scss";
import { useDesign } from "../../contexts/design-context";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";
import { useMediaQuery } from "@mui/material";
import EditButton from "../sub-components/EditButton";
import DownloadButton from "../sub-components/DownloadButton";
import { EditMenuParent } from "../../interfaces/enums";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function EditCoverCard() {
  const design = useDesign();
  const coverOpinion = useSelector((state: RootState) => state.opinions.coverOpinion);
  const nav = useNavigation();
  const navDispatch = useNavigationDispatch();
  const isMobile = useMediaQuery("(max-width: 650px)");

  const coverSentenceClasses =
    c.oneSentenceMiddle + " " + design.editPage.fontFamily + " " + design.editPage.textDirection;

  function setIsShowEditPanel() {
    navDispatch({
      type: "set-edit-panel-active-tab",
      payload: 0,
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
          <p className={c.title}>תמונת באנר</p>
          <EditButton parent={EditMenuParent.Cover} />
        </div>
      )}

      <section
        className={
          !isMobile && nav.editPanelActiveTab === 0
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

      {isMobile && !nav.isShowEditPanel.mobile && (
        <div className={c.download}>
          <DownloadButton parent={EditMenuParent.Cover} />
        </div>
      )}
    </>
  );
}
