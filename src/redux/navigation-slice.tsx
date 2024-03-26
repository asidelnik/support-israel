import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navigationInitialState } from "../data/contextsInitialState";
import { NavigationType } from "../interfaces/navigation/navigation-context-types";
import { CoverProfileBools } from "../interfaces/interfaces";

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: navigationInitialState,
  reducers: {
    setAFieldTouched: (state: NavigationType, action: PayloadAction<boolean>) => {
      state.aFieldTouched = action.payload;
    },
    setIsShowTermsOfService: (state: NavigationType, action: PayloadAction<boolean>) => {
      state.isShowTermsOfService = action.payload;
    },
    setIsShowSiteMission: (state: NavigationType, action: PayloadAction<boolean>) => {
      state.isShowSiteMission = action.payload;
    },
    setIsOpinionsUploaded: (state: NavigationType, action: PayloadAction<boolean>) => {
      state.isOpinionsUploaded = action.payload;
    },
    setEditPanelActiveTab: (state: NavigationType, action: PayloadAction<number>) => {
      state.editPanelActiveTab = action.payload;
    },
    setIsShowEditPanelMobile: (state: NavigationType, action: PayloadAction<boolean>) => {
      state.isShowEditPanel.mobile = action.payload;
    },
    setIsShowEditPanelWeb: (state: NavigationType, action: PayloadAction<boolean>) => {
      state.isShowEditPanel.web = action.payload;
    },
    setIsShowAdvancedEdit: (state: NavigationType, action: PayloadAction<CoverProfileBools>) => {
      state.isShowAdvancedEdit = action.payload;
    },
  }
})
export const {
  setAFieldTouched,
  setIsShowTermsOfService,
  setIsShowSiteMission,
  setIsOpinionsUploaded,
  setEditPanelActiveTab,
  setIsShowEditPanelMobile,
  setIsShowEditPanelWeb,
  setIsShowAdvancedEdit
} = navigationSlice.actions;
export default navigationSlice.reducer;


