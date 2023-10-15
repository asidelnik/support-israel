import c from "../styles/ThemePage.module.scss";
import ThemeCoverCard from "../components/sub-components/ThemeCoverCard";
import { coverThemes } from "../data/initialState";
import { CoverThemeType } from "../interfaces/interfaces";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ThemePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* {!isSmallPageWidth && nav.isOnboardingActive && <Onboarding />} */}
      <main className={c.container}>
        <p className={c.instruction}>בחר/י סגנון</p>
        <div className={c.grid}>
          {coverThemes.map((theme: CoverThemeType, index: number) => {
            return (
              <ThemeCoverCard
                key={index}
                theme={theme}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
