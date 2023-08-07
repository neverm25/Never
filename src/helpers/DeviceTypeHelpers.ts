export type DeviceTypes = "small" | "mobile" | "tablet" | "desktop" | "large";
export type DeviceComparisonProps = {
    currentDevice?: DeviceTypes;
    comparedTo: DeviceTypes;
};

const devicesList = ["small", "mobile", "tablet", "desktop", "large"];

const getDeviceType = (width?: number): DeviceTypes => {
    const deviceWidth =
        width || (typeof window !== "undefined" && window.innerWidth);

    if (deviceWidth < 360) return "small";
    if (deviceWidth >= 360 && deviceWidth < 768) return "mobile";
    if (deviceWidth >= 768 && deviceWidth < 992) return "tablet";
    if (deviceWidth >= 992 && deviceWidth < 1600) return "desktop";
    if (deviceWidth >= 1600) return "large";
};

const isSmall = () => getDeviceType() === "small";
const isMobile = () => getDeviceType() === "mobile";
const isTablet = () => getDeviceType() === "tablet";
const isDesktop = () => getDeviceType() === "desktop";
const isLarge = () => getDeviceType() === "large";

const isDeviceIsOrBig = ({
    comparedTo,
    currentDevice = getDeviceType(),
}: DeviceComparisonProps) =>
    devicesList.indexOf(currentDevice) >= devicesList.indexOf(comparedTo);
const isDeviceBig = ({
    comparedTo,
    currentDevice = getDeviceType(),
}: DeviceComparisonProps) =>
    devicesList.indexOf(currentDevice) > devicesList.indexOf(comparedTo);
const isDeviceIsOrSmall = ({
    comparedTo,
    currentDevice = getDeviceType(),
}: DeviceComparisonProps) =>
    devicesList.indexOf(currentDevice) <= devicesList.indexOf(comparedTo);
const isDeviceSmall = ({
    comparedTo,
    currentDevice = getDeviceType(),
}: DeviceComparisonProps) =>
    devicesList.indexOf(currentDevice) < devicesList.indexOf(comparedTo);

export const DeviceTypeHelpers = {
    devicesList,
    getDeviceType,
    isSmall,
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    isDeviceBig,
    isDeviceIsOrBig,
    isDeviceSmall,
    isDeviceIsOrSmall,
};
