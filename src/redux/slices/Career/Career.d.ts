declare namespace Career {
  interface CareerHistory {
    id?: number;
    job_title: string;
    company: string;
    from_year: number;
    from_month: number;
    to_month: number;
    to_year: number;
    is_to_present: boolean;
    description: string;
    reason_for_leaving: string;
  }
  interface State {
    careerList: CareerHistory[];
  }
}

export { Career };
