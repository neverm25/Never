// #region Local Imports
import { DJobsTypography } from "@DJobs/Components/Basic";
import { MainDiv, Qualification } from "../Styles/QualificationStyles";
// #endregion Local Imports

export const renderQualifications = (i, data, screen) => {
  return (
    <MainDiv key={i}>
      {data.map((value, index) =>
        index % (screen.md ? 3 : 2) === i ? (
          <Qualification key={index}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: value ? "2px" : "0px",
              }}
            >
              {value.icon}
            </div>
            <div>
              <DJobsTypography styleName="djIconRegular" color="black90">
                {value.title}
              </DJobsTypography>
            </div>
          </Qualification>
        ) : null
      )}
    </MainDiv>
  );
};
