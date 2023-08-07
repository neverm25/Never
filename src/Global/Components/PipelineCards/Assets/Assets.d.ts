import { Colors } from "styled-components";

declare namespace AssetProps {
  export interface Pipecard {
    showStroke?: boolean;
    fillColor?: keyof Colors;
  }
}
export { AssetProps };
