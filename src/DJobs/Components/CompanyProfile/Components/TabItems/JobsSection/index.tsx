// #region Global Imports
import React, { useMemo, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { JobsList } from "@DJobs/Components/Common/JobListCommon/JobsList";
import { djobsTheme } from "@DJobs/Theme";
import { PaginationBase } from "@Global/Components/Basic";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { useRouter } from "next/router";
import { JobSearchAPI } from "@API/JobSearchAPI";
import { CompanyProfileCommon } from "../Common";
import { actions, useAppDispatch, useAppSelector } from "@Redux";
//import { FilterGroupButton } from "./FilterGroupButton";
//import { FilterGroupButtonProps } from "./FilterGroupButton/FilterGroupButton";
// #endregion Local Imports

export const JobsSection = ({ companyId, activeJobs }) => {
  const { jobsList } = useAppSelector(store => store.company);
  const dispatch = useAppDispatch();

  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const [filterOption, setFilterOption] = useState({
  //   skills: [],
  //   industries: [],
  // } as ICompanyProfile.filterType);
  const [jobSetId, setJobSetId] = useState(0);

  const defaultFilterOption = useMemo(
    () => ({
      date_posted: "",
      skills: [],
      industry: [],
    }),
    []
  );
  //const [filterValue, setFilterValue] = useState(defaultFilterOption);
  const router = useRouter();
  const searchFilterData = useCallback(
    formData => {
      setIsLoading(true);
      JobSearchAPI.getJobsData(formData)
        .then(response => {
          dispatch(actions.company.setJobsList(response.data));
          setJobSetId(response.data?.jobs[0]?.id);
          //setFilterOption(response.data.filters);
          setIsLoading(false);
        })
        .catch(() => router.push("/404"));
    },
    [router, dispatch]
  );

  // const onSearchFilter = () => {
  //   let skillData = filterValue?.skills?.join(" ||");
  //   let dateData = filterValue?.date_posted
  //     ?.toLocaleLowerCase()
  //     .split(" ")
  //     .join("_");
  //   const formData = new FormData();
  //   formData.append("job_title", "sales");
  //   formData.append("location", "5256");
  //   formData.append("date_posted", dateData);
  //   formData.append("skills", skillData);
  //   formData.append("industries", filterValue?.industry?.join("||"));
  //   formData.append("page_number", pageNumber.toLocaleString());
  //   formData.append("company_id", companyId);
  //   searchFilterData(formData);
  // };
    const onSearchFilter = () => {
      const formData = new FormData();
      formData.append("job_title", "developer");
      formData.append("location", "5256");
      formData.append("page_number", pageNumber.toLocaleString());
      formData.append("company_id", companyId);
      searchFilterData(formData);
    };
    useEffect(() => {
      pageNumber !== 1 && onSearchFilter();
    }, [pageNumber]);

  useEffect(() => {
    const formData = new FormData();
    formData.append("job_title", "developer");
    formData.append("location", "5256");
    formData.append("company_id", companyId);

    jobsList?.jobs.length === 0 && searchFilterData(formData);
    //setFilterValue(defaultFilterOption);
  }, [companyId, defaultFilterOption, searchFilterData, jobsList]);

  // const filteredOptionData = React.useMemo(() => {
  //   const datePostedOptions = [
  //     { label: "Past Month", value: "Past Month" },
  //     { label: "Past Week", value: "Past Week" },
  //     { label: "Past Day", value: "Past Day" },
  //   ];
  //   const datePosted: FilterGroupButtonProps.FilterButtonRadio = {
  //     filterType: "radio",
  //     name: "date posted",
  //     value: filterValue.date_posted,
  //     options: datePostedOptions,
  //     count: 0,
  //     onSearchFilter,
  //   };
  //   const skills: FilterGroupButtonProps.FilterButtonCheckbox = {
  //     filterType: "checkbox",
  //     name: "skills",
  //     value: filterValue.skills,
  //     options: filterOption.skills.map(skill => ({
  //       label: skill.key,
  //       value: skill.key,
  //     })),
  //     count: 0,
  //     onSearchFilter,
  //   };
  //   const industry: FilterGroupButtonProps.FilterButtonCheckbox = {
  //     filterType: "checkbox",
  //     name: "industry",
  //     value: filterValue.industry,
  //     options: filterOption.industries.map(industry => ({
  //       label: industry.key,
  //       value: industry.key,
  //     })),
  //     count: 0,
  //     onSearchFilter,
  //   };
  //   return [datePosted, skills, industry];
  // }, [filterOption, filterValue]);

  const onClickJobDetails = id => {
    router.push(`/job-details?id=${id}`);
  };
  const onPageChange = selectedPageNumber => {
    setPageNumber(selectedPageNumber);
    document
      .getElementById("scrollTabItem")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <TabComponentsWrapper>
      <CompanyProfileCommon.TabComponentTitle
        title={`Latest jobs`}
        filterCount={activeJobs}
      />
      <FilterListContainer>
        {/* <FilterGroupButton
          filteredOptionData={filteredOptionData}
          setFilterValue={setFilterValue}
        /> */}
        {isLoading ? (
          <div style={{ marginTop: "65px" }}>
            <DJobsTypography styleName="djCardsTitle" color="black90">
              Loading...
            </DJobsTypography>
          </div>
        ) : (
          <React.Fragment>
            <JobsListContainer>
              <JobsList
                redirectToJobPage={true}
                jobsList={jobsList?.jobs}
                setJobSelId={setJobSetId}
                jobSelId={jobSetId}
                itemsForNextAd={10}
                onClickJobDetails={onClickJobDetails}
              />
            </JobsListContainer>
            <PaginationWrapper>
              <PaginationBase
                itemsPerPage={
                  jobsList?.jobs.length <= 10 ? 10 : jobsList?.jobs.length
                }
                totalItems={jobsList?.total_jobs}
                paginationType={"default"}
                currentPageNumber={pageNumber}
                onChange={onPageChange}
                showQuickJumper={true}
              />
            </PaginationWrapper>
          </React.Fragment>
        )}
      </FilterListContainer>
    </TabComponentsWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;

  @media (min-width: 1200px) {
    justify-content: start;
    padding-top: 45px;
  }
`;
const JobsListContainer = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    padding-top: 30px;
  }
`;

const FilterListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 992px) {
    width: 90%;
    max-width: 760px;
    gap: 32px;
  }
  @media (min-width: 1600px) {
    gap: 50px;
  }
`;
const TabComponentsWrapper = styled.div`
  border: 0.658436px solid ${djobsTheme.colors.black10};
  background: ${djobsTheme.colors.white100};
  box-shadow: ${djobsTheme.effects.boxShadow};
  border-radius: 16px 16px 15.8025px 15.8025px;
  padding: 30px 25px;
  width: 100%;
  @media (min-width: 992px) {
    padding: 30px 35px;
    border: none;
    box-shadow: none;
    border-radius: none;
    padding: 0px;
  }
`;
