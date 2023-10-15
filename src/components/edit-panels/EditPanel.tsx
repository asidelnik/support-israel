import c from "../../styles/EditPanel.module.scss";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CoverEditPanel from "./cover-profile/CoverEditPanel";
import ProfileEditPanel from "./cover-profile/ProfileEditPanel";
import clsx from "clsx";
import { IconButton, useMediaQuery } from "@mui/material";
import CustomTabPanel from "../sub-components/CustomTabPanel";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import { CoverOrProfileTab } from "../../interfaces/enums";

export default function EditPannel() {
  const navDispatch = useNavigationDispatch();
  const nav = useNavigation();
  const isMobile = useMediaQuery("(max-width: 650px)");

  function handleChange(_event: React.SyntheticEvent, newValue: number) {
    navDispatch({ type: "set-edit-panel-active-tab", payload: newValue });
  }

  function setIsShowEditPanel() {
    if (isMobile) {
      navDispatch({
        type: "set-is-show-edit-panel-mobile",
        payload: !nav.isShowEditPanel.mobile,
      });
    } else {
      navDispatch({
        type: "set-is-show-edit-panel-web",
        payload: !nav.isShowEditPanel.web,
      });
    }
  }
  return (
    <>
      {!isMobile && (
        <div className={c.editToggle}>
          <IconButton
            size="large"
            aria-label="הצגת תפריט עריכה"
            onClick={setIsShowEditPanel}
            className={clsx(
              !isMobile && !nav.isShowEditPanel.web
                ? c.button + " " + c.shadow
                : c.button
            )}
          >
            {nav.isShowEditPanel.web || nav.isShowEditPanel.mobile ? (
              <MenuIcon className={clsx(c.icon)} />
            ) : (
              <EditIcon className={clsx(c.icon)} />
            )}
          </IconButton>
        </div>
      )}

      {!isMobile && nav.isShowEditPanel.web && (
        <div className={c.panelContainer}>
          <Tabs
            value={nav.editPanelActiveTab}
            onChange={handleChange}
            aria-label="לשוניות לעריכת תמונות"
            className={clsx(c.tabs)}
            variant="fullWidth"
          >
            <Tab label="באנר" />
            <Tab label="פרופיל" />
          </Tabs>

          <CustomTabPanel
            value={nav.editPanelActiveTab}
            index={0}
          >
            <CoverEditPanel />
          </CustomTabPanel>
          <CustomTabPanel
            value={nav.editPanelActiveTab}
            index={1}
          >
            <ProfileEditPanel />
          </CustomTabPanel>
        </div>
      )}

      {isMobile && nav.isShowEditPanel.mobile && (
        <div className={c.panelContainer}>
          {nav.editPanelActiveTab === CoverOrProfileTab.Cover && (
            <CoverEditPanel />
          )}
          {nav.editPanelActiveTab === CoverOrProfileTab.Profile && (
            <ProfileEditPanel />
          )}
        </div>
      )}
    </>
  );
}
