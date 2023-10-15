import { IconButton } from "@mui/material";
import c from "../../styles/EditButton.module.scss";
import clsx from "clsx";
import {
  useNavigation,
  useNavigationDispatch,
} from "../../contexts/navigation-context";
import EditIcon from "@mui/icons-material/Edit";
import { EditMenuParent } from "../../interfaces/enums";
type EditButtonProps = {
  //   direction: number;
  parent: EditMenuParent;
};

export default function EditButton({ parent }: EditButtonProps) {
  const nav = useNavigation();
  const navDispatch = useNavigationDispatch();

  function setIsShowEditPanel() {
    navDispatch({
      type: "set-edit-panel-active-tab",
      payload: parent === EditMenuParent.Cover ? 0 : 1,
    });

    navDispatch({
      type: "set-is-show-edit-panel-mobile",
      payload: !nav.isShowEditPanel.mobile,
    });
  }

  return (
    <>
      <IconButton
        size="medium"
        aria-label="הצגת תפריט עריכה"
        onClick={setIsShowEditPanel}
        className={clsx(c.button)}
      >
        <EditIcon className={clsx(c.iconLeft)} />
      </IconButton>
    </>
  );
}
