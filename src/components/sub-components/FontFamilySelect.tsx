import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDesign, useDesignDispatch } from "../../contexts/design-context";
import { fontFamilyOptions } from "../../data/initialState";
import { SelectOption } from "../../interfaces/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setAFieldTouched } from "../../redux/navigation-slice";

export default function FontFamilySelect() {
  const designDispatch = useDesignDispatch();
  const design = useDesign();
  const { aFieldTouched } = useSelector((state: RootState) => state.navigation);;
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value !== null) {
      designDispatch({
        type: "set-edit-page-font-family",
        payload: event.target.value,
      });
    }

    if (!aFieldTouched)
      dispatch(setAFieldTouched(true));
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
