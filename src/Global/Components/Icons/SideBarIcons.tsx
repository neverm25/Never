import {
  AnalyticsIcon,
  BillingIcon,
  DashboardIcon,
  JobsIcon,
  SettingsIcon,
} from ".";

interface Props {
  value: string;
  fillColor: string;
}

export default function MenuItemsIcon({ value, fillColor }: Props) {
  switch (value) {
    case "Global/home":
      return <DashboardIcon fillColor={fillColor} />;
    case "Global/jobs":
      return <JobsIcon fillColor={fillColor} />;
    case "Global/analytics":
      return <AnalyticsIcon color={fillColor} />;
    case "Global/billing":
      return <BillingIcon fillColor={fillColor} />;
    case "Global/settings":
      return <SettingsIcon color={fillColor} />;
    default:
      return <DashboardIcon fillColor={fillColor} />;
  }
}
