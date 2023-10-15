import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import { posterColorThemeOptions } from "../../data/initialState";
import { SelectOption } from "../../interfaces/interfaces";

export default function PosterColorThemeSelect() {
  const designDispatch = useDesignDispatch();
  const design = useDesign();

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value !== null) {
      designDispatch({ type: "set-color-theme", payload: event.target.value });
    }
  };

  return (
    <FormControl fullWidth>
      <Select
        id="color-theme-select"
        value={design.posterColorTheme}
        onChange={handleChange}
      >
        {posterColorThemeOptions.map(
          (colorThemeOption: SelectOption, index: number) => (
            <MenuItem
              value={colorThemeOption.className}
              key={index}
            >
              {colorThemeOption.selectValue}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
}
