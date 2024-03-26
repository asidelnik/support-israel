import { IconButton } from "@mui/material";
import c from "../../styles/EditButton.module.scss";
import clsx from "clsx";
import EditIcon from "@mui/icons-material/Edit";
import { EditMenuParent } from "../../interfaces/enums";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setEditPanelActiveTab, setIsShowEditPanelMobile } from "../../redux/navigation-slice";

type EditButtonProps = {
  //   direction: number;
  parent: EditMenuParent;
};

export default function EditButton({ parent }: EditButtonProps) {
  const { isShowEditPanel } = useSelector((state: RootState) => state.navigation);
  const dispatch = useDispatch();

  function setIsShowEditPanel() {
    dispatch(setEditPanelActiveTab(parent === EditMenuParent.Cover ? 0 : 1));
    dispatch(setIsShowEditPanelMobile(!isShowEditPanel.mobile));
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
