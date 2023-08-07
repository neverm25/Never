declare namespace IAdUnit {
  type AdsHeight = "banner" | "rectangle";
  interface GoogleAdSenseProps {
    adSlot: number;
    type: AdsHeight;
    minWidth?: string;
    showAd?: boolean;
  }

  interface THMAdProps {
    showAd?: boolean;
  }
}

export { IAdUnit };
