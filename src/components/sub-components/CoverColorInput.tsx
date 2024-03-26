import c from "../../styles/EditPanel.module.scss";
import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import { colorInputColors } from "../../data/initialState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAFieldTouched } from "../../redux/navigation-slice";

export default function CoverColorInput() {
  const designDispatch = useDesignDispatch();
  const design = useDesign();
  const { aFieldTouched } = useSelector((state: RootState) => state.navigation);;
  const dispatch = useDispatch();

  function colorChange(e: any, type: string) {
    if (e.target.value !== null) {
      if (type === "bg") {
        designDispatch({
          type: "set-edit-page-background-color",
          payload: e.target.value,
        });
      } else if (type === "text") {
        designDispatch({
          type: "set-cover-text-color",
          payload: e.target.value,
        });
      } else if (type === "text-bg") {
        designDispatch({
          type: "set-cover-sentence-bg-color",
          payload: e.target.value,
        });
      }
    }

    if (!aFieldTouched) {
      dispatch(setAFieldTouched(true));
    }
  }

  return (
    <>
      <div
        className={c.flexColumn}
        style={{ paddingBlockStart: "1.5rem" }}
      >
        <div>
          <label className={c.elementLabel}>צבע רקע</label>
          <input
            type="color"
            id="bg-color-input"
            list="bg-color-options"
            onChange={() => colorChange(event, "bg")}
            value={design.editPage.backgroundColor}
            style={{ height: "35px" }}
          />

          <datalist id="bg-color-options">
            {colorInputColors.map((color: string, index: number) => (
              <option
                key={index}
                value={color}
              />
            ))}
          </datalist>
        </div>

        <div>
          <label className={c.elementLabel}>צבע טקסט</label>
          <input
            type="color"
            id="text-color-input"
            list="text-color-options"
            onChange={() => colorChange(event, "text")}
            value={design.cover.textColor}
            style={{ height: "35px" }}
          />

          <datalist id="text-color-options">
            {colorInputColors.map((color: string, index: number) => (
              <option
                key={index}
                value={color}
              />
            ))}
          </datalist>
        </div>
      </div>

      {design.cover.isShowTextBackground && (
        <div style={{ paddingBlockStart: "1.5rem" }}>
          <label className={c.elementLabel}>רקע של הטקסט</label>
          <input
            type="color"
            id="cover-sentence-bg-color-input"
            list="sentence-bg-color"
            onChange={() => colorChange(event, "text-bg")}
            value={design.editPage.sentenceBgColor}
            style={{ height: "35px" }}
          />

          <datalist id="sentence-bg-color">
            {colorInputColors.map((color: string, index: number) => (
              <option
                key={index}
                value={color}
              />
            ))}
          </datalist>
        </div>
      )}
    </>
  );
}
