import c from "../styles/EditPage.module.scss";
import EditPannel from "../components/edit-panels/EditPanel";
import EditProfileCard from "../components/edit-page-cards/EditProfileCard";
import EditCoverCard from "../components/edit-page-cards/EditCoverCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { CoverOrProfileTab } from "../interfaces/enums";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function EditPage() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const { isShowEditPanel, editPanelActiveTab } = useSelector((state: RootState) => state.navigation);;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, isShowEditPanel.mobile]);

  return (
    <>
      {/* {!isSmallPageWidth && isOnboardingActive && <Onboarding />} */}
      <main className={c.editPageContainer}>
        <EditPannel />
        <section className={c.picturesViewContainer}>
          <div className={c.myProfileContainer}>
            {((isMobile &&
              (!isShowEditPanel.mobile ||
                (isShowEditPanel.mobile &&
                  editPanelActiveTab === CoverOrProfileTab.Cover))) ||
              !isMobile) && <EditCoverCard />}

            {((isMobile &&
              (!isShowEditPanel.mobile ||
                (isShowEditPanel.mobile &&
                  editPanelActiveTab === CoverOrProfileTab.Profile))) ||
              !isMobile) && <EditProfileCard />}
          </div>
        </section>
      </main>
    </>
  );
}
