import c from "../styles/PosterPage.module.scss";
import { useMediaQuery } from "@mui/material";
import PosterEditPanel from "../components/edit-panels/PosterEditPanel";
import OpinionsPosterGrid from "../components/opinions-view/OpinionsPosterGrid";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const OpinionsPosterPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const hideMenuTabs = useMediaQuery("(max-width: 940px)");

  return (
    <main>
      <section className={c.container}>
        {!hideMenuTabs && <PosterEditPanel />}
        <OpinionsPosterGrid />
      </section>
    </main>
  );
};

export default OpinionsPosterPage;
