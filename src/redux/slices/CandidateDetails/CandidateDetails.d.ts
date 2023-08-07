import { PayloadAction } from "@reduxjs/toolkit";
declare namespace CandidateDetailsProps {
  type jobRecommendation = {
    city: string;
    company: string;
    id: string;
    job_category: string;
    job_id: string;
    posted_date: string;
    title: string;
  };
  type jobApplications = object;
  interface OverviewData {
    first_name: string;
    last_name: string;
    country: string;
    city: string;
    city_name?: string;
    city_name_country?: string;
    phone: string;
    bio: string;
  }
  interface State {
    //Personal
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    city: string;
    city_name: string;
    city_name_country: string;
    //Additional
    alternate_phone: string;
    nationality: number;
    dob_day: string;
    dob_month: string;
    dob_year: string;
    idnumber: string;
    citizenship: string;
    passport_number: string;
    is_disabled: boolean;
    disabled_description: string;
    //Work
    notice_period: string;
    drivers_licence: boolean;
    drivers_licence_code: string;
    willing_to_relocate: boolean;
    own_transport: boolean;
    work_permit: string;
    current_remuneration: number;
    current_remuneration_type: number;
    desired_remuneration: number;
    desired_remuneration_type: number;
    //Candidate overview
    bio: string;
    photo: string;
    country: string;
    province: string;
    job_recommendations: jobRecommendation[];
    job_applications: jobApplications;

    preferred_name: string;
    confirmed: boolean;
    gender: string;
    is_client: boolean;
    race_id: number;
    is_sa_id: boolean;
    address1: string;
    address2: string;
    suburb: string;
    postal_code: string;
    marital_status: string;
    employment_equity: boolean;
    should_parse: boolean;
    social_facebook: string;
    social_behance: string;
    social_instagram: string;
    social_linkedin: string;
    social_youtube: string;
    social_vimeo: string;
    social_twitter: string;
    social_github: string;
    social_flickr: string;
    social_skype: string;
    date_created: string;
    date_updated: string;
    date_deleted: string;
    email_updates: boolean;
    email_job_alerts: boolean;
    email_company_news: boolean;
  }

  type setJobApplications = PayloadAction<jobApplications>;
}

export { CandidateDetailsProps };
