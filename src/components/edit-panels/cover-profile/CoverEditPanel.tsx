import c from "../../../styles/EditPanel.module.scss";
import { Switch, TextField, useMediaQuery } from "@mui/material";
import CoverColorInput from "../../sub-components/CoverColorInput";
import FontSizeSlider from "../../sub-components/FontSizeSlider";
import FontFamilySelect from "../../sub-components/FontFamilySelect";
import { EditMenuParent } from "../../../interfaces/enums";
import DownloadButton from "../../sub-components/DownloadButton";
import HideDownButton from "../../sub-components/HideDownButton";
import { useDesign } from "../../../contexts/design-context";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { updateCoverOpinion } from "../../../redux/opinions-slice";
import { RootState } from "../../../redux/store";
import { setAFieldTouched, setIsShowAdvancedEditCover } from "../../../redux/navigation-slice";

export default function CoverEditPanel() {
  const dispatch = useDispatch();
  const coverOpinion = useSelector((state: RootState) => state.opinions.coverOpinion);
  const { isShowAdvancedEdit, aFieldTouched } = useSelector((state: RootState) => state.navigation);;
  const design = useDesign();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const advancedEdtiLabel = { inputProps: { "aria-label": "עריכה מתקדמת" } };

  function coverTextChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const coverOpinion = event.target?.value as string;
    dispatch(updateCoverOpinion(coverOpinion));

    if (!aFieldTouched) {
      dispatch(setAFieldTouched(true));
    }
  }

  function updateAdvanced(event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof event.target.checked == "boolean") {
      dispatch(setIsShowAdvancedEditCover(event.target.checked));
    }

    if (!aFieldTouched) {
      dispatch(setAFieldTouched(true));
    }
  }

  return (
    <>
      <nav className={c.stepMenu + " " + c.cover}>
        <div className={c.header}>
          <h3>עריכת תמונת באנר</h3>
          {isMobile && <HideDownButton />}
        </div>

        <div className={c.elementContainer}>
          <label className={c.elementLabel}>טקסט</label>
          <TextField
            id="text-field"
            maxRows={4}
            value={coverOpinion}
            onChange={coverTextChangeHandler}
            inputProps={{ maxLength: 50 }}
            fullWidth
            className={clsx(design.editPage.textDirection)}
          />
        </div>

        <div className={c.advancedContainer}>
          <div className={c.elementContainer + " " + c.advancedEditElement}>
            <label className={c.elementLabel}>עריכה מתקדמת</label>
            <Switch
              {...advancedEdtiLabel}
              checked={isShowAdvancedEdit.cover}
              onChange={updateAdvanced}
            />
          </div>

          {isShowAdvancedEdit.cover && (
            <>
              <div
                className={c.elementContainer}
                style={{ borderBlockStart: "1px solid rgb(48 48 48 / 10%)" }}
              >
                <CoverColorInput />
              </div>

              <div className={c.elementContainer}>
                <label className={c.elementLabel}>גופן</label>
                <FontFamilySelect />
              </div>

              <div className={c.elementContainer}>
                <label className={c.elementLabel}>גודל הטקסט</label>
                <FontSizeSlider parent={EditMenuParent.Cover} />
              </div>
            </>
          )}
        </div>

        <div
          className={c.elementContainer}
          style={{ paddingBlockStart: "1.8rem" }}
        >
          <label className={c.elementLabel}>הורדת תמונת באנר</label>
          <DownloadButton parent={EditMenuParent.Cover} />
        </div>
      </nav>
    </>
  );
}
