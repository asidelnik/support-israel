import c from "../../styles/RootHeader.module.scss";
import { Tooltip, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import clsx from "clsx";
import { useNavigationDispatch } from "../../contexts/navigation-context";

export default function RootHeader() {
  const location = useLocation();
  const pathName = location.pathname;
  const navDispatch = useNavigationDispatch();
  const isMobile = useMediaQuery("(max-width: 650px)");

  //   function mainNavTabClicked() {
  //     navDispatch({ type: "set-is-onboarding-active", payload: false });
  //   }

  function setIsShowEditPanel() {
    if (isMobile) {
      navDispatch({
        type: "set-is-show-edit-panel-mobile",
        payload: false,
      });
    } else {
      navDispatch({
        type: "set-is-show-edit-panel-web",
        payload: true,
      });
    }
  }

  return (
    <>
      <header
        className={ pathName === "/edit" ? c.navHeader : c.titleHeader }
      >
        {pathName === "/edit" ? (
          <div className={c.nav}>
            <Tooltip title="חזרה לעמוד הבית">
              <Link
                onClick={setIsShowEditPanel}
                to="/theme"
                className={c.back}
              >
                <ArrowForwardIcon className={clsx(c.back)} />
              </Link>
            </Tooltip>
            <p className={c.title}>
              {pathName === "/edit" && "עריכה והורדה"}
            </p>
          </div>
        ) : (
          <div className={c.titleBanner}>
            <div className={c.titleContainer}>
                <h1 className={c.h1}>✡&nbsp;Stand with Israel&nbsp;✡</h1>
                <div className={c.slogan}>עיצובי תמיכה בישראל לפייסבוק</div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
