import c from "../styles/EditPage.module.scss";
import EditPannel from "../components/edit-panels/EditPanel";
import EditProfileCard from "../components/edit-page-cards/EditProfileCard";
import EditCoverCard from "../components/edit-page-cards/EditCoverCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useNavigation } from "../contexts/navigation-context";
import { CoverOrProfileTab } from "../interfaces/enums";

export default function EditPage() {
  const { pathname } = useLocation();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const nav = useNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, nav.isShowEditPanel.mobile]);

  return (
    <>
      {/* {!isSmallPageWidth && nav.isOnboardingActive && <Onboarding />} */}
      <main className={c.editPageContainer}>
        <EditPannel />
        <section className={c.picturesViewContainer}>
          <div className={c.myProfileContainer}>
            {((isMobile &&
              (!nav.isShowEditPanel.mobile ||
                (nav.isShowEditPanel.mobile &&
                  nav.editPanelActiveTab === CoverOrProfileTab.Cover))) ||
              !isMobile) && <EditCoverCard />}

            {((isMobile &&
              (!nav.isShowEditPanel.mobile ||
                (nav.isShowEditPanel.mobile &&
                  nav.editPanelActiveTab === CoverOrProfileTab.Profile))) ||
              !isMobile) && <EditProfileCard />}
          </div>
        </section>
      </main>
    </>
  );
}
