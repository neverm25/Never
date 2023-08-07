import styled from "styled-components";

const SearchResultsWrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
  padding-top: 87px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin: 0 auto;

  @media (min-width: 567px) {
    padding: 50px 20px;
  }

  @media (min-width: 992px) {
    width: 95%;
    padding: 20px 30px;
    padding-top: 87px;
    margin: 0 auto;
  }

  @media (min-width: 1600px) {
    width: 1450px;
    margin: 0 auto;
  }
`;
const Wrapper = styled.div`
  height: 63vh;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SearchResultContents = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media (min-width: 567px) {
    padding: 0 50px;
  }

  @media (min-width: 992px) {
    padding: 0 10px;
    gap: 20px;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    padding: 0 20px;
    width: 100%;
    margin: 0 auto;
    gap: 30px;
  }

  @media (min-width: 1600px) {
    gap: 60px;
  }
`;

export const SearchListStyles = {
  SearchResultsWrapper,
  Wrapper,
  SearchResultContents,
};
