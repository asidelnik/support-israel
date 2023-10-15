import {
  CoverType,
  EditPageDesignType,
  FontSizeType,
  FontType,
} from "../interfaces";

type SetEditPageDesigns = {
  type: "set-edit-page-designs";
  payload: EditPageDesignType;
};
type SetCoverDesigns = { type: "set-cover-designs"; payload: CoverType };
type SetEditPageBackgroundColor = {
  type: "set-edit-page-background-color";
  payload: string;
};
type SetEditPageFontFamily = {
  type: "set-edit-page-font-family";
  payload: string;
};

// Cover
type SetCoverSentenceBgColor = {
  type: "set-cover-sentence-bg-color";
  payload: string;
};
type SetCoverFont = {
  type: "set-cover-font";
  payload: FontSizeType;
};

type SetCoverTextColor = {
  type: "set-cover-text-color";
  payload: string;
};

type SetCoverIsShowTextBackground = {
  type: "set-cover-is-show-text-background";
  payload: boolean;
};

// Profile
type SetProfilePictureTextColor = {
  type: "set-profile-picture-text-color";
  payload: string;
};

type SetProfileFontSize = {
  type: "set-profile-font-size";
  payload: FontType;
};

export type DesignActions =
  | SetEditPageDesigns
  | SetCoverDesigns
  | SetEditPageBackgroundColor
  | SetEditPageFontFamily
  | SetCoverSentenceBgColor
  | SetCoverFont
  | SetCoverTextColor
  | SetCoverIsShowTextBackground
  | SetProfilePictureTextColor
  | SetProfileFontSize;
