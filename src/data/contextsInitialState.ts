import { DesignType } from "../interfaces/design/design-context-types";
import { NavigationType } from "../interfaces/navigation/navigation-context-types";
import { OpinionsType } from "../interfaces/opinions/opinions-context-types";
import { fontFamilyOptions } from "./initialState";

export const navigationInitialState: NavigationType = {
  aFieldTouched: false,
  isShowTermsOfService: false,
  isShowSiteMission: false,
  isOpinionsUploaded: false,
  editPanelActiveTab: 0,
  isShowEditPanel: {
    mobile: false,
    web: true,
  },
  isShowAdvancedEdit: {
    cover: false,
    profile: false,
  },
};

export const designInitialState: DesignType = {
  editPage: {
    backgroundColor: '#005EB8',
    sentenceBgColor: 'white',
    fontFamily:
      fontFamilyOptions.length > 0
        ? fontFamilyOptions[0].className
        : 'open-sans',

    profilePicture: {
      font: {
        emSize: 1.6,
        sliderSize: 16,
      },
      textColor: 'white',
    },
    textDirection: 'ltr',
  },
  cover: {
    font: {
      emSize: 2.8,
      sliderSize: 35,
    },
    textColor: '#005EB8',
    isShowTextBackground: true,
    textDirection: 'ltr',
  },
};

export const opinionsInitialState: OpinionsType = {
  uploadedProfileImageUrl: '',
  coverOpinion: '✡ Stand with Israel ✡',
  profileOpinion: 'Israel',
};
