import React from "react";

declare namespace IEmailUpdatesProps {
  interface state {
    email_updates: boolean;
    email_job_alerts: boolean;
    email_company_news: boolean;
  }
  interface IProps {
    data: Array<{ id: string; value: string }>;
    checked: state;
    setIsChecked: Dispatch<React.SetStateAction<state>>;
    setAccordianOpen: Dispatch<React.SetStateAction<string>>;
  }
}

export { IEmailUpdatesProps };
