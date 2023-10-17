import c from "../../styles/RootFooter.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, useMediaQuery } from "@mui/material";
import TextDialog from "../sub-components/TextDialog";
import TermsOfService from "../dialog-components/TermsOfService";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";
import SiteMission from "../dialog-components/SiteMission";
import clsx from "clsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

export default function RootFooter() {
  const nav = useNavigation();
  const navDispatch = useNavigationDispatch();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const websiteUrl = "https://asidelnik.github.io/support-israel/";

  function closeTermsOfService() {
    navDispatch({ type: "set-is-show-terms-of-service", payload: false });
  }

  function closeSitePurpose() {
    navDispatch({ type: "set-is-show-site-mission", payload: false });
  }

  function handleShare() {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      websiteUrl
    )}`;
    window.open(shareUrl, "_blank");
  }

  function setIsShowEditPanelWeb() {
    navDispatch({
      type: "set-is-show-edit-panel-web",
      payload: true,
    });
  }

  return (
    <>
      {nav.isShowTermsOfService && (
        <TextDialog
          open={nav.isShowTermsOfService}
          onClose={closeTermsOfService}
          child={<TermsOfService />}
        />
      )}

      {nav.isShowSiteMission && (
        <TextDialog
          open={nav.isShowSiteMission}
          onClose={closeSitePurpose}
          child={<SiteMission />}
        />
      )}

      {((isMobile && !nav.isShowEditPanel.mobile) || !isMobile) && (
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
                    onClick={setIsShowEditPanelWeb}
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
                    onClick={() =>
                      navDispatch({
                        type: "set-is-show-terms-of-service",
                        payload: true,
                      })
                    }
                  >
                    <span>תנאי השימוש</span>
                  </Button>
                </div>

                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={clsx(c.button)}
                    onClick={() =>
                      navDispatch({
                        type: "set-is-show-site-mission",
                        payload: true,
                      })
                    }
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
