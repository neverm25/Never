// #region Local Imports
import { TermsConditions, PrivacyPolicy, Promotions } from "../TabContents";
// #endregion Local Imports

const Headers = [
  { mobile: "Ts & Cs", desktop: "Terms & Conditions", route: "/legal/terms" },
  { mobile: "Privacy", desktop: "Privacy Policy", route: "/legal/privacy" },
  { mobile: "Promotions", desktop: "Promotions", route: "/legal/promotions" },
];

const HeaderContents = {
  terms: TermsConditions,
  privacy: PrivacyPolicy,
  promotions: Promotions,
};

export const LegalTabData = {
  Headers,
  HeaderContents,
};
