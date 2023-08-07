import { DJobsTypography } from "@DJobs/Components/Basic";
import {
  TabComponentsWrapper,
  TabComponentTitleWrapper,
  FilterCount,
  FilteredCounter,
} from "@DJobs/Components/CompanyProfile/Styles/CompanyProfileStyles";

type TabComponentProps = {
  title: string;
  description?: string;
  filterCount?: number;
};

const Title = ({ title }) => (
  <DJobsTypography color="black90" styleName="djSubTitleOne">
    {title}
  </DJobsTypography>
);
const Description = ({ description }) => (
  <DJobsTypography styleName="djJobviewDescription" color="black90">
    {description}
  </DJobsTypography>
);

const TabComponent = ({
  title,
  description,
  filterCount,
}: TabComponentProps) => (
  <TabComponentsWrapper>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title title={title} />
      {filterCount && (
        <FilteredCounter>
          <FilterCount>{filterCount}</FilterCount>
        </FilteredCounter>
      )}
    </div>
    {description && (
      <div style={{ paddingTop: "30px" }}>
        <Description description={description} />
      </div>
    )}
  </TabComponentsWrapper>
);

const TabComponentTitle = ({
  title,
  description,
  filterCount,
}: TabComponentProps) => (
  <TabComponentTitleWrapper>
    <div style={{ display: "flex", alignItems: "center" }}>
      <Title title={title} />
      {filterCount && (
        <FilteredCounter>
          <FilterCount>{filterCount}</FilterCount>
        </FilteredCounter>
      )}
    </div>
    {description && (
      <div style={{ paddingTop: "30px" }}>
        <Description description={description} />
      </div>
    )}
  </TabComponentTitleWrapper>
);

export const CompanyProfileCommon = {
  TabComponent,
  TabComponentTitle,
  Title,
  Description,
};
