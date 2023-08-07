import { theme } from "@Global/Theme";
import * as React from "react";
import styled from "styled-components";

type HowItWorksProps = { Content: string };

const PostTypesDescription = ({ Content }: HowItWorksProps) => (
  <Description>
    <ExtraBold>{`How it works : `}</ExtraBold>
    <React.Fragment>
      <Regular>{Content}</Regular>
    </React.Fragment>
  </Description>
);
export default PostTypesDescription;

const Description = styled.div`
  text-align: left;
`;

const ExtraBold = styled.span`
  color: ${theme.colors.black90};
  ${theme.text.captionsCapsAllBold};
  text-transform: uppercase;
`;

const Regular = styled.span`
  line-height: initial;
  ${theme.text.captionsRegular};
  color: ${theme.colors.black80};
`;
