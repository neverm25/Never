import React, { useEffect, useState, Fragment } from "react";
import { Grid } from "antd";
import styled from "styled-components";

import { IAdUnit } from "./AdUnit";

export const GoogleAdSense = ({
  type,
  adSlot,
  minWidth,
  showAd = true,
}: IAdUnit.GoogleAdSenseProps) => {
  const isProductionEnvironment = process.env.NODE_ENV === "production";
  const isADSEnabled = process.env.NEXT_PUBLIC_ADS_ENABLED ? true : false;
  const isAdsScriptLoadNeeded =
    isADSEnabled && isProductionEnvironment && showAd;

  const screen = Grid.useBreakpoint();
  const calculatedMinWidth = screen.lg ? "768px" : "95%";

  const [renderedAdSlot, setRenderedAdSlot] = useState({});

  useEffect(() => {
    let googleInit = setTimeout(() => {
      if (typeof window !== "undefined" && isAdsScriptLoadNeeded) {
        try {
          if (!renderedAdSlot[adSlot]) {
            const adsbygoogle = window.globalThis.adsbygoogle || [];
            adsbygoogle.push({});
            renderedAdSlot[adSlot] = true;
            setRenderedAdSlot(renderedAdSlot);
          }
        } catch (_exception) {}
      }
    }, 300);

    return () => googleInit && clearTimeout(googleInit);
  });

  if (!isAdsScriptLoadNeeded) return <Fragment></Fragment>;

  return (
    <AdUnitContainer key={adSlot} type={type}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          minHeight: "100px !important",
          width: minWidth ? minWidth : calculatedMinWidth,
        }}
        data-ad-client={"ca-pub-3286466071254967"}
        data-ad-slot={adSlot}
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </AdUnitContainer>
  );
};

const AdUnitContainer = styled.div<{
  type: IAdUnit.AdsHeight;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  max-width: 768px;
  margin: 0 auto;
  height: ${({ type }) => (type === "rectangle" ? "50px" : "90px")};
  min-height: 100px;
  .adsbygoogle {
    z-index: 1 !important;
    margin: 0 auto !important;
  }
`;
