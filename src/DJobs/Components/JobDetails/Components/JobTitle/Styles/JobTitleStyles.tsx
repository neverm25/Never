import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  border-radius: 10px;
  @media (min-width: 992px) {
    gap: 29px;
  }
`;

const CompanyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const JobTitle = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  width: calc(100% - 95px);
  overflow-wrap: anywhere;

  padding-top: 5px;

  @media (min-width: 992px) {
    width: 100%;
    gap: 5px;
  }
`;

const CompanyNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const JobTitleStyles = {
  MainContainer,
  CompanyLogo,
  JobTitle,
  CompanyNameWrapper,
};
