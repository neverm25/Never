import React from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react";

import { DjobsButton } from "./index";
import { DJobsTypography } from "..";

const meta: Meta = {
  title: "Components/DJobs/DjobsButton",
  component: DjobsButton.Main,
};
export default meta;

const Label = ({ value }) => (
  <DJobsTypography styleName="djHeadingTwo" color="textDarker">
    {value}
  </DJobsTypography>
);

export const Main = () => (
  <Container>
    <Column>
      <ButtonLabelWrapper>
        <Label value="Primary -" />
        <DjobsButton.Main variant="Primary" label="Search" />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Success -" />
        <DjobsButton.Main variant="Success" label="Register" />
      </ButtonLabelWrapper>
    </Column>

    <Column>
      <ButtonLabelWrapper>
        <Label value="Disabled Primary -" />
        <DjobsButton.Main variant="Primary" label="Search" disabled={true} />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Disabled Success -" />
        <DjobsButton.Main variant="Success" label="Register" disabled={true} />
      </ButtonLabelWrapper>
    </Column>
  </Container>
);

export const Apply = () => (
  <Container>
    <Column>
      <ButtonLabelWrapper>
        <Label value="Primary -" />
        <DjobsButton.Apply variant="Primary" label="Apply" />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Success -" />
        <DjobsButton.Apply variant="Success" label="Apply" />
      </ButtonLabelWrapper>
    </Column>
  </Container>
);

export const Actions = () => (
  <Container>
    <Column>
      <ButtonLabelWrapper>
        <Label value="Cancel -" />
        <DjobsButton.Actions variant="Cancel" label="Cancel" />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Close -" />
        <DjobsButton.Actions variant="Close" label="Close" />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Submit -" />
        <DjobsButton.Actions variant="Submit" label="Submit" />
      </ButtonLabelWrapper>
    </Column>

    <Column>
      <ButtonLabelWrapper>
        <Label value="Disabled Cancel -" />
        <DjobsButton.Actions variant="Cancel" label="Cancel" disabled={true} />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Disabled Close -" />
        <DjobsButton.Actions variant="Close" label="Close" disabled={true} />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Disabled Submit -" />
        <DjobsButton.Actions variant="Submit" label="Submit" disabled={true} />
      </ButtonLabelWrapper>
    </Column>
  </Container>
);

export const NavActions = () => (
  <Container>
    <Column>
      <ButtonLabelWrapper>
        <Label value="Stepper -" />
        <DjobsButton.NavActions variant="Stepper" label="Next" />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Submit -" />
        <DjobsButton.NavActions variant="Submit" label="View" />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="View -" />
        <DjobsButton.NavActions variant="View" label="View" />
      </ButtonLabelWrapper>
    </Column>

    <Column>
      <ButtonLabelWrapper>
        <Label value="Disabled Stepper -" />
        <DjobsButton.NavActions
          variant="Stepper"
          label="Next"
          disabled={true}
        />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Disabled Submit -" />
        <DjobsButton.NavActions variant="Submit" label="Next" disabled={true} />
      </ButtonLabelWrapper>
      <ButtonLabelWrapper>
        <Label value="Disabled View -" />
        <DjobsButton.NavActions variant="View" label="View" disabled={true} />
      </ButtonLabelWrapper>
    </Column>
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 50px;
  gap: 100px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const ButtonLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
