import c from "../../styles/RootFooter.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, useMediaQuery } from "@mui/material";
import TextDialog from "../sub-components/TextDialog";
import TermsOfService from "../dialog-components/TermsOfService";
import SiteMission from "../dialog-components/SiteMission";
import clsx from "clsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setIsShowSiteMission, setIsShowTermsOfService, setIsShowEditPanelWeb } from "../../redux/navigation-slice";

export default function RootFooter() {
  const { isShowTermsOfService, isShowSiteMission, isShowEditPanel } = useSelector((state: RootState) => state.navigation);;
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const websiteUrl = "https://asidelnik.github.io/support-israel/";

  function closeTermsOfService() {
    dispatch(setIsShowTermsOfService(false));
  }

  function closeSitePurpose() {
    dispatch(setIsShowSiteMission(false));
  }

  function handleShare() {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      websiteUrl
    )}`;
    window.open(shareUrl, "_blank");
  }

  return (
    <>
      {isShowTermsOfService && (
        <TextDialog
          open={isShowTermsOfService}
          onClose={closeTermsOfService}
          child={<TermsOfService />}
        />
      )}

      {isShowSiteMission && (
        <TextDialog
          open={isShowSiteMission}
          onClose={closeSitePurpose}
          child={<SiteMission />}
        />
      )}

      {((isMobile && !isShowEditPanel.mobile) || !isMobile) && (
        <footer>
          <div className={c.container}>
            <div className={c.column}>
              <h2>עמודים</h2>
              <div className={c.items}>
                <Button
                  variant="outlined"
                  color="secondary"
                  className={clsx(c.button)}
                >
                  <Link
                    onClick={() => dispatch(setIsShowEditPanelWeb(true))}
                    to="/theme"
                    className={c.link}
                  >
                    עמוד הבית
                  </Link>
                </Button>

                <Button
                  variant="outlined"
                  color="secondary"
                  className={clsx(c.button)}
                >
                  <Link
                    to="/edit"
                    className={c.link}
                  >
                    עריכה והורדה
                  </Link>
                </Button>
              </div>
            </div>

            <div className={c.column}>
              <h2>תנאי השימוש</h2>
              <div className={c.items}>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={clsx(c.button)}
                    onClick={() => dispatch(setIsShowTermsOfService(true))}
                  >
                    <span>תנאי השימוש</span>
                  </Button>
                </div>

                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={clsx(c.button)}
                    onClick={() => dispatch(setIsShowSiteMission(true))}
                  >
                    <span>מטרת האתר</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className={c.column}>
              <h2>יצירת קשר</h2>
              <div className={c.items}>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={clsx(c.button)}
                    href="https://www.linkedin.com/in/amossidelnik/"
                    target="_blank"
                  >
                    <span>לפיתוח אתרים</span>
                    <LinkedInIcon className={clsx(c.icon)} />
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={clsx(c.button)}
                    onClick={handleShare}
                    size="medium"
                  >
                    <span>שיתוף בפייסבוק</span>
                    <FacebookIcon className={clsx(c.icon)} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
