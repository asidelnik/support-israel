import { IconButton } from "@mui/material";
import c from "../../styles/HideDownButton.module.scss";
import clsx from "clsx";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HideDownButton() {
  const navDispatch = useNavigationDispatch();
  const nav = useNavigation();

  function setIsShowEditPanel() {
    navDispatch({
      type: "set-is-show-edit-panel-mobile",
      payload: !nav.isShowEditPanel.mobile,
    });
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
