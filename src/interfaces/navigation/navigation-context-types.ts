import { ReactNode } from "react";
import { CoverProfileBools, MobileWebBools } from "../interfaces";

export type NavigationContextProviderProps = {
  children: ReactNode;
};

export interface NavigationType {
  aFieldTouched: boolean;
  //   isOnboardingActive: boolean;
  isShowTermsOfService: boolean;
  isShowSiteMission: boolean;
  isOpinionsUploaded: boolean;
  editPanelActiveTab: number;
  isShowEditPanel: MobileWebBools;
  isShowAdvancedEdit: CoverProfileBools;
}
