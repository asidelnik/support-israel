import c from "../../styles/ThemeCoverCard.module.scss";
import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import { router } from "../../router";
import { CoverThemeType } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { updateCoverOpinion, updateProfileOpinion } from "../../redux/opinions-slice";

interface CoverCardProps {
  theme: CoverThemeType;
}

export default function ThemeCoverCard({ theme }: CoverCardProps) {
  const dispatch = useDispatch();
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
    textDirection,
  } = theme;

  const sentenceContainer = c.sentenceContainer + " " + font.family + " " + textDirection;

  function selectTheme() {
    if (theme !== undefined) {
      // Update opinions
      dispatch(updateCoverOpinion(coverText));
      dispatch(updateProfileOpinion(profileText));

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
          textDirection: textDirection,
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
          textDirection: textDirection,
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
