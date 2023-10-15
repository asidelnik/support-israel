import "../../styles/PosterGrid.scss";
import { useDesign } from "../../contexts/design-context";
import { useOpinions } from "../../contexts/opinions-context";
import { Opinion, OpinionsGroup } from "../../interfaces/interfaces";
import { useNavigation } from "../../contexts/navigation-context";

export default function OpinionsPosterGrid() {
  const opinions = useOpinions();
  const design = useDesign();
  const nav = useNavigation();

  return (
    <>
      <section id="poster-to-canvas">
        {opinions.opinionGroups.length > 0 && (
          <div
            className={"full-screen-view" + " " + design.posterColorTheme}
            style={{ fontSize: design.posterFont.emSize + "em" }}
          >
            <p className="title">
              {nav.isOpinionsUploaded ? "הדעות שלי" : "דעות לדוגמא"}
            </p>

            <div className="layout-grid">
              {opinions.opinionGroups.map((opinionsGroup: OpinionsGroup) => (
                <div
                  key={opinionsGroup.key}
                  className="opinion-group"
                >
                  {opinionsGroup.opinions.length > 0 && (
                    <>
                      <p className="group-title">{opinionsGroup.title}</p>
                    </>
                  )}
                  <div className="texts-group">
                    {opinionsGroup.opinions.length > 0 &&
                      opinionsGroup.opinions.map((opinion: Opinion) => (
                        <div
                          key={opinion.key}
                          className="opinion-text"
                        >
                          <p className="number">
                            {opinion.key < 9
                              ? "0" + (opinion.key + 1)
                              : opinion.key + 1}
                          </p>
                          <p className="text">{opinion.text}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
