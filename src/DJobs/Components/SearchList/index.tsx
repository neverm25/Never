import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { SearchResultsHeader } from "./SearchListHeader";
import { DeviceTypeHelpers } from "@Helpers/index";
import { JobDescription } from "./JobDescription";
import { PageContentWrapper } from "../Layout/PageContentWrapper/Styles";
import { JobsList } from "../Common/JobListCommon/JobsList";
import { PaginationBase } from "@Global/Components/Basic/Pagination";
import { PaginationWrapper } from "../CompanyProfile/Components/JobsList/JobListStyle";
import { SearchResults } from "./SearchList";
import { DJobsTypography } from "../Basic";
import { JobSearchAPI } from "@API/JobSearchAPI";
import { SearchListStyles } from "./SearchListStyles";
import { actions, useAppDispatch, useAppSelector } from "@Redux";
import { AdUnit } from "../Basic/AdUnit";
import { adSlots } from "../Basic/AdUnit/Ad_slots";
//import { FilterGroupButton } from "./FilterGroupButton";
//import { FilterGroupButtonProps } from "./FilterGroupButton/FilterGroupButton";

const datePostedOptions = [
  { label: "Past Month", value: "Past Month" },
  { label: "Past Week", value: "Past Week" },
  { label: "Past Day", value: "Past Day" },
];
const LoadingContent = (
  <SearchListStyles.Wrapper>
    <DJobsTypography styleName="djCardsTitle" color="black90">
      Loading...
    </DJobsTypography>
  </SearchListStyles.Wrapper>
);
const JobNotFoundContent = (
  <SearchListStyles.Wrapper>
    <DJobsTypography styleName="djCardsTitle" color="black90">
      {`We're sorry, that didn't yield any results... `}
    </DJobsTypography>
    <DJobsTypography styleName="djTextRegular" color="black90">
      {`Try double checking your search for any typos or use a different search term. `}
    </DJobsTypography>
  </SearchListStyles.Wrapper>
);

export const SearchList = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const job_title = router.query.job_title as string;
  const location = router.query.location as string;
  const datePosted = router.query.date_posted as string;
  const skills = router.query.skills as string;
  const industry = router.query.industries as string;
  const page_number = router.query.page_number as string;

  const [width, setWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [jobsListData, setJobsListData] = useState(
    null as SearchResults.jobsList
  );

  const [pageNumber, setPageNumber] = useState(1);
  // const [filterOption, setFilterOption] = useState({
  //   skills: [],
  //   industries: [],
  // } as SearchResults.filterType);
  const defaultFilterOption = {
    date_posted: "",
    skills: [],
    industry: [],
  };
  const [filterValue, setFilterValue] = useState(defaultFilterOption);

  const handleWindowResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const searchFilterData = formData => {
    formData.append("is_internal", "true");
    JobSearchAPI.getJobsData(formData).then(response => {
      if (response.data.jobs.length === 0) {
        dispatch(actions.jobData.setSelectedJobId(""));
      }
      setJobsListData(response.data);
      dispatch(actions.jobData.setSearchedJobsListFromAPI(response.data));
      //setFilterOption(response.data.filters);
      setIsLoading(false);
      if (datePosted) {
        if (datePostedOptions.find(p => p.label === datePosted))
          setFilterValue({ ...filterValue, date_posted: datePosted });
        else {
          setFilterValue({ ...filterValue, date_posted: "" });
        }
      } else {
        setFilterValue({ ...filterValue, date_posted: "" });
      }

      if (skills) {
        let p = skills.replace("||", " ").split(" ");
        let result = response.data.filters.skills
          .map(p => p.key)
          .filter(d => p.includes(d));

        setFilterValue(p => ({ ...p, skills: result }));
      } else {
        setFilterValue(p => ({ ...p, skills: [] }));
      }

      if (industry) {
        let p = industry.replace("||", " ").split(" ");
        let result = response.data.filters.industries
          .map(p => p.key)
          .filter(d => p.includes(d));
        setFilterValue(p => ({ ...p, industry: result }));
      } else {
        setFilterValue(p => ({ ...p, industry: [] }));
      }

      if (page_number && !isNaN(Number(page_number))) {
        let p = Number(page_number) <= 0 ? "1" : page_number;
        formData.append("page_number", p);
      }
    });
  };

  useEffect(() => {
    const formData = new FormData();
    job_title && formData.append("job_title", job_title);
    location && formData.append("location", location);
    skills && formData.append("skills", skills);
    industry && formData.append("industries", industry);
    if (datePosted && datePostedOptions.find(p => p.label === datePosted)) {
      const date_posted = datePosted
        .toLocaleLowerCase()
        .split(" ")
        .join("_");
      formData.append("date_posted", date_posted);
    }
    if (page_number && !isNaN(Number(page_number))) {
      const pageNumber = Number(page_number) <= 0 ? "1" : page_number;
      setPageNumber(Number(pageNumber));
      formData.append("page_number", pageNumber);
    } else {
      formData.append("page_number", "1");
      setPageNumber(1);
    }
    searchFilterData(formData);
  }, [job_title, location, skills, industry, datePosted, page_number]);

  const onSearchFilter = (page_number = 0) => {
    const location = router.query.location as string;
    const cityName = router.query.cityName as string;
    let url = new URL(window.location.href);
    url.searchParams.set("location", location);
    url.searchParams.set("cityName", cityName);
    url.searchParams.set("date_posted", filterValue?.date_posted);
    url.searchParams.set("skills", filterValue?.skills?.join("||"));
    url.searchParams.set("industries", filterValue?.industry?.join("||"));
    url.searchParams.set(
      "page_number",
      page_number === 0
        ? pageNumber.toLocaleString()
        : page_number.toLocaleString()
    );

    router.replace(`/search-list${url.search}`, null, { shallow: true });
  };

  // prepare filter option data
  // const filteredOptionData = () => {
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
  // };

  const { selectedJob } = useAppSelector(store => store.jobData);
  const isMobile = DeviceTypeHelpers.isDeviceIsOrSmall({
    comparedTo: "tablet",
  });

  const JobContent = (
    <React.Fragment>
      <Head>
        <title>{job_title + " Jobs | Ditto Jobs"}</title>
      </Head>
      {/* <FilterGroupButton
        filteredOptionData={filteredOptionData()}
        setFilterValue={setFilterValue}
      /> */}
      <SearchListStyles.SearchResultContents>
        {jobsListData?.jobs.length > 0 ? (
          <JobsList
            jobsList={jobsListData.jobs}
            itemsForNextAd={10}
            redirectToJobPage={isMobile}
            onClickJobDetails={id => {
              dispatch(actions.jobData.setSelectedJobId(id));
            }}
          />
        ) : (
          JobNotFoundContent
        )}
        {DeviceTypeHelpers.isDeviceIsOrBig({
          comparedTo: "desktop",
        }) &&
          selectedJob && <JobDescription JobData={selectedJob} />}
      </SearchListStyles.SearchResultContents>
      <PaginationWrapper>
        <PaginationBase
          itemsPerPage={jobsListData?.jobs.length}
          totalItems={jobsListData?.total_jobs}
          paginationType={"default"}
          currentPageNumber={pageNumber}
          onChange={selectedPageNumber => {
            setPageNumber(selectedPageNumber);
            onSearchFilter(selectedPageNumber);
            window.scrollTo({
              top: 100,
              left: 0,
              behavior: "smooth",
            });
          }}
        />
      </PaginationWrapper>
    </React.Fragment>
  );

  const content = isLoading ? LoadingContent : JobContent;

  return (
    <React.Fragment>
      <PageContentWrapper>
        <SearchListStyles.SearchResultsWrapper>
          <SearchResultsHeader />
          <AdUnit.GoogleAdSense
            type="rectangle"
            adSlot={adSlots.searchResultsTop}
          />
          {content}
        </SearchListStyles.SearchResultsWrapper>
      </PageContentWrapper>
    </React.Fragment>
  );
};
