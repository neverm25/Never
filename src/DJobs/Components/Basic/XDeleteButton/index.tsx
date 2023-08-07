import { UniconsLibraryIcons } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import React from "react";
import styled from "styled-components";

type XDeleteButtonProps = {
  onClick: () => void;
};

export const XDeleteButton = ({ onClick }: XDeleteButtonProps) => (
  <Container onClick={onClick}>
    <UniconsLibraryIcons.CancelIconWithCircle
      color={djobsTheme.colors.black80}
      size={19}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  cursor: pointer;
`;
