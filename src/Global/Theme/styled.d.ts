import { Style } from "util";

declare module GlobalTheme {
  type StyleObject = { [key: string]: string | number };
  export interface DefaultTheme {
    colors: Colors;
    gradients: Gradients;
    text: Text;
    padding: Padding;
    dynamicPadding: DynamicPadding;
    border: Border;
    inputField: InputField;
    effects: Effects;
  }

  export interface InputField {
    borderStyle: StyleObject;
    fieldStyle: StyleObject;
    placeholderStyle: StyleObject;
    hoverOrFocusStyle: StyleObject;
  }

  export interface Border {
    containerRadius: string;
    cardRadius: string;
    cardBorder: string;
  }

  export interface Colors {
    background: string;

    blue150: string;
    blue100: string;
    blue110: string;
    blue80: string;
    blue60: string;
    blue40: string;
    blue50: string;
    blue10: string;
    blueGreyDark: string;

    white100: string;
    white110: string;

    black10: string;
    black20: string;
    black40: string;
    black50: string;
    black80: string;
    black80: string;
    black90: string;
    black100: string;
    primaryBlack: string;

    darkBlue: string;

    green180: string;
    green160: string;
    green150: string;
    green100: string;
    green80: string;
    green50: string;
    green30: string;
    green20: string;
    green10: string;

    purple10: string;
    purple50: string;
    purple80: string;
    purple100: string;
    purple110: string;
    purple150: string;

    yellow180: string;
    yellow150: string;
    yellow100: string;
    yellow80: string;
    yellow50: string;
    yellow10: string;

    red150: string;
    red100: string;
    red80: string;
    red50: string;
    red20: string;
    red10: string;
    red05: string;

    primary: string;
    secondary: string;
    tertiary: string;
    headingColor: string;
    bodyTextColor: string;
    error: string;
    warning: string;
  }

  export interface Gradients {
    purpleHover: string;
    purpleHoverWithHalfOpacity: string;
    purpleBorder: string;
    purple100: string;
    purple50: string;
    purple30: string;
    greenPipeSelect: string;
    green150: string;
    green120: string;
    green100: string;
    green90: string;
    green20: string;
    red100: string;
    yellow100: string;
    yellow30: string;
    blue150: string;
    blue80: string;
  }

  export interface Effects {
    boxShadow: string;
    insetBoxShadow: string;
    boxShadowActive: string;
    textShadow: string;
    expiredRowShadow: string;
    draftRowShadow: string;
    activeRowShadow: string;
    rowHoverShadow: string;
    inputInnerShadow: string;
    inputActiveShadow: string;
    plainButton: string;
  }

  export interface Padding {
    sideBarWidth: string;
    hiddenSideBarWidth: string;
  }

  export interface DynamicPadding {
    sideBarShown: number;
    sideBarHidden: number;
  }

  export interface MenuArrow {
    left: string;
    right: string;
  }

  export interface Text {
    activeregular: StyleObject;
    bodyRegular: StyleObject;
    bodySmall: StyleObject;
    capsAll: StyleObject;
    capsSmall: StyleObject;
    capitalsRegular: StyleObject;
    captionsRegular: StyleObject;
    captionSmall: StyleObject;
    captionsCapsAllBold: StyleObject;
    commentText: StyleObject;
    editButtonText: StyleObject;
    errorMessage: StyleObject;
    fileNameText: StyleObject;
    filterResult: StyleObject;
    headingFour: StyleObject;
    headingOne: StyleObject;
    headingThree: StyleObject;
    headingTwo: StyleObject;
    interactiveTextHover: StyleObject;
    interactiveTextRegular: StyleObject;
    interactiveTextSmall: StyleObject;
    linkTextMore: StyleObject;
    mainFont: string;
    photoTitle: StyleObject;
    regularBold: StyleObject;
    secondaryFont: string;
    header: StyleObject;
    tableRowDate: StyleObject;
    tableBodyCell: StyleObject;
    smallBold: StyleObject;
    smallRegular: StyleObject;
    smallCaps: StyleObject;
    subTitleOne: StyleObject;
    subTitleThree: StyleObject;
    subTitleTwo: StyleObject;
    tableRowDefault: StyleObject;
    tableRowHdr: StyleObject;
    tableRowNumbers: StyleObject;

    lexendTitle: StyleObject;
    lexendRegularCaps: StyleObject;
    lexendBoldCaps: StyleObject;

    accordianTitle: StyleObject;
    accordianDate: StyleObject;
    accordianDescriptionTitle: StyleObject;
    accordianDescription: StyleObject;
    dropDownMenuItem: StyleObject;
  }
}

export { GlobalTheme };
