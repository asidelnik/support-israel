import Slider from "@mui/material/Slider";
import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import { ParentType } from "../../interfaces/interfaces";
import { EditMenuParent } from "../../interfaces/enums";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";

export default function FontSizeSlider({ parent }: ParentType) {
  const designDispatch = useDesignDispatch();
  const design = useDesign();
  const navDispatch = useNavigationDispatch();
  const nav = useNavigation();
  const isCover = parent === EditMenuParent.Cover;

  const handleChange = (_event: Event, fontSize: number | number[]) => {
    if (typeof fontSize === "number") {
      if (isCover) {
        designDispatch({
          type: "set-cover-font",
          payload: {
            emSize: fontSize / 10,
            sliderSize: fontSize,
          },
        });
      } else if (parent === EditMenuParent.Profile) {
        designDispatch({
          type: "set-profile-font-size",
          payload: {
            ...design.editPage.profilePicture.font,
            emSize: fontSize / 10,
            sliderSize: fontSize,
          },
        });
      }
    }

    if (!nav.aFieldTouched) {
      navDispatch({ type: "set-a-field-touched", payload: true });
    }
  };

  return (
    <Slider
      size="small"
      value={
        isCover
          ? design.cover.font.sliderSize
          : design.editPage.profilePicture.font.sliderSize
      }
      step={1}
      marks
      min={isCover ? 20 : 16}
      max={isCover ? (design.cover.isShowTextBackground ? 60 : 90) : 30}
      aria-label="שינוי גודל טקסט"
      valueLabelDisplay="auto"
      onChange={handleChange}
    />
  );
}
