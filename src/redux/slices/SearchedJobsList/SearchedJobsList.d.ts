import { PayloadAction } from "@reduxjs/toolkit";
import { SearchResults } from "@DJobs/Components/SearchList/SearchList";

declare namespace SearchedJobsList {
  type jobId = string;
  interface jobData {
    city: string;
    city_search: string;
    company: string;
    company_name: string;
    country: string;
    country_code: string;
    description: string;
    education: string;
    experience_from: string;
    experience_to: string;
    id: jobId;
    is_internal: false;
    job_category: string;
    job_category_search: string;
    job_code: string;
    job_type: string;
    job_type_search: string;
    location_data: string;
    location_geo: { lat: number; lon: number };
    logo: string;
    posted_date: string;
    quick_title: string;
    salary_from: string;
    salary_to: string;
    salary_type: string;
    search_industries: string;
    search_skills: string;
    seniority_level: string;
    state: string;
    title: string;
    url: string;
  }

  type filterOption = { text: string };
  interface ApplyJobData {
    ads_disabled: string;
    city: string;
    city_name: string;
    company_contact_number: string;
    company_description: string;
    company_id: string;
    company_name: string;
    company_photo: string;
    company_url: string;
    contact_email: string;
    contact_name: string;
    contact_office: string;
    country: string;
    country_code: string;
    date_active: string;
    date_created: string;
    date_updated: string;
    description_plaintext: string;
    education_level: string;
    employment_type: string;
    experience_from: string;
    experience_to: string;
    id: string;
    industries: filterOption[];
    is_advertised: boolean;
    is_internal: boolean;
    is_remote: boolean;
    job_description: string;
    key_responsibilities: string;
    latitude: string;
    longitude: string;
    postal_code: string;
    questionnaire_data: string;
    salary_from: string;
    salary_to: string;
    salary_type: string;
    seniority_level: string;
    skills: filterOption[];
    title: string;
    is_internal: boolean;
    url: string;
  }

  type origin = "job" | "application";
  interface PostJobAPIProps {
    job_id: string;
    source: string;
    access_token: string;
    origin: origin;
  }

  interface filter {
    key: string;
    doc_count: number;
  }
  interface filterType {
    skills: filter[];
    industries: filter[];
  }
  interface SearchedJobListFromAPI {
    jobs: jobData[];
    total_jobs: number;
    filters: filterType[];
    total_pages: number;
  }
  type State = SearchedJobListFromAPI & {
    pageNumber: number;
    selectedJob: jobData;
    selectedJobId: jobId;
    applyJobData: ApplyJobData;
    source: string;
  };

  type set_State = PayloadAction<State>;
  type set_SearchedJobListFromAPI = PayloadAction<SearchedJobListFromAPI>;
  type set_selectedJobId = PayloadAction<jobId>;
  type setApplyJobData = PayloadAction<ApplyJobData>;
  type setSource = PayloadAction<string>;
}
export { SearchedJobsList };
