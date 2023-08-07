import React from "react";
import Image from "next/image";
import { LogoContainer, SublineText } from "./Styles/CompanyLogoStyles";

export const MainLogo = () => (
  <LogoContainer>
    <Image
      src={`/static/images/ditto-white-logo.png`}
      alt="company-logo"
      layout="fill"
      loading="lazy"
    />
    <SublineText>Talent Solutions</SublineText>
  </LogoContainer>
);

export const IconLogo = () => (
  <LogoContainer>
    <Image
      src={`/static/images/ditto-white-badge-logo.png`}
      alt="company-logo"
      layout="fill"
      loading="lazy"
    />
  </LogoContainer>
);
