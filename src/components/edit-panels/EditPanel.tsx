import c from "../../styles/EditPanel.module.scss";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CoverEditPanel from "./cover-profile/CoverEditPanel";
import ProfileEditPanel from "./cover-profile/ProfileEditPanel";
import clsx from "clsx";
import { IconButton, useMediaQuery } from "@mui/material";
import CustomTabPanel from "../sub-components/CustomTabPanel";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import { CoverOrProfileTab } from "../../interfaces/enums";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setEditPanelActiveTab, setIsShowEditPanelMobile, setIsShowEditPanelWeb } from "../../redux/navigation-slice";

export default function EditPannel() {
  const { isShowEditPanel, editPanelActiveTab } = useSelector((state: RootState) => state.navigation);;
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 650px)");

  function handleChange(_event: React.SyntheticEvent, newValue: number) {
    dispatch(setEditPanelActiveTab(newValue));
  }

  function setIsShowEditPanel() {
    if (isMobile) {
      dispatch(setIsShowEditPanelMobile(!isShowEditPanel.mobile));
    } else {
      dispatch(setIsShowEditPanelWeb(!isShowEditPanel.web));
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
              !isMobile && !isShowEditPanel.web
                ? c.button + " " + c.shadow
                : c.button
            )}
          >
            {isShowEditPanel.web || isShowEditPanel.mobile ? (
              <MenuIcon className={clsx(c.icon)} />
            ) : (
              <EditIcon className={clsx(c.icon)} />
            )}
          </IconButton>
        </div>
      )}

      {!isMobile && isShowEditPanel.web && (
        <div className={c.panelContainer}>
          <Tabs
            value={editPanelActiveTab}
            onChange={handleChange}
            aria-label="לשוניות לעריכת תמונות"
            className={clsx(c.tabs)}
            variant="fullWidth"
          >
            <Tab label="באנר" />
            <Tab label="פרופיל" />
          </Tabs>

          <CustomTabPanel
            value={editPanelActiveTab}
            index={0}
          >
            <CoverEditPanel />
          </CustomTabPanel>
          <CustomTabPanel
            value={editPanelActiveTab}
            index={1}
          >
            <ProfileEditPanel />
          </CustomTabPanel>
        </div>
      )}

      {isMobile && isShowEditPanel.mobile && (
        <div className={c.panelContainer}>
          {editPanelActiveTab === CoverOrProfileTab.Cover && (
            <CoverEditPanel />
          )}
          {editPanelActiveTab === CoverOrProfileTab.Profile && (
            <ProfileEditPanel />
          )}
        </div>
      )}
    </>
  );
}
