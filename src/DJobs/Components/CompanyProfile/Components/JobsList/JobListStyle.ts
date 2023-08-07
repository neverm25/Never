import styled from "styled-components";

export const JobsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaginationWrapper = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  @media (min-width: 992px) {
    margin-top: 32px;
    justify-content: start;
  }
`;

export const JobSubList = styled.div`
  margin-top: 20px;
`;
