import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import { fontFamilyOptions } from "../../data/initialState";
import { SelectOption } from "../../interfaces/interfaces";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";

export default function FontFamilySelect() {
  const designDispatch = useDesignDispatch();
  const design = useDesign();
  const navDispatch = useNavigationDispatch();
  const nav = useNavigation();

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value !== null) {
      designDispatch({
        type: "set-edit-page-font-family",
        payload: event.target.value,
      });
    }

    if (!nav.aFieldTouched)
      navDispatch({ type: "set-a-field-touched", payload: true });
  };

  return (
    <FormControl fullWidth>
      <Select
        id="font-family-select"
        value={design.editPage.fontFamily}
        onChange={handleChange}
      >
        {fontFamilyOptions.map((fontFamily: SelectOption, index: number) => (
          <MenuItem
            value={fontFamily.className}
            key={index}
            style={{ fontFamily: fontFamily.className }}
          >
            {fontFamily.selectValue}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
