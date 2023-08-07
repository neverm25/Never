import { DeviceTypes } from "@Helpers/DeviceTypeHelpers";
declare namespace DjobsHome {
  interface Context {
    deviceWidth: number;
    deviceType: DeviceTypes;
    isDesktopOrBigger: boolean;
  }
}
export { DjobsHome };
