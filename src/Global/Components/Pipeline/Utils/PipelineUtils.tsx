import {
  RatingAngryIcon,
  RatingHappyIcon,
  RatingUnhappyIcon,
} from "@Global/Components/Icons";
import { theme } from "@Global/Theme";
import * as TabItems from "../CandidateProfile/TabItems";
import { PipelineProps } from "../Pipeline";

//#region Rating
export const ratingColors: PipelineProps.RatingColors = {
  "Good fit": theme.colors.green100,
  Maybe: theme.colors.yellow150,
  "Bad fit": theme.colors.red50,
};
export const ratingIcons: PipelineProps.RatingIcons = {
  "Bad fit": <RatingAngryIcon fillColor={ratingColors["Bad fit"]} />,
  Maybe: <RatingUnhappyIcon fillColor={ratingColors["Maybe"]} />,
  "Good fit": <RatingHappyIcon fillColor={ratingColors["Good fit"]} />,
};
export const disabledRatingIcons: PipelineProps.RatingIcons = {
  "Bad fit": <RatingAngryIcon fillColor={theme.colors.black50} />,
  Maybe: <RatingUnhappyIcon fillColor={theme.colors.black50} />,
  "Good fit": <RatingHappyIcon fillColor={theme.colors.black50} />,
};
export const ratingPhases: {
  value: PipelineProps.Rating;
  label: PipelineProps.Rating;
}[] = [
  { label: "Bad fit", value: "Bad fit" },
  { label: "Good fit", value: "Good fit" },
  { label: "Maybe", value: "Maybe" },
];
//#endregion

//#region Status

//Status
export const pipelinePhases: {
  value: PipelineProps.PipelineStatus;
  label: PipelineProps.PipelineStatus;
}[] = [
  { label: "screening", value: "screening" },
  { label: "shortlist", value: "shortlist" },
  { label: "interview", value: "interview" },
  { label: "offer made", value: "offer made" },
  { label: "onboarding", value: "onboarding" },
];
//#endregion

//#region Tabbar
export const tabBarData: PipelineProps.TabData[] = [
  { label: "Work History", labelValue: "work-history", value: 0 },
  {
    label: "Education History",
    labelValue: "education-history",
    value: 0,
  },
  { label: "Attachments", labelValue: "attachments", value: 0 },
  { label: "Activity", labelValue: "activity", value: 0 },
  { label: "Comments", labelValue: "comments", value: 0 },
];
export const TabbarComponents: {
  [key in PipelineProps.TabBarType]: JSX.Element;
} = {
  "education-history": <TabItems.EducationHistory />,
  "work-history": <TabItems.WorkHistory />,
  activity: <TabItems.Activity />,
  comments: <TabItems.Comments />,
  attachments: <TabItems.Attachments />,
};
//#endregion

//#region JobData
export const jobData: PipelineProps.JobData = {
  postedDate: "28/02/2022",
};
//#endregion

export const candidateListInitialData: PipelineProps.CandidateList = [
  {
    candidateId: 1,
    name: "Jane Doe-Smith",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Good fit",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "onboarding",
    dateApplied: "10/05/2022",
    role: "React developer",
  },
  {
    candidateId: 2,
    name: "Becky Jane",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Maybe",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "interview",
    dateApplied: "28/04/2022",
    role: "Backend developer",
  },
  {
    candidateId: 3,
    name: "Joe Smith",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Good fit",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "offer made",
    dateApplied: "31/03/2022",
    role: "Backend developer",
  },
  {
    candidateId: 4,
    name: "Martin Bale",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Good fit",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "offer made",
    dateApplied: "07/05/2022",
    role: "React developer",
  },
  {
    candidateId: 5,
    name: "Michael Jackson",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Bad fit",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "screening",
    dateApplied: "30/04/2022",
    role: "Senior architect",
  },
  {
    candidateId: 6,
    name: "Jenny Darling",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Maybe",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "screening",
    dateApplied: "26/04/2022",
    role: "React developer",
  },
  {
    candidateId: 7,
    name: "Bobby Slater",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Bad fit",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "screening",
    dateApplied: "27/04/2022",
    role: "React developer",
  },
  {
    candidateId: 8,
    name: "Bobby Slater",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Bad fit",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "interview",
    dateApplied: "30/04/2022",
    role: "Senior architect",
  },
  {
    candidateId: 9,
    name: "Bobby Slater",
    location: " Cape Town, ZA",
    profilePicture: `/static/images/company-profile-image.jpg`,
    rating: "Bad fit",
    telephone: 5555555555,
    email: "email@domain.com",
    status: "shortlist",
    dateApplied: "15/05/2022",
    role: "React developer",
  },
];
