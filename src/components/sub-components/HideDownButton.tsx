import { IconButton } from "@mui/material";
import c from "../../styles/HideDownButton.module.scss";
import clsx from "clsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setIsShowEditPanelMobile } from "../../redux/navigation-slice";
export default function HideDownButton() {
  const { isShowEditPanel } = useSelector((state: RootState) => state.navigation);;
  const dispatch = useDispatch();

  function setIsShowEditPanel() {
    dispatch(setIsShowEditPanelMobile(!isShowEditPanel.mobile));
  }

  return (
    <>
      <IconButton
        size="medium"
        aria-label="סגירת תפריט עריכה"
        onClick={setIsShowEditPanel}
        className={clsx(c.button)}
      >
        <KeyboardArrowDownIcon className={clsx(c.icon)} />
      </IconButton>
    </>
  );
}
