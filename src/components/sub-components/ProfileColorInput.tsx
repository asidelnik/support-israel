import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";
import { colorInputColors } from "../../data/initialState";

export default function ProfileColorInput() {
  const designDispatch = useDesignDispatch();
  const design = useDesign();
  const navDispatch = useNavigationDispatch();
  const nav = useNavigation();

  function colorChange(e: any) {
    if (e.target.value !== null) {
      designDispatch({
        type: "set-profile-picture-text-color",
        payload: e.target.value,
      });
    }

    if (!nav.aFieldTouched) {
      navDispatch({ type: "set-a-field-touched", payload: true });
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
