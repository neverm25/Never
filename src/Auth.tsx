import { useEffect } from "react";
import { actions, RootState, useAppDispatch } from "@Redux";
import { useSelector } from "react-redux";
import { Login } from "@DJobs/Components";
import { ApplicationLogin } from "@DJobs/Components/Application/ApplicationLogin";
import { useRouter } from "next/router";
import { SearchedJobsList } from "@Redux/slices/SearchedJobsList/SearchedJobsList";
interface Auth {
  jobData?: SearchedJobsList.ApplyJobData;
  children: any;
}
const AuthCheck: React.FC<Auth> = ({ children, jobData }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isApplicationPage = router.pathname.startsWith("/DJobs/application");
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedin);

  useEffect(() => {
    isApplicationPage && dispatch(actions.jobData.setApplyJobData(jobData));
  }, []);

  if (isLoggedIn) {
    return children;
  }

  if (isApplicationPage) {
    return <ApplicationLogin />;
  }
  return <Login type="login" />;
};
export default AuthCheck;
