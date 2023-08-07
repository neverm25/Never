import * as Unicons from "@iconscout/react-unicons";

import { IIcons } from "./icons";
import { theme } from "@Global/Theme";

const SocialMediaIconSize = 35;

export const FacebookIcon = ({ color, size }: IIcons.UniconsProps) => (
  <Unicons.UilFacebook
    color={color || theme.colors.black80}
    size={size || SocialMediaIconSize}
  />
);
export const InstagramIcon = ({ color, size }: IIcons.UniconsProps) => (
  <Unicons.UilInstagramAlt
    color={color || theme.colors.black80}
    size={size || SocialMediaIconSize}
  />
);
export const LinkedInIcon = ({ color, size }: IIcons.UniconsProps) => (
  <Unicons.UilLinkedin
    color={color || theme.colors.black80}
    size={size || SocialMediaIconSize}
  />
);
export const YouTubeIcon = ({ color, size }: IIcons.UniconsProps) => (
  <Unicons.UilYoutube
    color={color || theme.colors.black80}
    size={size || SocialMediaIconSize}
  />
);
export const TwitterIcon = ({ color, size }: IIcons.UniconsProps) => (
  <Unicons.UilTwitter
    color={color || theme.colors.black80}
    size={size || SocialMediaIconSize}
  />
);
