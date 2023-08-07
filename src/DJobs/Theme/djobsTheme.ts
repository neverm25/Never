import {
  globalColors,
  globalEffects,
  globalGradients,
  globalText,
} from "@Global/Theme";
import { DjobsTheme } from "./styled";

const MAIN_FONT = "Montserrat, sans-serif";
const SECONDARY_FONT = "Roboto, sans-serif";
const LEXEND_FONT = "Lexend, sans-serif";
const POPPINS_FONT = "Poppins, sans-serif";

export const djobsColors: DjobsTheme.DjobsColors = {
  dittoBlue: "#1E96F2",
  textDefault: "#98A7BC",
  textDarker: "#495F84",
  grey10: "#DCDBDB",
  black110: "#000000",
  black30: "#F9F9F9",
  black40: "#00000014",
  black95: "#34374D",
  blue20: "#5D6C78",
  blue30: "#4DAAEE4D",
  blue40: "#CAE6FA",
  blue70: "#4C4866",
  blue80: "#58B4FA",
  blue90: "#495F84",
  blue200: "#2C568D",
  blue100: "#1E96F2",

  purple50: "#D5CBFF",

  grey20: "#88919A",

  blueGrey90: "#8096AA",

  darkBlueGrey: "#4D6975",
  black05: "#d6deed90",
  inputBg: "#F9F9F9",
  white90: "#F9FAFC",
  specialGreen: "#40C6B6",
  countryHoverBackground: "rgba(217, 217, 217, 0.5)",
  InputFilledBorder: `rgba(64, 198, 182, 0.21)`,
  horizontalLineColor: "#C4C4C4",
};

const colors: DjobsTheme.DjobsColorsWithGlobal = {
  ...globalColors,
  ...djobsColors,
};

export const djobsGradients: DjobsTheme.DjobsGradients = {
  purple20: `linear-gradient(306.32deg, rgba(255, 255, 255, 0.8217) 65.18%, rgba(255, 255, 255, 0) 115.64%), radial-gradient(1113.38% 1330.92% at 133.84% -55.84%, rgba(176, 222, 240, 0.08) 0%, rgba(108, 214, 255, 0.172) 0.01%, rgba(134, 153, 255, 0.2) 54.69%, rgba(120, 91, 234, 0.2) 100%) , linear-gradient(0deg, #F2F5FF, #F2F5FF), #FFFFFF`,
  jobInsideAccent: `linear-gradient( 306.32deg,rgba(255, 255, 255, 0.8217) 65.18%,rgba(255, 255, 255, 0) 115.64%),radial-gradient(1113.38% 1330.92% at 133.84% -55.84%,rgba(176, 222, 240, 0.184) 0%,rgba(108, 214, 255, 0.3956) 0.01%,rgba(134, 153, 255, 0.46) 54.69%,rgba(120, 91, 234, 0.46) 100%),linear-gradient(0deg, #f2f5ff, #f2f5ff),linear-gradient(0deg, #ffffff, #ffffff)`,
  red100: `linear-gradient(42.65deg, #F3C9DB -13.19%, #B33746 20.83%, #E91145 53.75%, #F2819C 91.07%);`,
  jobViewAccent:
    "linear-gradient(41deg, #785BEA -14.35%, rgba(249, 252, 253, 0.21241) 102.98%, rgba(250, 253, 254, 0.203678) 106.59%, rgba(224, 240, 247, 0.4) 113.44%, rgba(255, 255, 255, 0.17) 120.54%, rgba(255, 255, 255, 0.17) 120.54%), linear-gradient(50deg, #4490EA -29.94%, #785BEA -8.37%, rgba(144, 163, 245, 0.83) 3.08%, rgba(52, 138, 238, 0.38) 13.39%, rgba(255, 255, 255, 0) 45%), #FFFFFF",
  aditionalAccent: ` linear-gradient(#F9FAFC 0 0) padding-box,
  linear-gradient(210deg, #3580c6, #26ade2, #504edb, #9f71e9) border-box`,
  dragAndDropHover: `linear-gradient(0deg, rgba(201, 255, 203, 0.3), rgba(201, 255, 203, 0.3)), #FFFFFF`,
  homeMobileGradient: `linear-gradient(14.95deg, #785BEA -3.59%, rgba(249, 252, 253, 0.21241) 34.9%, rgba(250, 253, 254, 0.203678) 36.08%, rgba(255, 255, 255, 0.17) 40.66%, rgba(255, 255, 255, 0.17) 40.66%), linear-gradient(301.64deg, #4490EA -29.94%, #785BEA -8.37%, rgba(144, 163, 245, 0.83) 3.08%, rgba(52, 138, 238, 0.38) 13.39%, rgba(255, 255, 255, 0) 45%), #FFFFFF`,
  countrySelectorPopup: `radial-gradient(112.63% 96.46% at 101.52% 89.96%, #9747ff 0%, #58b4fa 100% );`,
  searchPopupcontainer: `linear-gradient(41deg, #785BEA -14.35%, rgba(249, 252, 253, 0.21241) 102.98%, rgba(250, 253, 254, 0.203678) 106.59%, rgba(224, 240, 247, 0.4) 113.44%, rgba(255, 255, 255, 0.17) 120.54%, rgba(255, 255, 255, 0.17) 120.54%), linear-gradient(301.64deg, #4490EA -29.94%, #785BEA -8.37%, rgba(144, 163, 245, 0.83) 3.08%, rgba(52, 138, 238, 0.38) 13.39%, rgba(255, 255, 255, 0) 45%), #FFFFFF;`,
  djsearchPopupcontainer: `linear-gradient(306.32deg, rgba(255, 255, 255, 0.8217) 65.18%, rgba(255, 255, 255, 0) 115.64%), radial-gradient(1113.38% 1330.92% at 133.84% -55.84%, rgba(176, 222, 240, 0.184) 0%, rgba(108, 214, 255, 0.3956) 0.01%, rgba(134, 153, 255, 0.46) 54.69%, rgba(120, 91, 234, 0.46) 100%) , linear-gradient(0deg, #F2F5FF, #F2F5FF), #FFFFFF;`,
  disabledBg: `linear-gradient(0deg, rgba(160, 213, 252, 0.2), rgba(160, 213, 252, 0.2)), #FFFFFF`,
  blue80: `linear-gradient(135deg, #A8DAF2 0%, #58B4FA 100%);`,
};
const gradients: DjobsTheme.DjobsGradientsWithGlobal = {
  ...globalGradients,
  ...djobsGradients,
};

export const djobsText: DjobsTheme.DjobsText = {
  accordianSubTitle: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "14px",
      letterSpacing: "0em",
    },
  },
  djErrorPageTitle: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "31px",
      fontWeight: 800,
      lineHeight: "37px",
      letterSpacing: "-0.30000001192092896px",
    },
    lg: {
      fontSize: "70px",
      letterSpacing: "0em",
    },
    xl: {
      lineHeight: "44px",
    },
  },
  djErrorPageRegular: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0px",
      textAlign: "center",
    },
    lg: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "28px",
      letterSpacing: "0.19983965158462524px",
      textAlign: "center",
    },
  },
  djAdInputLabel: {
    sm: {
      fontFamily: MAIN_FONT,
      fontWeight: 300,
      fontSize: "10px",
      letterSpacing: "0.3px",
    },
  },
  djCareerNotFoundMsg: {
    sm: {
      fontFamily: "montserrat",
      fontWeight: "500",
      fontSize: "14px",
    },
  },
  djAdInputData: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "10px",
      fontWeight: "700",
      letterSpacing: "0.3px",
      wordBreak: "break-word",
    },
  },
  djAdSubTitleThree: {
    sm: {
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "24px",
    },
  },
  djInputRegular: {
    sm: {
      name: "djInputRegular",
      fontFamily: SECONDARY_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0.03em",
    },
  },
  djTitleCase: {
    sm: {
      name: "TitleCase",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.03em",
    },
  },
  djHeaderInputInitial: {
    sm: {
      name: "HeaderInputInitial",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "15px",
      lineHeight: "18px",
      letterSpacing: "0.03em",
    },
  },
  djPlaceholder: {
    sm: {
      name: "djPlaceholder",
      fontFamily: SECONDARY_FONT,
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "0.03em",
    },
  },
  djTitleOne: {
    sm: {
      name: "title one",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "18px",
    },
    md: {
      name: "title one",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "35px",
      lineHeight: "44px",
    },
    lg: {
      name: "title one",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "30px",
      lineHeight: "19px",
    },
    xl: {
      fontFamily: MAIN_FONT,
      fontSize: "30px",

      fontWeight: "400",
      lineHeight: "42px",
      letterSpacing: "0.30000001192092896px",
      textAlign: "left",
    },
  },
  djButtonNext: {
    sm: {
      fontFamily: SECONDARY_FONT,
      fontSize: "13px",
      fontWeight: 800,
      lineHeight: "27px",
      letterSpacing: "0.30000001192092896px",
    },
  },
  djTitleTwo: {
    sm: {
      name: "title two",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "21px",
    },
    md: {
      name: "title two",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "26px",
      letterSpacing: "0.3px",
    },
  },
  djTitleThree: {
    sm: {
      name: "title three",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "22px",
      lineHeight: "56px",
      letterSpacing: "-0.7px",
    },
    md: {
      name: "title three",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "22px",
    },
    lg: {
      fontFamily: LEXEND_FONT,
      fontSize: "15px",
      fontWeight: "700",
      lineHeight: "21px",
      letterSpacing: "0.05em",
      textAlign: "left",
    },
  },
  djSubTitleOne: {
    sm: {
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "19px",
      lineHeight: "27px",
      letterSpacing: "0.03em",
    },
    md: {
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "0.19984px",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "24px",
      lineHeight: "28px",
    },
    xl: {
      lineHeight: "29px",
      letterSpacing: "1.19984px",
    },
  },
  djSubTitleTwo: {
    sm: {
      name: "subtitle two",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "21px",
      letterSpacing: "1.19984px",
    },
    lg: {
      fontSize: "20px",
      lineHeight: "22px",
      letterSpacing: "0.331579px",
    },
  },

  djSubTitleThree: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "15px",
      fontWeight: 600,
      lineHeight: "14px",
      letterSpacing: "0.012em",
      textAlign: "left",
    },

    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "15px",
      fontWeight: 600,
      lineHeight: "14px",
      letterSpacing: "0.012em",
      textAlign: "left",
      textTransform: "capitalize",
    },
  },
  djSubTitleFour: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "15px",
      fontWeight: 700,
      lineHeight: "17px",
      letterSpacing: "0em",
    },
  },
  djSubTitleSix: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "11px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0.02em",
    },
    lg: {
      lineHeight: "14px",
    },
  },
  djApplyButton: {
    sm: {
      name: "apply button",
      fontFamily: SECONDARY_FONT,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "14px",
      letterSpacing: "0.01em",
      textTFransform: "uppercase",
    },
  },

  djHeadingSix: {
    sm: {
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "0em",
    },
    md: {
      fontFamily: MAIN_FONT,
      fontSize: "22px",
      fontWeight: 800,
      lineHeight: "32px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "24px",
      fontWeight: 800,
      lineHeight: "32px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  djCloseAccountText: {
    sm: {
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "20px",
      lineHeight: "22px",
      letterSpacing: "0em",
    },
    md: {
      fontFamily: MAIN_FONT,
      fontSize: "24px",
      fontWeight: 800,
      lineHeight: "32px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    lg: {
      fontFamily: LEXEND_FONT,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "15px",
      letterSpacing: "0em",
      textAlign: "left",
    },
  },
  djBodySmall: {
    sm: {
      name: "body small",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "11px",
      lineHeight: "14px",
    },
    lg: {
      name: "body small",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "11px",
      lineHeight: "14px",
      textTransform: "uppercase",
    },
  },
  djIconText: {
    sm: {
      name: "icon text",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "14px",
      textTransform: "capitalize",
    },
    lg: {
      name: "icon text",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "14px",
      textTransform: "capitalize",
    },
  },
  djBodyRegular: {
    sm: {
      name: "body regular",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "25px",
      letterSpacing: "0.03em",
    },
    lg: {
      name: "body regular",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "23px",
      letterSpacing: "0.03em",
    },
  },
  djBody: {
    sm: {
      name: "body",
      fontFamily: MAIN_FONT,
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "16px",
      letterSpacing: "0em",
    },
  },
  djRegular: {
    sm: {
      name: "body regular",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "18px",
      letterSpacing: "0.03em",
    },
    lg: {
      name: "body regular",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0.03em",
    },
  },
  djIconPrefixRegular: {
    sm: {
      name: "icon prefix regular",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "11px",
      lineHeight: "12px",
    },
    lg: {
      name: "icon prefix regular",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
    },
    xl: {
      name: "icon prefix regular",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "14px",
    },
  },
  djTagsRegular: {
    sm: {
      name: "tags regular",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "13px",
      lineHeight: "15px",
    },
    lg: {
      name: "tags regular",
      fontFamily: SECONDARY_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
  djHeadingOne: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "20px",
      fontWeight: 800,
      lineHeight: "22px",
      letterSpacing: "0em",
    },
    md: {
      fontSize: "32px",
      lineHeight: "44px",
    },
  },
  djHeadingTwo: {
    sm: {
      name: "heading two",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "24px",
      lineHeight: "32px",
    },
    lg: {
      letterSpacing: "0em",
    },
  },
  djHeadingThree: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "21px",
      fontStyle: "normal",
    },
    md: {
      fontSize: "15px",
      lineHeight: "20px",
      letterSpacing: "0.05em",
    },
    lg: {
      fontSize: "18px",
      lineHeight: "24px",
    },
    xl: {
      fontSize: "16px",
      lineHeight: "20px",
    },
  },
  djUploadDocText: {
    sm: {
      name: "upload doc text",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "0.3px",
    },
  },
  djHeadingFour: {
    sm: {
      fontFamily: MAIN_FONT,
      fontWeight: "600",
      fontSize: "17px",
      lineHeight: "21px",
      letterSpacing: "0",
    },
  },
  djSubHeadingTwo: {
    sm: {
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0em",
    },
    lg: {
      fontSize: "16px",
      lineHeight: "26px",
    },
    xl: {
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "21px",
      lineHeight: "26px",
    },
  },
  djSubHeadingThree: {
    sm: {
      name: "sub heading three",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: 900,
      fontSize: "11px",
      lineHeight: "32px",
      letterSpacing: "0.333419px",
    },
  },
  djUploadFileText: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "0.03em",
    },
    lg: {
      fontSize: "13px",
    },
  },
  djUploadFileTextGif: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "10px",
      lineHeight: "9px",
      letterSpacing: "0.03em",
    },
    lg: {
      fontSize: "11px",
    },
  },
  djUploadFileSizeText: {
    sm: {
      name: "Dj upload file size",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "19px",
      letterSpacing: "0.03em",
    },
    lg: {
      name: "Dj upload file size",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "10px",
      letterSpacing: "0.03em",
    },
  },
  djCapsRegular: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "11px",
      fontWeight: 600,
      lineHeight: "14px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
  },
  djCapsSmall: {
    sm: {
      name: "caps small",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "11px",
      lineHeight: "14px",
      textTransform: "uppercase",
      letterSpacing: "0.02em",
    },
  },
  djButtonText: {
    sm: {
      name: "button text",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "13px",
      lineHeight: "14px",
      letterSpacing: " 0.01em",
      textTransform: "uppercase",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "13px",
      lineHeight: "26px",
    },
  },
  djSignButtonText: {
    sm: {
      name: "button text",
      fontFamily: SECONDARY_FONT,
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "14px",
      letterSpacing: " 0.01em",
    },
  },
  djSmall: {
    sm: {
      name: "small",
      fontFamily: LEXEND_FONT,
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "14px",
    },
  },
  djSmallText: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "9px",
      lineHeight: "14px",
      letterSpacing: "0.3px",
    },
  },
  djCardStamp: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "14px",
      letterSpacing: "0em",
      textAlign: "left",
      textTransform: "uppercase",
    },
  },
  djStamp: {
    sm: {
      name: "stamp",
      fontFamily: LEXEND_FONT,
      fontWeight: "300",
      fontSize: "10px",
      lineHeight: "12px",
      textTransform: "uppercase",
    },
    md: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "9px",
      lineHeight: "12px",

      textTransform: "uppercase",
    },
    lg: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "10px",
      lineHeight: "14px",

      textTransform: "uppercase",
    },
    xl: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "11px",
      lineHeight: "14px",

      textTransform: "uppercase",
    },
  },
  djLocation: {
    sm: {
      name: "location text",
      fontFamily: LEXEND_FONT,
      fontWeight: "400",
      fontSize: "11.0214px",
      lineHeight: "15px",
      letterSpacing: "0.2px",
      textTransform: "uppercase",
    },
    lg: {
      fontSize: "14px",
      lineHeight: "19px",
    },
  },
  djLinkBold: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "15px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
    md: {
      fontFamily: LEXEND_FONT,
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "18px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
    lg: {
      fontFamily: LEXEND_FONT,
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "18px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
  },
  djLinkSmall: {
    sm: {
      name: "link small",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.03em",
    },
    lg: {
      fontSize: "14px",
    },
  },
  djLinkRegular: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
  },
  djBackButtonText: {
    sm: {
      name: "back button text",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "13px",
      lineHeight: "26px",
      letterSpacing: "0.3px",
    },
  },
  djHeaderTwo: {
    sm: {
      name: "back button text",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "26px",
      letterSpacing: "0.3px",
    },
  },
  djBold: {
    sm: {
      name: "bold",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "17px",
      lineHeight: "18px",
    },
  },
  djHeadMenu: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      letterSpacing: "0.03em",
      textTransform: "lowercase",
    },
    lg: {
      fontSize: "19px",
      lineHeight: "24px",
    },
  },
  djCapitalBold: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "13px",
      fontWeight: "800",
      lineHeight: "15px",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
    },
  },
  djButtonIcon: {
    sm: {
      fontFamily: SECONDARY_FONT,
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "11px",
      lineHeight: "16px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
  },
  djTextExtraSmallRegular: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "15px",
      letterSpacing: "0.30000001192092896px",
      textAlign: "left",
    },
  },
  djTextBold: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "14px",
      letterSpacing: "0.03em",
    },
    md: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "14px",
      letterSpacing: "0.03em",
    },
    lg: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "0.03em",
    },
  },
  djLexendRegularCaps: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "11px",
      lineHeight: "17px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    },
  },
  djLexendBoldCaps: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "11px",
      lineHeight: "17px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
  },
  djCardsCompanyAlt: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "15px",
      letterSpacing: "0.4px",
    },
    lg: {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  djCardsTitle: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "12px",
      fontWeight: 800,
      lineHeight: "16px",
      letterSpacing: "0.01em",
    },
    md: {
      fontFamily: MAIN_FONT,
      fontSize: "12px",
      fontWeight: 800,
      lineHeight: "22px",
      letterSpacing: "0em",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "18px",
      fontWeight: 800,
      lineHeight: "22px",
      letterSpacing: "0em",
    },
  },

  djCardsCompany: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontWeight: 500,
      fontSize: "9px",
      lineHeight: "9px",
      letterSpacing: "0em",
    },
    md: {
      fontFamily: LEXEND_FONT,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "12px",
      letterSpacing: "0.02em",
    },
    lg: {
      fontFamily: LEXEND_FONT,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "12px",
      letterSpacing: "0.02em",
    },
  },
  djForms: {
    sm: {
      fontFamily: MAIN_FONT,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "0.3px",
      marginBottom: "20px",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "0.3px",
    },
    xl: {
      fontFamily: MAIN_FONT,
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "28px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
  },
  djIconsText: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "10px",
      lineHeight: "12px",
      textTransform: "capitalize",
    },
    md: {
      fontFamily: LEXEND_FONT,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "14px",
      letterSpacing: "0em",
    },
    lg: {
      fontFamily: LEXEND_FONT,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "14px",
      letterSpacing: "0em",
    },
  },
  djIcons: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "14px",
      letterSpacing: "0em",
    },
  },
  djTextRegular: {
    sm: {
      fontFamily: POPPINS_FONT,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "13px",
      lineHeight: "169%",
      letterSpacing: "0.04em",
    },
    lg: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "19px",
    },
    xl: {
      fontSize: "15px",
      lineHeight: "24px",
    },
  },
  djTextMedium: {
    sm: {
      fontFamily: POPPINS_FONT,
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: "22px",
      letterSpacing: "0.04em",
    },
  },
  djAlertDescription: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "15px",
      letterSpacing: "0.3 px",
    },
    lg: {
      fontFamily: LEXEND_FONT,
      fontWeight: "400",
      fontSize: "10px",
      lineHeight: "15px",
      letterSpacing: "0.3px",
    },
  },
  djPillTitle: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "27px",
      letterSpacing: "0.3px",
      textAlign: "left",
    },
  },
  djPillBold: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "15px",
      letterSpacing: "0em",
      textAlign: "center",
    },
  },
  djPillRegular: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "11px",
      fontWeight: 400,
      lineHeight: "13px",
      letterSpacing: "0em",
    },
  },
  djPillLabel: {
    sm: {
      fontFamily: SECONDARY_FONT,
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "13px",
      letterSpacing: "0em",
      textAlign: "center",
      textTransform: "capitalize",
    },
    md: {
      fontFamily: SECONDARY_FONT,
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "13px",
      letterSpacing: "0em",
      textAlign: "center",
      textTransform: "capitalize",
    },
    lg: {
      fontFamily: SECONDARY_FONT,
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "13px",
      letterSpacing: "0em",
      textAlign: "center",
      textTransform: "capitalize",
    },
    xl: {
      fontFamily: SECONDARY_FONT,
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "15px",
      letterSpacing: "0em",
      textAlign: "center",
      textTransform: "capitalize",
    },
  },
  djInputLabel: {
    sm: {
      fontFamily: MAIN_FONT,

      textAlign: "left",

      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "18px",

      letterSpacing: "0.012em",
    },

    md: {
      fontFamily: MAIN_FONT,

      textAlign: "left",

      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "19px",

      letterSpacing: "0.012em",
    },
  },
  djInputPlaceholder: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "14px",
      fontStyle: "italic",
      fontWeight: "400",
      lineHeight: "16px",
      letterSpacing: "0.03em",
    },
  },
  djInputRequiredLabel: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0em",
      textTransform: "capitalize",
    },
  },
  djInputValue: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "0em",
    },
  },
  djInputError: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "18px",
      letterSpacing: "0em",
    },
  },
  djSelectFieldOption: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "16px",
      letterSpacing: "0.04em",
    },
  },
  djTabDefault: {
    sm: {
      name: "tab default",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "13px",
      lineHeight: "13px",
    },
    lg: {
      name: "tab default",
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
  djActiveTabDefault: {
    sm: {
      name: "active tab default",
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: "13px",
      lineHeight: "13px",
      textDecoration: "underline",
    },
    lg: {
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
  djFileTitle: {
    sm: {
      fontFamily: SECONDARY_FONT,
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "10px",
      lineHeight: "12px",
      textTransform: "capitalize",
      letterSpacing: "0.2px",
    },
  },
  djFileSize: {
    sm: {
      fontFamily: SECONDARY_FONT,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "10px",
      lineHeight: "12px",
      letterSpacing: "-0.200202px",
    },
  },
  djFormsRegular: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "0.3px",
      textAlign: "left",
    },
    lg: {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  djReviewSubtitle: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "16px",
      fontWeight: "800",
      lineHeight: "21px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
  },
  djSuccessHeading: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "21px",
      letterSpacing: "0em",
    },
  },
  djSuccessSubHeading: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "14px",
      letterSpacing: "0em",
      textAlign: "center",
    },
  },
  candidateSettingHeadingOne: {
    sm: {
      fontStyle: "normal",
      fontFamily: MAIN_FONT,
      fontWeight: "800",
      fontSize: "32px",
      lineHeight: "40px",
    },
  },
  djForgotLinkRegular: {
    sm: {
      name: "forgot link regular small",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.03em",
      textDecoration: "underline",
    },
    lg: {
      name: "forgot link regular lg",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0.03em",
      textDecoration: "underline",
    },
  },
  djCloseLinkAllCaps: {
    sm: {
      name: "close link regular small",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "15px",
      letterSpacing: "0.03em",
      textDecoration: "underline",
      textTransform: "uppercase",
    },
    lg: {
      name: "close link regular lg",
      fontFamily: LEXEND_FONT,
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0.03em",
      textDecoration: "underline",
      textTransform: "uppercase",
    },
  },

  djLegalTabNavActive: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "13px",
      fontWeight: "900",
      lineHeight: "13px",
      letterSpacing: "0.09em",
      textAlign: "left",
    },
  },
  djcountryList: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "19px",
      fontWeight: "600",
      lineHeight: "23px",
      textAlign: "left",
    },
  },
  djTabNavDefault: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "13px",
      fontWeight: "800",
      lineHeight: "13px",
      letterSpacing: "0.09em",
      textAlign: "left",
    },
    md: {
      fontSize: "18px",
      lineHeight: "21px",
    },
    lg: {},
  },
  djTabNavActive: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "13px",
      fontWeight: "900",
      lineHeight: "13px",
      letterSpacing: "0.09em",
      textAlign: "left",
      textDecoration: "underline",
    },
    md: {
      fontSize: "18px",
      lineHeight: "21px",
    },
  },
  djLegalTabNavDefault: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "13px",
      fontWeight: "700",
      lineHeight: "18px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
    md: {
      fontFamily: MAIN_FONT,
      fontSize: "15px",
      fontWeight: "700",
      lineHeight: "18px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "18px",
      letterSpacing: "0.03em",
      textAlign: "left",
    },
  },
  djIconRegular: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "12px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    lg: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "14px",
    },
  },
  djCookiesHeading: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "18px",
      fontWeight: "800",
      lineHeight: "22px",
      textAlign: "center",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "24px",
      fontWeight: "800",
      lineHeight: "32px",
      textAlign: "center",
    },
  },
  djCountText: {
    sm: {
      fontFamily: SECONDARY_FONT,
      fontSize: "13px",
      fontWeight: 900,
      lineHeight: "15px",
      letterSpacing: "0.04em",
      textAlign: "center",
    },
  },
  djModal: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "25px",
      letterSpacing: "-0.008em",
      textAlign: "center",
    },
  },
  djFooter: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "center",
    },
  },
  djFooterSubLink: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "10px",
      fontWeight: "700",
      lineHeight: "17px",
      letterSpacing: "0.1px",
      textTransform: "uppercase",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "10px",
      fontWeight: "600",
      letterSpacing: "0.1px",
      textTransform: "uppercase",
      lineHeight: "21px",
    },
  },
  djFooterMainLInk: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "14px",
      fontWeight: "800",
      lineHeight: "21px",
      letterSpacing: "0.1px",
      textTransform: "uppercase",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "14px",
      fontWeight: "800",
      lineHeight: "21px",
      letterSpacing: "0.01px",
      textTransform: "uppercase",
    },
    xl: {
      fontFamily: MAIN_FONT,
      fontSize: "15px",
      fontWeight: "800",
      lineHeight: "14px",
      letterSpacing: "0.01px",
      textTransform: "uppercase",
    },
  },
  djFooterText: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "14px",
      fontWeight: "800",
      lineHeight: "21px",
    },
    lg: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    xl: {
      fontSize: "18px",
    },
  },
  djLegalHeading: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "20px",
      fontWeight: 800,
      lineHeight: "22px",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "24px",
      fontWeight: 800,
      lineHeight: "32px",
    },
    xl: {
      fontFamily: MAIN_FONT,
      fontSize: "36px",
      fontWeight: 800,
      lineHeight: "44px",
    },
  },
  djLegalSubHeading: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "13.5px",
      fontWeight: 600,
      lineHeight: "14px",
      textDecoration: "underline",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "15px",
      fontWeight: 600,
      lineHeight: "17px",
      textDecoration: "underline",
    },
    xl: {
      fontFamily: MAIN_FONT,
      fontSize: "16.5px",
      fontWeight: 600,
      lineHeight: "18px",
      textDecoration: "underline",
    },
  },
  djJobviewDescription: {
    sm: {
      fontFamily: POPPINS_FONT,
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: "22px",
    },
    lg: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19px",
    },
    xl: {
      fontSize: "15px",
      lineHeight: "25px",
    },
  },
  djJobviewHeading: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "19px",
      fontWeight: 800,
      lineHeight: "27px",
    },
    lg: {
      fontFamily: MAIN_FONT,
      fontSize: "24px",
      fontWeight: 800,
      lineHeight: "28px",
    },
    xl: {
      fontFamily: MAIN_FONT,
      fontSize: "22px",
      fontWeight: 800,
      lineHeight: "32px",
    },
  },
  djBTNSRegular: {
    sm: {
      fontFamily: MAIN_FONT,
      fontStyle: "normal",
      fontWeight: 800,
      textTransform: "capitalize",
      fontSize: "14px",
      lineHeight: "14px",
      letterSpacing: "0.02em",
    },
    md: {},
    lg: {
      lineHeight: "22px",
      letterSpacing: "0.03em",
    },
    xl: {
      lineHeight: "14px",
      letterSpacing: "0.02em",
    },
  },
  djBTNSSecondary: {
    sm: {
      fontFamily: MAIN_FONT,
      fontSize: "13px",
      fontWeight: 800,
      lineHeight: "14px",
      letterSpacing: "0.01em",
      textTransform: "uppercase",
    },
  },
  djBTNSTertitary: {
    sm: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "13px",
      lineHeight: "16px",
      letterSpacing: "0.3px",
      textTransform: "uppercase",
    },
  },
  djJobDetailCard: {
    sm: {
      fontFamily: LEXEND_FONT,
      fontWeight: 800,
      fontSize: "14px",
      lineHeight: "17px",
      letterSpacing: "0.18px",
    },
  },
};

const text: DjobsTheme.DjobsTextWithGlobal = {
  ...globalText,
  ...djobsText,
};
const djobsEffects: DjobsTheme.DjobsEffects = {
  inputInnerShadow: "inset 0px 4px 3px rgba(144, 163, 245, 0.14)",
  cards:
    "0px 1px 2px rgba(21, 21, 21, 0.02), 0px 4px 8px rgba(21, 21, 21, 0.08)",
  cardShadow: "0px 2px 7px rgba(36, 10, 62, 0.16)",
  tagsShadow: "inset 0.3px -0.3px 1.5px 0.2px rgba(101, 99, 255, 0.47)",
  activeBorder:
    "0px 0px 4px #26ADE2, inset 0px 0px 1px rgba(144, 163, 245, 0.14)",
  questionairresBox: `0px 1px 4px rgba(36, 10, 62, 0.13), 0px 6px 3px rgba(144, 163, 245, 0.14)`,
  PlainButton: `inset 0px -0.836836px 2.51051px 0.836836px rgba(0, 0, 0, 0.2)`,
  activeHoverState: `0px 1.33558px 2.67116px rgba(99, 117, 128, 0.94)`,
  plainHoverState: `0px 1px 2px rgba(144, 163, 245, 0.25), inset 0px -4px 5px rgba(210, 216, 244, 0.61)`,
  signInButtonShadow:
    "0px 6px 3px -5px rgba(96, 109, 152, 0.4),0px 4px 3px -3px rgba(0, 0, 0, 0.1),inset 0px 2px 2px rgba(255, 255, 255, 0.55),inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2)",
  switchInputShadow: "inset 0px 3px 1px rgba(0, 0, 0, 0.07)",
  switchButtonShadow:
    "0px 6px 4px rgba(0, 0, 0, 0.1), 0px 4px 2px rgba(0, 0, 0, 0.06), inset 0px 2px 2px rgba(255, 255, 255, 0.55), inset 0px -1px 3px rgba(0, 0, 0, 0.2)",
  defaultButtonShadow: `0px 4px 3px -3px rgba(0, 0, 0, 0.1), inset 0px 2px 2px rgba(255, 255, 255, 0.55), inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2)`,
  secondaryButtonShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  textShadow: `0px 1px 2px rgba(0, 0, 0, 0.25)`,
  greenShadow: `inset 1px -4px 12px rgb(144 163 245 / 19%)`,
  mainButton: `0px 6px 4px rgba(0, 0, 0, 0.1), 0px 4px 2px rgba(0, 0, 0, 0.06), inset 0px 2px 2px rgba(255, 255, 255, 0.55), inset 0px -1px 3px rgba(0, 0, 0, 0.2)`,
  mainButtonHoverShadow:
    "0px 6px 3px -5px rgba(96, 109, 152, 0.6), 0px 4px 3px -3px rgba(0, 0, 0, 0.2), inset 0px 2px 2px rgba(255, 255, 255, 0.6), inset 0px -5px 17px 1px rgba(98, 90, 121, 0.4)",
  aditionalShadow: `0px 1px 4px rgba(21, 21, 21, 0.02), 0px 8px 12px rgba(21, 21, 21, 0.08)`,
  dragDropHoverShadow: `inset 0px 0px 17px rgba(0, 159, 112, 0.46)`,
  jobCardShadow: `1px 2px 1px rgba(120, 127, 150, 0.03), 1px 4px 3px rgba(120, 127, 150, 0.05), 0px 1px 0px rgba(106, 112, 255, 0.12), 0px 8px 4px rgba(102, 95, 136, 0.03)`,
  popUpShadow: `0px 4px 4px rgba(51, 51, 51, 0.04),0px 4px 16px rgba(51, 51, 51, 0.08)`,
  dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.14)`,
  modals: `0px 1px 4px rgba(21, 21, 21, 0.02), 0px 8px 12px rgba(21, 21, 21, 0.08)`,
  errorOutline: `0px 0px 3px #E91145`,
  citydropdownItemShadow: `0px 4px 3px  rgba(0, 0, 0, 0.1),0px 3px 2px  rgba(60, 40, 119, 0.15)`,
  countryPopupShadow: ` 0px 12px 12px rgba(0, 0, 0, 0.25);`,
  countryHoverBackgroundShadow: ` 0px 3px 2px 0px rgba(60, 40, 119, 0.15), 0px 4px 3px 0px rgba(0, 0, 0, 0.1)`,
  socialAuthBtnShadow: `0px 0px 1px rgba(51, 65, 85, 0.33), 0px 1px 5px rgba(0, 0, 0, 0.04), 0px 2px 3px rgba(51, 65, 85, 0.07), 0px 1px 2px rgba(0, 0, 0, 0.03), inset 0px -4px 4px rgba(89, 106, 255, 0.07)`,

  inputShadow: `inset -1px 4px 0px rgba(185, 205, 237, 0.03), inset -3px 7px 0px rgba(222, 225, 232, 0.18)`,
  buttonNormal: `0px 6px 3px -5px rgba(96, 109, 152, 0.4), 0px 4px 3px -3px rgba(0, 0, 0, 0.1), inset 0px 2px 2px rgba(255, 255, 255, 0.55), inset 0px -1px 3px 1px rgba(0, 0, 0, 0.2)`,
  buttonHoverState: `0px 6px 3px -5px rgba(96, 109, 152, 0.6), 0px 4px 3px -3px rgba(0, 0, 0, 0.2), inset 0px 2px 2px rgba(255, 255, 255, 0.6), inset 0px -5px 17px 1px rgba(98, 90, 121, 0.4)`,
  buttonClick: `inset 0px 4px 11px rgba(39, 39, 39, 0.29)`,
  shadowsStandard: `0px 4px 4px rgba(0, 0, 0, 0.14)`,
  menusBtnHoverNoBevel: `0px 6px 3px -5px rgba(96, 109, 152, 0.6), 0px 4px 3px -3px rgba(0, 0, 0, 0.2), inset 0px -5px 17px 1px rgba(98, 90, 121, 0.4)`,
  primaryDisabledBg: `inset 1px 2px 4px rgba(212, 230, 255, 0.82), inset -1px 4px 2px rgba(185, 205, 237, 0.03)`,
  jobTilesShadow:
    "0px 0px 3px #26ADE2, inset 0px 0px 1px rgba(144, 163, 245, 0.14)",
  jobContainerShadow: ` 0px 2px 7px rgba(36, 10, 62, 0.16)`,
  buttons: `0px 0px 1px rgba(21, 21, 21, 0.02), 0px 2px 4px rgba(21, 21, 21, 0.08)`,
};
const effects: DjobsTheme.DjobsEffectsWithGlobal = {
  ...globalEffects,
  ...djobsEffects,
};

export const djobsTheme: DjobsTheme.DefaultTheme = {
  colors,
  gradients,
  text,
  effects,
};
