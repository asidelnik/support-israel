import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import { colorInputColors } from "../../data/initialState";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAFieldTouched } from "../../redux/navigation-slice";

export default function ProfileColorInput() {
  const designDispatch = useDesignDispatch();
  const design = useDesign();
  const { aFieldTouched } = useSelector((state: RootState) => state.navigation);;
  const dispatch = useDispatch();

  function colorChange(e: any) {
    if (e.target.value !== null) {
      designDispatch({
        type: "set-profile-picture-text-color",
        payload: e.target.value,
      });
    }

    if (!aFieldTouched) {
      dispatch(setAFieldTouched(true));
    }
  }

  return (
    <>
      <div style={{ paddingBlockStart: "1.5rem" }}>
        <label className="elementLabel">צבע טקסט</label>
        <input
          type="color"
          id="profile-text-color-input"
          list="profile-text-color-options"
          onChange={colorChange}
          value={design.editPage.profilePicture.textColor}
          style={{ width: "100%", height: "35px" }}
        />

        <datalist id="profile-text-color-options">
          {colorInputColors.map((color: string, index: number) => (
            <option
              key={index}
              value={color}
            />
          ))}
        </datalist>
      </div>
    </>
  );
}
