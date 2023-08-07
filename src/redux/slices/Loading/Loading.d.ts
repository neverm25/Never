import { PayloadAction } from "@reduxjs/toolkit";

declare namespace Loading {
  interface State {
    isLoading: boolean;
    isHomepageLoading: boolean;
  }
  type setIsLoading = PayloadAction<boolean>;
  type setIsHomepageLoading = PayloadAction<boolean>;
}
export { Loading };
