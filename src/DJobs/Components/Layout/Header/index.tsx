import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DjobsHeader = dynamic(import("./DjobsHeader").then(module => module));
const GumtreeHeader = dynamic(import("./GumtreeHeader").then(module => module));

const Header = () => {
  const router = useRouter();
  const isGumtree = router.pathname.startsWith("/DJobs/job/gumtree");

  return isGumtree ? <GumtreeHeader /> : <DjobsHeader />;
};

export default Header;
