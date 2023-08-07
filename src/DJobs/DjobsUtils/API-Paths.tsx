const basePath = process.env.NEXT_PUBLIC_TS_API;
const filesBasePath = process.env.NEXT_PUBLIC_TS_FILES;

//SOCIAL AUTHENTICATION
const googleRegister = basePath + "/social_auth/google";
const facebookRegister = basePath + "/social_auth/facebook";
const linkedinRegister = basePath + "/social_auth/linkedin";

//PREDEFINED VALUES RETRIVAL
const languages = basePath + "/languages/";
const skills = basePath + "/skills/";

//CANDIDATE RELATED APIs
const candidates = basePath + "/candidates/";
const register = basePath + "/candidates/signup";
const login = basePath + "/candidates/login";
const candidateOverview = basePath + "/candidates/overview";
const profilePicture = basePath + "/candidates/profile-picture";
const candidateLanguages = basePath + "/candidate-languages";
const candidateSkills = basePath + "/candidate-skills";
const candidateSubmittedCV = basePath + "/candidates/submitted_cv/";
const candidateCv = basePath + "/cv-generate";

//COMPANY RELATED APIs
const companyProfile = basePath + "/company";
const companySubmitCV = basePath + "/company/submit_cv";
const jobDetails = basePath + "/job/find";
const jobSearch = basePath + "/jobs/search/results";
const city = basePath + "/cities";
const career = basePath + "/candidates-work";
const education = basePath + "/candidates-tertiary";
const candidatesFile = basePath + "/candidates-file";
const updatePassword = basePath + "/candidates/update-password";
const emailUpdate = basePath + "/candidates/email-settings";
const deleteAccount = basePath + "/candidates/delete-profile";
const forgotPassword = basePath + "/candidates/forgot-password";
const resetPassword = basePath + "/candidates/reset-password";

//APPLICATION RELATED APIs
const application = basePath + "/job-application";
const submittedCV = basePath + "/candidates/submitted_cv";
const submitCV = basePath + "/company/submit_cv";
const cvParse = basePath + "/parse";

export const DJOBS_API_PATHS = {
  basePath,
  filesBasePath,

  googleRegister,
  facebookRegister,
  linkedinRegister,

  languages,
  skills,

  candidates,
  register,
  login,
  candidateOverview,
  profilePicture,
  candidateLanguages,
  candidateSkills,
  candidateSubmittedCV,
  application,
  career,
  education,
  companyProfile,
  companySubmitCV,
  jobDetails,
  jobSearch,
  city,
  candidateCv,

  submittedCV,
  submitCV,
  candidatesFile,
  updatePassword,
  emailUpdate,
  cvParse,
  deleteAccount,
  forgotPassword,
  resetPassword,
};
