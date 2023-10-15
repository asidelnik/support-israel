import c from "../../styles/ThemeCoverCard.module.scss";
import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import { useOpinionsDispatch } from "../../contexts/opinions-context";
import { router } from "../../router";
import { CoverThemeType } from "../../interfaces/interfaces";

interface CoverCardProps {
  theme: CoverThemeType;
}

export default function ThemeCoverCard({ theme }: CoverCardProps) {
  const opinionsDispatch = useOpinionsDispatch();
  const design = useDesign();
  const designDispatch = useDesignDispatch();
  const {
    backgroundColor,
    font,
    textColor,
    profileTextColor,
    isShowTextBackground,
    coverText,
    profileText,
    sentenceBgColor,
  } = theme;

  const sentenceContainer = c.sentenceContainer + " " + font.family;

  function selectTheme() {
    if (theme !== undefined) {
      // Update opinions
      opinionsDispatch({
        type: "update-cover-opinion",
        payload: coverText,
      });
      opinionsDispatch({
        type: "update-profile-opinion",
        payload: profileText,
      });

      // Update design
      designDispatch({
        type: "set-edit-page-designs",
        payload: {
          ...design.editPage,
          backgroundColor: backgroundColor,
          sentenceBgColor: sentenceBgColor,
          fontFamily: font.family,
          profilePicture: {
            ...design.editPage.profilePicture,
            textColor: profileTextColor,
          },
        },
      });

      designDispatch({
        type: "set-cover-designs",
        payload: {
          ...design.cover,
          font: font,
          textColor: textColor,
          isShowTextBackground: isShowTextBackground,
          profileTextColor: profileTextColor,
        },
      });
    }

    router.navigate("/edit");
  }
  return (
    <>
      <div
        className={c.card}
        onClick={selectTheme}
      >
        <div
          className={c.cover}
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <div
            className={sentenceContainer}
            style={
              isShowTextBackground
                ? {
                    color: textColor,
                    fontSize: font.emSize + "em",
                    backgroundColor: sentenceBgColor,
                  }
                : {
                    color: textColor,
                    fontSize: font.emSize + "em",
                    backgroundColor: backgroundColor,
                  }
            }
          >
            {coverText}
          </div>
        </div>
      </div>
    </>
  );
}
