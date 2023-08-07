//region Global Imports
import styled from "styled-components";
//endregion Global Imports

export const TitleContainer = styled.div<{
  isAccordianOpen: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const SubTitleContainer = styled.div`
  @media (min-width: 992px) {
    padding-left: 30px;
  }
`;
export const Left = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex-grow: 1;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: end;
  align-items: center;
  height: fit-content;
  cursor: pointer;
`;

export const Title = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const IconWrapper = styled.span<{
  isAccordianOpen: string;
  option: string;
}>`
  cursor: pointer;
  height: 25px;

  svg {
    transform: ${({ isAccordianOpen, option }) =>
      isAccordianOpen === option ? "rotate(180deg)" : ""};
  }
`;
