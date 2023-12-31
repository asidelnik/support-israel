import c from "../../../styles/EditPanel.module.scss";
import { Switch, TextField, useMediaQuery } from "@mui/material";
import CoverColorInput from "../../sub-components/CoverColorInput";
import FontSizeSlider from "../../sub-components/FontSizeSlider";
import {
  useOpinions,
  useOpinionsDispatch,
} from "../../../contexts/opinions-context";
import FontFamilySelect from "../../sub-components/FontFamilySelect";
import { EditMenuParent } from "../../../interfaces/enums";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../../contexts/navigation-context";
import DownloadButton from "../../sub-components/DownloadButton";
import HideDownButton from "../../sub-components/HideDownButton";
import { useDesign } from "../../../contexts/design-context";
import clsx from "clsx";

export default function CoverEditPanel() {
  const opinion = useOpinions();
  const opinionsDispatch = useOpinionsDispatch();
  const navDispatch = useNavigationDispatch();
  const nav = useNavigation();
  const design = useDesign();
  const isMobile = useMediaQuery("(max-width: 650px)");
  const advancedEdtiLabel = { inputProps: { "aria-label": "עריכה מתקדמת" } };

  function coverTextChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    opinionsDispatch({
      type: "update-cover-opinion",
      payload: event.target?.value as string,
    });
    if (!nav.aFieldTouched) {
      navDispatch({ type: "set-a-field-touched", payload: true });
    }
  }

  function updateAdvanced(event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof event.target.checked == "boolean") {
      navDispatch({
        type: "set-is-show-advanced-edit",
        payload: {
          ...nav.isShowAdvancedEdit,
          cover: event.target.checked,
        },
      });
    }

    if (!nav.aFieldTouched) {
      navDispatch({ type: "set-a-field-touched", payload: true });
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
            value={opinion.coverOpinion}
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
              checked={nav.isShowAdvancedEdit.cover}
              onChange={updateAdvanced}
            />
          </div>

          {nav.isShowAdvancedEdit.cover && (
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
