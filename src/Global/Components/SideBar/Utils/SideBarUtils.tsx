import { ISideBar } from "../SideBar";

export const menuItems: Array<ISideBar.SideBarMenuItem> = [
  {
    value: "/",
    label: "Dashboard",
  },
  {
    value: "Global/jobs",
    label: "Jobs",
  },
  { value: "Global/analytics", label: "Analytics" },
  { value: "Global/billing", label: "Billing" },
  {
    value: "Global/settings",
    label: "Settings",
    subMenu: [
      { value: "Global/settings/profile", label: "Profile" },
      { value: "Global/settings/company-profile", label: "Company Profile" },
      { value: "Global/settings/team-settings", label: "Team Settings" },
      {
        value: "Global/settings/email-notifications",
        label: "Email Notifications",
      },
      {
        value: "Global/settings/messaging-templates",
        label: "Messaging Templates",
      },
    ],
  },
];
