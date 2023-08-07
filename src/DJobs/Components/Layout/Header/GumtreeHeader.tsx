import Image from "next/image";
import { useRouter } from "next/router";

import { DJOBS_ROUTES } from "@DJobs/DjobsUtils";
import { GumtreeHeaderMainContainer } from "./Styles/GumtreeHeaderStyles";

const GumtreeHeader = () => {
  const router = useRouter();
  const homePagePath = ["/", "/home", "/DJobs/home"];
  const IS_HOME_PAGE = homePagePath.includes(router.pathname);

  return (
    <GumtreeHeaderMainContainer>
      <div
        onClick={() => {
          if (!IS_HOME_PAGE) router.push(DJOBS_ROUTES.home);
        }}
      >
        <Image
          src="/static/jobViewImages/ditto-white-logo-full.svg"
          alt="company-logo"
          width={129}
          height={27}
          loading="lazy"
        />
      </div>
    </GumtreeHeaderMainContainer>
  );
};

export default GumtreeHeader;
