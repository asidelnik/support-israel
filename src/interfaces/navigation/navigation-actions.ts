import { CoverProfileBools } from "../interfaces";

type SetAFieldTouched = { type: "set-a-field-touched"; payload: boolean };

// type SetIsOnboardingActive = {
//   type: "set-is-onboarding-active";
//   payload: boolean;
// };

type SetIsShowTermsOfService = {
  type: "set-is-show-terms-of-service";
  payload: boolean;
};

type SetIsShowSiteMission = {
  type: "set-is-show-site-mission";
  payload: boolean;
};

type SetIsOpinionsUploaded = {
  type: "set-is-opinions-uploaded";
  payload: boolean;
};

type SetEditPanelActiveTab = {
  type: "set-edit-panel-active-tab";
  payload: number;
};

type SetIsShowEditPanelMobile = {
  type: "set-is-show-edit-panel-mobile";
  payload: boolean;
};

type SetIsShowEditPanelWeb = {
  type: "set-is-show-edit-panel-web";
  payload: boolean;
};

type SetIsShowAdvancedEdit = {
  type: "set-is-show-advanced-edit";
  payload: CoverProfileBools;
};

export type NavigationActions =
  | SetAFieldTouched
  //   | SetIsOnboardingActive
  | SetIsShowTermsOfService
  | SetIsShowSiteMission
  | SetIsOpinionsUploaded
  | SetEditPanelActiveTab
  | SetIsShowEditPanelMobile
  | SetIsShowEditPanelWeb
  | SetIsShowAdvancedEdit;
