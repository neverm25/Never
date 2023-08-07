declare namespace CompanyProfileProps {
  type CompanyType = {
    id: string | number;
    cover_image: string;
    photo: string;
    company_name: string;
    cover_image: string;
    company_contact_number: string;
    description: string;
    website: string;
    company_size: string;
    total_jobs: number;
    founded_year: string;
    location: string;
    social_facebook: string;
    social_linkedin: string;
    social_twitter: string;
    short_description: string;
  };
  type tabNames = "company" | "jobs" | "upload-cv";
  type tabData = { label: string; labelValue: tabNames; value: number };

  type filter = { key: string; doc_count: number };
  type filterType = { skills: filter[]; industries: filter[] };
  type jobsList = {
    jobs: jobData[];
    total_jobs: number;
    filters: filterType;
  };
  type ICompany = { companyData: CompanyType; companyId?: string };
  type ISocialIcons = { companyData?: CompanyType; id?: string };
  type CompanyProfileDetail = { title: string; icon: JSX.Element };
  type CompanyMetadata = { data: CompanyProfileDetail[] };

  type CompanySection = {
    companyData: CompanyType;
    activeJobs: number;
  };

  interface State {
    activeTab: tabNames;
    jobsList: jobsList;
  }
  type setActiveTab = PayloadAction<tabNames>;
  type setJobsList = PayloadAction<jobsList>;
}

export { CompanyProfileProps };
