import styled from "styled-components";

export const MainContainer = styled.div`
  border-radius: 10px;
  padding-left: 25px;
  @media (min-width: 992px) {
    padding-left: 20px;
  }
`;

export const MainSection = styled.div`
  display: flex;
  gap: 20px;
  @media (min-width: 992px) {
    gap: 30px;
    justify-content: space-between;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 19px;

  @media (min-width: 992px) {
    gap: 12px;
  }
`;

export const Qualification = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 9px;
  }
`;
