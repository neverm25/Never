import { GlobalTheme } from "./styled";

//#region Colors
const MAIN_BLUE = "#1E96F2";
const MAIN_GREEN = "#0FD096";
const MAIN_RED = "#E91145";
const MAIN_YELLOW = "#FFD76D";
const MAIN_PURPLE = "#785BEA";
const MAIN_BLACK = "#1E202D";
const BLACK_80 = "#7E8CA3";
const MAIN_FONT = "Montserrat, sans-serif";
const SECONDARY_FONT = "Roboto, sans-serif";
const LEXEND_FONT = "Lexend, sans-serif";

const ERROR_COLOR = MAIN_RED;
const ERROR_BACKGROUND_COLOR = "#FFF4F9";

const INTERACTIVETEXT_COLOR = MAIN_BLUE;
const INTERACTIVETEXT_HOVER_COLOR = "#1879C4";
//#endregion

//#region Typography
const bodyRegularStyle = {
  name: "body regular",
  fontFamily: SECONDARY_FONT,
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "22px",
};
const bodySmallStyle = {
  name: "body small",
  fontFamily: SECONDARY_FONT,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "14px",
};
const interactiveText = {
  name: "interactiveText regular",
  textDecoration: "none",
  color: INTERACTIVETEXT_COLOR,
};
const interactiveTextHoverStyle = {
  textDecoration: "underline",
  color: INTERACTIVETEXT_HOVER_COLOR,
};
//#endregion

const SIDEBAR_WIDTH_SHOWN = 290;
const SIDEBAR_WIDTH_HIDDEN = 68;

export const globalColors: GlobalTheme.Colors = {
  white110: "#FBFBFF",
  white100: "#FFFFFF",
  //
  black100: MAIN_BLACK,
  black90: "#4D5D75",
  black80: BLACK_80,
  black50: "#A9B5D2",
  black40: "#B6B9BB",
  black20: "#D6DEED",
  black10: "#F3F6FF",
  //

  blue150: "#1879C4",
  blue100: MAIN_BLUE,
  blue110: "#4A7BC2",
  blue80: "#58B4FA",

  blue40: "#BEF3FF",
  blue60: "#5D6C78",
  blue50: "#A0D5FC",
  blue10: "#A0D5FC",
  blueGreyDark: "#4D6975",
  darkBlue: "#2C568D",
  //
  green180: "#075050",
  green160: "#06686F",
  green150: "#009A75",
  green100: MAIN_GREEN,
  green80: "#1EE9AC",
  green50: "#92EFB7",
  green30: "#d6ffd8",
  green20: "rgba(201,255,203,0.50)",
  green10: "rgba(201, 255, 203, 0.15)",
  //
  purple10: "rgba(213, 203, 255, 0.42)",
  purple50: "#D5CBFF",
  purple80: "#9881F2",
  purple100: MAIN_PURPLE,
  purple110: "#6563FF",
  purple150: "#5037B3",
  //
  red150: "#B33746",
  red100: MAIN_RED,
  red80: "#F75569",
  red50: "#F2819C",
  red20: "#F3C9DB",
  red10: "#FEE8F1",
  red05: "#FFF7FA",
  //
  yellow180: "#6B4000",
  yellow150: "#DA9309",
  yellow100: MAIN_YELLOW,
  yellow80: "#FAE09F",
  yellow50: "#FFF1DC",
  yellow10: "#FFFCF8",

  background: "#F3F4FF",

  primary: MAIN_BLUE,
  secondary: MAIN_GREEN,
  tertiary: MAIN_PURPLE,

  headingColor: MAIN_BLACK,

  error: MAIN_RED,
  warning: MAIN_YELLOW,

  primaryBlack: MAIN_BLACK,
  bodyTextColor: BLACK_80,
};

export const globalGradients: GlobalTheme.Gradients = {
  purpleHover:
    "linear-gradient(286.65deg, #9F71E9 -13.19%, #504EDB 20.83%, #3580C6 53.75%, #26ADE2 91.07%)",
  purpleHoverWithHalfOpacity: `linear-gradient(42.65deg, rgba(159, 113, 233, 0.05) -13.19%, rgba(80, 78, 219, 0.05) 20.83%, rgba(53, 128, 198, 0.05) 53.75%, rgba(38, 173, 226, 0.05) 91.07%)`,
  purpleBorder:
    "linear-gradient(90.04deg, #9F71E9 36.86%, #504EDB 50.58%, #3580C6 63.85%);",
  purple100:
    "linear-gradient(156.57deg, #FBD0B5 -25.55%, #614EDB 21.53%, rgba(32, 95, 217, 0.65) 78.68%, #6367C0 111.03%), #FBD0B5",
  purple30:
    "linear-gradient(103.63deg, #785BEA -3.86%, rgba(176, 222, 240, 0.4) 13.75%, rgba(255, 255, 255, 0) 83.7%), linear-gradient(346.92deg, #4490EA -43.12%, #785BEA -8.21%, rgba(144, 163, 245, 0.83) 10.34%, rgba(52, 138, 238, 0.38) 23.6%, rgba(36, 64, 89, 0.11) 47.24%, rgba(255, 255, 255, 0) 78.21%), #FFFFFF",
  purple50:
    "linear-gradient(156.09deg, #785BEA -13.7%, rgba(224, 240, 247, 0.4) 16.85%, rgba(255, 255, 255, 0.17) 90.25%), linear-gradient(301.64deg, #4490EA -29.94%, #785BEA -8.37%, rgba(144, 163, 245, 0.83) 3.08%, rgba(52, 138, 238, 0.38) 13.39%, rgba(255, 255, 255, 0) 45%), #FFFFFF",
  greenPipeSelect:
    "radial-gradient(242.11% 226.37% at 60.93% 61.63%, #0FD096 0%, #C9FFCB 33.33%, rgba(183, 255, 229, 0) 100%),#00AE7A",
  green150: `linear-gradient(332.92deg, #2F626D 25.75%, #009A75 103.01%)`,
  green120: "linear-gradient(332.92deg, #2F626D 25.75%, #49F56F 103.01%)",
  green100:
    "linear-gradient(42.65deg, #B7FFE5 -13.19%, #1DAB89 20.83%, #0FD096 53.75%, #B1F0B0 91.07%)",
  green90:
    "linear-gradient(42.65deg, #B7FFE5 -13.19%, #1DAB89 20.83%, #0FD096 53.75%, #B1F0B0 91.07%)",
  green20:
    "linear-gradient(103.63deg, #0FDF88 -3.86%, rgba(176, 240, 198, 0.4) 13.75%, rgba(255, 255, 255, 0) 83.7%), linear-gradient(346.92deg, #44EAC2 -43.12%, #5BAEEA -8.21%, rgba(144, 245, 184, 0.83) 10.34%, rgba(52, 238, 182, 0.38) 23.6%, rgba(146, 176, 211, 0.11) 47.24%, rgba(243, 243, 243, 0.08) 78.21%), #FFFFFF",
  red100:
    "linear-gradient(42.65deg, #F3C9DB -13.19%, #B33746 20.83%, #E91145 53.75%, #F2819C 91.07%);",
  yellow100:
    "linear-gradient(225.79deg, #FAE09F 31.27%, #FFDD75 44.33%, #FFB23F 76.36%, #DA9309 98.12%)",
  yellow30:
    "linear-gradient(103.63deg, #FFB23F -3.86%, #FFECB2 13.75%, rgba(255, 255, 255, 0) 83.7%), linear-gradient(346.92deg, #FFB23F -43.12%, #FFDD75 -8.21%, #FFECB2 10.34%, #FFDD75 23.6%, #FFECB2 47.24%, rgba(255, 255, 255, 0) 78.21%), #FFFFFF",
  blue150: `linear-gradient(0deg, rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)),
  linear-gradient(218.61deg, #308AF4 8.95%, #785BEA 35.98%, #5F9FCF 68.7%, #E9ABD9 100%)`,
  blue80: "linear-gradient(135deg, #A8DAF2 0%, #58B4FA 100%)",
};

export const globalText: GlobalTheme.Text = {
  bodyRegular: { ...bodyRegularStyle },
  bodySmall: { ...bodySmallStyle },
  capsAll: {
    name: "caps all",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "13px",
    lineHeight: "15px",
    textTransform: "uppercase",
    letterSpacing: "0.01em",
  },
  capsSmall: {
    name: "caps small",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "11px",
    lineHeight: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
  },
  capitalsRegular: {
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "11px",
    lineHeight: "14px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
  },
  captionsRegular: {
    name: "caption regular",
    fontFamily: SECONDARY_FONT,
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "16px",
  },
  captionSmall: {
    name: "caption small",
    fontFamily: SECONDARY_FONT,
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "14px",
  },
  captionsCapsAllBold: {
    fontFamily: MAIN_FONT,
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "15px",
    letterSpacing: "0.01em",
    textAlign: "left",
  },

  commentText: {
    name: "comment text",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "13px",
  },
  editButtonText: {
    name: "button text",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "8px",
    lineHeight: "14px",
  },
  errorMessage: {
    border: "1px solid",
    borderColor: ERROR_COLOR,
    color: ERROR_COLOR,
    padding: "5px",
    display: "inline-block",
    marginTop: "5px",
    borderRadius: "5px",
    fontSize: "12px",
    background: ERROR_BACKGROUND_COLOR,
    width: "fit-content",
  },
  fileNameText: {
    name: "filename text",
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "18px",
  },
  filterResult: {
    fontFamily: LEXEND_FONT,
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0.03em",
    textAlign: "left",
  },
  headingOne: {
    name: "heading 1",
    fontStyle: " normal",
    fontFamily: MAIN_FONT,
    fontWeight: "800",
    fontSize: "32px",
    lineHeight: "40px",
  },
  headingTwo: {
    name: "heading 2",
    fontFamily: MAIN_FONT,
    fontWeight: "800",
    fontSize: "24px",
    lineHeight: "32px",
  },
  headingThree: {
    name: "heading 3",
    fontFamily: MAIN_FONT,
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "24px",
  },
  headingFour: {
    name: "heading 4",
    fontFamily: MAIN_FONT,
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "21px",
  },
  interactiveTextRegular: {
    ...bodyRegularStyle,
    ...interactiveText,
  },
  interactiveTextSmall: {
    ...bodySmallStyle,
    ...interactiveText,
  },
  interactiveTextHover: { ...interactiveTextHoverStyle },
  linkTextMore: {
    name: "link text-more",
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "22px",
  },
  mainFont: MAIN_FONT,
  photoTitle: {
    name: "photo title",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "26px",
  },
  regularBold: {
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "18px",
    textAlign: "center",
    letterSpacing: "0.03em",
  },
  secondaryFont: SECONDARY_FONT,
  smallCaps: {
    name: "filter text",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "12px",
    lineHeight: "14px",
  },
  smallBold: {
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.02em",
    textTransform: "capitalize",
  },
  smallRegular: {
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "9px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
  },
  subTitleOne: {
    name: "subtitle one",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "16px",
    lineHeight: "21px",
  },
  subTitleTwo: {
    name: "subtitle two",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "18px",
  },
  subTitleThree: {
    name: "subtitle three",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "14px",
  },
  tableRowDefault: {
    name: "table row default",
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "-0.387234px",
  },
  tableRowHdr: {
    name: "table row header",
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "15px",
    letterSpacing: "-0.387234px",
  },
  header: {
    name: "header",
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "9px",
    lineHeight: "11px",
    letterSpacing: "1.1px",
  },
  tableRowDate: {
    name: "react table body",
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "14px",
  },
  tableBodyCell: {
    name: "react table body cell",
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "-0.387234px",
  },
  tableRowNumbers: {
    name: "table row numbers",
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "-0.331915px",
  },
  lexendTitle: {
    fontFamily: LEXEND_FONT,
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "9px",
    lineHeight: "7px",
  },
  lexendRegularCaps: {
    fontFamily: LEXEND_FONT,
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "11px",
    lineHeight: "17px",
    textAlign: "left",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
  },
  lexendBoldCaps: {
    fontFamily: LEXEND_FONT,
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "11px",
    lineHeight: "17px",
    textAlign: "right",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  accordianTitle: {
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "18px",
  },
  accordianDate: {
    fontFamily: LEXEND_FONT,
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.02em",
  },
  accordianDescriptionTitle: {
    fontFamily: MAIN_FONT,
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "16px",
    textTransform: "uppercase",
    letterSpacing: "0.02em",
  },
  accordianDescription: {
    fontFamily: LEXEND_FONT,
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "22px",
    letterSpacing: "0.04em",
  },
  dropDownMenuItem: {
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "11px",
    lineHeight: "16px",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  activeregular: {
    name: "active regular",
    fontFamily: SECONDARY_FONT,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "0.03em",
  },
};

//Input field styles
const inputFieldBorderStyle = {
  border: "1px solid",
  borderRadius: "6px !important",
  borderColor: globalColors.black20,
};

export const globalInputField: GlobalTheme.InputField = {
  borderStyle: { ...inputFieldBorderStyle },
  fieldStyle: {
    padding: "12px",
    background: globalColors.white100,
    boxSizing: "border-box",
    boxShadow: "0px 4px 3px 0px #90A3F524 inset",
    ...inputFieldBorderStyle,
    color: globalColors.black90,
  },
  placeholderStyle: {
    fontFamily: SECONDARY_FONT,
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.03em",
    color: globalColors.black50,
  },
  hoverOrFocusStyle: {
    ...inputFieldBorderStyle,
    borderColor: globalColors.blue100,
  },
};

export const globalEffects: GlobalTheme.Effects = {
  boxShadow: `0px 1px 2px rgba(21, 21, 21, 0.02), 0px 4px 8px rgba(21, 21, 21, 0.08)`,
  insetBoxShadow: `inset 0px 3px 0px rgba(0, 0, 0, 0.04)`,
  boxShadowActive: `0px 0px 4px #26ade2, inset 0px 0px 1px rgba(144, 163, 245, 0.14)`,
  textShadow: `0px 2.80385px 2.80385px rgba(0, 0, 0, 0.25)`,
  expiredRowShadow:
    "inset 5px 0px 0px #F75569, inset 0px 0px 1px rgba(179, 55, 70, 0.27), inset 0px -2px 4px rgba(198, 28, 48, 0.06)",
  draftRowShadow:
    "inset 0px 0px 1px rgba(179, 55, 70, 0.27), inset 5px 0px 0px #E9D311, inset 0px -2px 5px rgba(255, 250, 202, 0.7)",
  activeRowShadow:
    "inset 0px 0px 1px rgba(144, 163, 245, 0.83), inset 0px -5px 7px rgba(225, 232, 235, 0.3)",
  rowHoverShadow:
    "inset 5px 0px 0px rgba(123, 97, 255, 0.45), inset 0px 0px 1px #90A3F5, inset 1px -2px 6px rgba(144, 163, 245, 0.19)",
  inputInnerShadow: "inset 0px 4px 3px rgba(144, 163, 245, 0.14)",
  inputActiveShadow: `0px 0px 4px #26ade2, inset 0px 0px 1px rgba(144, 163, 245, 0.14)`,
  plainButton: `inset 0px -0.836836px 2.51051px 0.836836px rgba(0, 0, 0, 0.2)`,
};

export const globalPadding: GlobalTheme.Padding = {
  sideBarWidth: "290px",
  hiddenSideBarWidth: "68px",
};
export const globalDynamicPadding: GlobalTheme.DynamicPadding = {
  sideBarShown: SIDEBAR_WIDTH_SHOWN + 20,
  sideBarHidden: SIDEBAR_WIDTH_HIDDEN + 5,
};
export const globalBorder: GlobalTheme.Border = {
  containerRadius: "20px",
  cardRadius: "12px",
  cardBorder: "1px solid #E9E9E9",
};

export const theme: GlobalTheme.DefaultTheme = {
  colors: globalColors,
  gradients: globalGradients,
  text: globalText,
  padding: globalPadding,
  dynamicPadding: globalDynamicPadding,
  border: globalBorder,
  inputField: globalInputField,
  effects: globalEffects,
};
