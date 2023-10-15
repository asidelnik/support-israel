import {
  CoverThemeType,
  //   OnboardingStep,
  SelectOption,
} from "../interfaces/interfaces";

////// Poster
export const posterColorThemeOptions: SelectOption[] = [
  {
    className: "vibrant",
    selectValue: "אנרגטי",
  },
  {
    className: "light",
    selectValue: "בהיר",
  },
  {
    className: "dark",
    selectValue: "כהה",
  },
  {
    className: "calm",
    selectValue: "רגוע",
  },
];

// Unused code
export const fontFamilyOptions: SelectOption[] = [
  {
    className: "open-sans",
    selectValue: "אופן סאנס",
  },
  {
    className: "suez-one",
    selectValue: "סאווז וואן",
  },
  {
    className: "noto-serif-hebrew",
    selectValue: "נוטו סריף עברית",
  },
  {
    className: "david-libre",
    selectValue: "דוד ליברה",
  },
  {
    className: "karantina",
    selectValue: "קרנטינה",
  },
  {
    className: "archivo-narrow",
    selectValue: "Archivo-Narrow",
  },
];

export const colorInputColors = [
  "#005EB8",
  "#ffff00",
  "#ffffff",
  "#000000",
  "#FF0000",
  "#8B5CF6",
  "#EC4899",
  "#F97316",
  "#4CAF50",
];

export const coverThemes: CoverThemeType[] = [
  {
    id: 1,
    name: "stand",
    backgroundColor: "#005EB8",
    font: {
      family: "open-sans",
      emSize: 3.5,
      sliderSize: 35,
    },
    textColor: "#005EB8",
    profileTextColor: "#ffffff",
    isShowTextBackground: true,
    sentenceBgColor: "#ffffff",
    coverText: "✡ Stand with Israel ✡",
    profileText: "Israel",
  },
  {
    id: 2,
    name: "hope",
    backgroundColor: "#ffff00",
    font: {
      family: "suez-one",
      emSize: 5,
      sliderSize: 60,
    },
    textColor: "#000000",
    profileTextColor: "#000000",
    isShowTextBackground: false,
    sentenceBgColor: "#ffffff",
    coverText: "לא מאבדת תקווה",
    profileText: "✡ תקווה",
  },
  {
    id: 3,
    name: "win",
    backgroundColor: "#4caf50",
    font: {
      family: "open-sans",
      emSize: 5,
      sliderSize: 60,
    },
    textColor: "#ffffff",
    profileTextColor: "#ffffff",
    isShowTextBackground: false,
    sentenceBgColor: "#ffffff",
    coverText: "עם ישראל ינצח",
    profileText: "ננצח",
  },
  {
    id: 4,
    name: "support",
    backgroundColor: "#ff007c",
    font: {
      family: "open-sans",
      emSize: 4,
      sliderSize: 40,
    },
    textColor: "#ff007c",
    profileTextColor: "#ffffff",
    isShowTextBackground: true,
    sentenceBgColor: "#ffffff",
    coverText: "Support Israel",
    profileText: "Support",
  },
  {
    id: 5,
    name: "love",
    backgroundColor: "#000000",
    font: {
      family: "karantina",
      emSize: 7,
      sliderSize: 60,
    },
    textColor: "#FF0000",
    profileTextColor: "#FF0000",
    isShowTextBackground: false,
    sentenceBgColor: "#ffffff",
    coverText: "IsraeLove",
    profileText: "Israel",
  },
  {
    id: 6,
    name: "jlm",
    backgroundColor: "#00d1ff",
    font: {
      family: "open-sans",
      emSize: 6,
      sliderSize: 40,
    },
    textColor: "#ffffff",
    profileTextColor: "#ffffff",
    isShowTextBackground: false,
    sentenceBgColor: "#00d1ff",
    coverText: "Jewish Lives Matter",
    profileText: "JLM",
  },
  {
    id: 7,
    name: "freedom",
    backgroundColor: "#ffffff",
    font: {
      family: "open-sans",
      emSize: 4,
      sliderSize: 60,
    },
    textColor: "#005EB8",
    profileTextColor: "#005EB8",
    isShowTextBackground: false,
    sentenceBgColor: "#005EB8",
    coverText: "Free the hostages",
    profileText: "Freedom",
  },
  {
    id: 8,
    name: "resist",
    backgroundColor: "#f04539",
    font: {
      family: "archivo-narrow",
      emSize: 8,
      sliderSize: 40,
    },
    textColor: "#ffff00",
    profileTextColor: "#ffff00",
    isShowTextBackground: false,
    sentenceBgColor: "#ffffff",
    coverText: "Resist Terror",
    profileText: "RESIST",
  },
  {
    id: 9,
    name: "united",
    backgroundColor: "#2082ff",
    font: {
      family: "open-sans",
      emSize: 4.5,
      sliderSize: 60,
    },
    textColor: "#0d386e",
    profileTextColor: "#ffffff",
    isShowTextBackground: false,
    sentenceBgColor: "#000000",
    coverText: "מאוחדים",
    profileText: "אחדות",
  },
  {
    id: 10,
    name: "thankyou",
    backgroundColor: "#b400ff",
    font: {
      family: "suez-one",
      emSize: 6,
      sliderSize: 60,
    },
    textColor: "#ffffff",
    profileTextColor: "#ffffff",
    isShowTextBackground: false,
    sentenceBgColor: "#ffffff",
    coverText: "תודה לגיבורי ישראל",
    profileText: "תודה",
  },
  {
    id: 11,
    name: "front",
    backgroundColor: "#FF0000",
    font: {
      family: "david-libre",
      emSize: 4,
      sliderSize: 50,
    },
    textColor: "#ffffff",
    profileTextColor: "#ffffff",
    isShowTextBackground: false,
    sentenceBgColor: "#ffffff",
    coverText: "תומכת בחזית",
    profileText: "החזית",
  },
  {
    id: 12,
    name: "biden",
    backgroundColor: "#000000",
    font: {
      family: "noto-serif-hebrew",
      emSize: 4,
      sliderSize: 40,
    },
    textColor: "#000000",
    profileTextColor: "#ffffff",
    isShowTextBackground: true,
    sentenceBgColor: "#ffffff",
    coverText: "Thank you President Biden ❤",
    profileText: "Biden ❤",
  },
  {
    id: 13,
    name: "hamas1",
    backgroundColor: "#000000",
    font: {
      family: "noto-serif-hebrew",
      emSize: 4,
      sliderSize: 40,
    },
    textColor: "#000000",
    profileTextColor: "#ffffff",
    isShowTextBackground: true,
    sentenceBgColor: "#ffffff",
    coverText: "Hamas = ISIS",
    profileText: "Enough",
  },
  {
    id: 14,
    name: "hamas2",
    backgroundColor: "#000000",
    font: {
      family: "noto-serif-hebrew",
      emSize: 4,
      sliderSize: 40,
    },
    textColor: "#000000",
    profileTextColor: "#ffffff",
    isShowTextBackground: true,
    sentenceBgColor: "#ffffff",
    coverText: "#HamasIsISIS",
    profileText: "Enough",
  },
];


/*
I Stand with Israel - אני עומד עם ישראל
לא מאבדת תקווה
עם ישראל ינצח
Support Israel
IsraeLove - Love
Jews Lives Matter - חיי יהודים חשובים
Free the hostages - שחררו את השבויים
Resist Terror - להתנגד לטרור
United - מאוחדים
תודה לגיבורי ישראל
תומכת בחזית
Thank you President Biden ❤

I support the soldiers
אני תומך בחיילים


Hamas = ISIS
HamasisISIS


*/