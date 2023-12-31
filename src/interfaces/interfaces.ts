import { EditMenuParent } from "./enums";

export interface FontType {
  family: string;
  emSize: number;
  sliderSize: number;
}

export interface FontSizeType {
  emSize: number;
  sliderSize: number;
}

export interface SelectOption {
  className: string;
  selectValue: string;
}

export interface ProfilePictureDesignType {
  font: FontSizeType;
  textColor: string;
}

export interface EditPageDesignType {
  backgroundColor: string;
  sentenceBgColor: string;
  fontFamily: string;
  profilePicture: ProfilePictureDesignType;
  textDirection: string;
}

export interface ParentType {
  parent: EditMenuParent;
}

export interface ImageDialogProps {
  open: boolean;
  onClose: () => void;
  imgSrc: string;
  imgAlt: string;
}

export interface TextDialogProps {
  open: boolean;
  onClose: () => void;
  child: JSX.Element;
}

export interface CoverType {
  font: FontSizeType;
  textColor: string;
  isShowTextBackground: boolean;
  textDirection: string;
}

export interface CoverThemeType {
  id: number;
  name: string;
  backgroundColor: string;
  font: FontType;
  textColor: string;
  profileTextColor: string;
  isShowTextBackground: boolean;
  coverText: string;
  profileText: string;
  sentenceBgColor: string;
  textDirection: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface MobileWebBools {
  mobile: boolean;
  web: boolean;
}

export interface CoverProfileBools {
  cover: boolean;
  profile: boolean;
}
