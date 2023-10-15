import { DesignType } from "../interfaces/design/design-context-types";
import { NavigationType } from "../interfaces/navigation/navigation-context-types";
import { OpinionsType } from "../interfaces/opinions/opinions-context-types";
import { posterColorThemeOptions, fontFamilyOptions } from "./initialState";

export const navigationInitialState: NavigationType = {
  aFieldTouched: false,
  //   isOnboardingActive: true,
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
  posterColorTheme: posterColorThemeOptions[0].className,
  posterFont: {
    emSize: 1,
    sliderSize: 0,
  },
  editPage: {
    backgroundColor: "#005EB8",
    sentenceBgColor: "white",
    fontFamily:
      fontFamilyOptions.length > 0
        ? fontFamilyOptions[0].className
        : "open-sans",

    profilePicture: {
      font: {
        emSize: 1.6,
        sliderSize: 16,
      },
      textColor: "white",
    },
  },
  cover: {
    font: {
      emSize: 3.5,
      sliderSize: 35,
    },
    textColor: "#005EB8",
    isShowTextBackground: true,
  },
};

export const opinionsInitialState: OpinionsType = {
  opinionGroups: [
    {
      key: 0,
      title: "כריתת עצים",
      opinions: [
        {
          key: 0,
          text: "הגנה על עצים חיונית לשמירה על הסביבה ולהבטחת אוויר ומים נקיים יותר לאנשים לנשום ולצרוך.",
          isActive: true,
        },
        {
          key: 1,
          text: "עצים פועלים כמטהרי אוויר טבעיים, סופגים מזהמים מזיקים וגזי חממה, מה שעוזר למתן את ההשפעות של שינויי האקלים ומשפר את איכות האוויר הכוללת עבור קהילות.",
          isActive: true,
        },
        {
          key: 2,
          text: "שימור עצים באזורים עירוניים יכול להפחית משמעותית את אפקט אי החום העירוני, לספק צל וקירור לשכונות הסמוכות, מה שמוביל לתנאי מחיה נעימים יותר במזג אוויר חם.",
          isActive: true,
        },
        {
          key: 3,
          text: "לעצים תפקיד חיוני במניעת שחיקת קרקע ובשמירה על מערכות אקולוגיות בריאות, תורמים להגנה על בתי הגידול של חיות הבר והמגוון הביולוגי, החיוני לרווחתם של בני האדם ושאר היצורים החיים.",
          isActive: true,
        },
        {
          key: 4,
          text: "להגנה על עצים יש גם יתרונות כלכליים רבים, כמו הגברת ערכי הנכס, משיכת תיירות ומתן משאבים ברי קיימא לתעשיות כמו עצים וחקלאות, שבסופו של דבר תומכות בקהילות וכלכלות מקומיות.",
          isActive: true,
        },
      ],
    },
    {
      key: 1,
      title: "זיהום הים",
      opinions: [
        {
          key: 0,
          text: "שמירה על האוקיינוסים היא חשיבות עליונה לשמירה על המגוון הביולוגי הימי, הבטחת דיג בר קיימא ושמירה על מקור חיוני של מזון ופרנסה למיליוני אנשים ברחבי העולם.",
          isActive: true,
        },
        {
          key: 1,
          text: "הגנה על מערכות אקולוגיות ובתי גידול של האוקיינוסים לא רק מקיימת חיים ימיים אלא גם מועילה לבריאות האדם על ידי אספקת משאבים חיוניים כגון תרכובות פרמצבטיות ותרופות פוטנציאליות למחלות.",
          isActive: true,
        },
        {
          key: 2,
          text: "טיפול בהשפעות של זיהום פלסטיק ופעילויות מזיקות אחרות באוקיינוסים חיוני כדי למנוע השפעות שליליות על בריאות האדם, שכן מיקרו-פלסטיק ורעלים יכולים להיכנס לשרשרת המזון, ולהשפיע הן על המינים הימיים והן על האנשים הצורכים אותם.",
          isActive: true,
        },
        {
          key: 3,
          text: "אוקיינוסים בריאים פועלים כחיץ טבעי נגד שינויי אקלים, סופגים כמויות אדירות של פחמן דו חמצני, מה שעוזר להפחית את השפעתו על האקלים העולמי ומגן על קהילות החוף מפני אירועי מזג אוויר קיצוניים כמו סופות הוריקן ונחשולי סערה.",
          isActive: true,
        },
      ],
    },
  ],
  uploadedProfileImageUrl: "",
  coverOpinion: "✡&nbsp;Stand with Israel&nbsp;✡",
  profileOpinion: "✡&nbsp;תקווה",
};
