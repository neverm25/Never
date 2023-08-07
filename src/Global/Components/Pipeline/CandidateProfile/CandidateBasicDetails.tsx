import React, { useContext } from "react";
import { Flex, Box } from "reflexbox";
import styled from "styled-components";

import { theme } from "@Global/Theme";
import { Button, DropdownMenu } from "@Global/Components/Basic";
import { PersonIcon, MoveIcon, GradientIcons } from "@Global/Components/Icons";
import { Typography } from "@Global/Components/Basic/Typography";
import {
  disabledRatingIcons,
  pipelinePhases,
  ratingIcons,
} from "@Global/Components/Pipeline/Utils/PipelineUtils";
import { PipelineContext } from "..";
import { PipelineProps } from "../Pipeline";
import { GradientText } from "@Global/Components/Basic/GradientText";
import { IDropdownMenu } from "@Global/Components/Basic/DropdownMenu/DropdownMenu";

export const CandidateBasicDetails = () => {
  const [isDragging, setDragging] = React.useState(false);

  //Update candidate status while drag and drop
  const { selectedCandidate, updateSelectedCandidateField } = useContext(
    PipelineContext
  );
  const {
    name,
    location,
    telephone,
    email,
    rating,
    profilePicture,
  } = selectedCandidate;

  return (
    <BasicDetailsWrapper>
      <CandidateProfileDetails>
        <GradientText
          styleName="headingThree"
          gradient="purple100"
        >{`Candidate’s Profile`}</GradientText>
        <ProfileDetails>
          <div
            draggable={true}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
          >
            <MoveIconWrapper isDragging={isDragging}>
              <MoveIcon />
            </MoveIconWrapper>
            <ProfileImage
              src={profilePicture}
              alt={`${name}_Profile`}
              width="140px"
              height="140px"
            />
          </div>
          <CandidateDetails>
            <CandidateName>{name}</CandidateName>

            <CandidateData>
              <LocationIconWrapper>
                <GradientIcons.LocationIcon />
              </LocationIconWrapper>
              <CandidateDetailsLabel>{location}</CandidateDetailsLabel>
            </CandidateData>

            <CandidateData>
              <GradientIcons.TelephoneIcon />
              <CandidateDetailsLink>{telephone}</CandidateDetailsLink>
            </CandidateData>

            <CandidateData>
              <GradientIcons.MailIcon />
              <CandidateDetailsLink>{email}</CandidateDetailsLink>
            </CandidateData>

            <Rating>
              <RatingTitle>{`RATING:`}</RatingTitle>
              {Object.keys(ratingIcons).map(
                (ratingKey: PipelineProps.Rating) => (
                  <RatingIconWrapper
                    key={ratingKey}
                    onClick={() => {
                      updateSelectedCandidateField({
                        fieldName: "rating",
                        fieldValue: ratingKey,
                      });
                    }}
                  >
                    {ratingKey === rating
                      ? ratingIcons[ratingKey]
                      : disabledRatingIcons[ratingKey]}
                  </RatingIconWrapper>
                )
              )}
            </Rating>
          </CandidateDetails>
        </ProfileDetails>
      </CandidateProfileDetails>

      <PipelineDetails>
        <Typography styleName="smallCaps" color="primaryBlack">
          {`PIPELINE PHASE:`}
        </Typography>

        <Flex flexDirection="row" mt="5px">
          <Box mr="0.5rem">
            <Button
              buttonCategory="icon"
              variant="cancel"
              prefixIcon={<PersonIcon fillColor={theme.colors.red100} />}
            />
          </Box>
          <DropdownMenu
            menuItemBackground="primary"
            menuItems={pipelinePhases}
            selectedLabel={selectedCandidate.status}
            selectedValue={selectedCandidate.status}
            onClickHandler={(item: IDropdownMenu.MenuiItem) => {
              updateSelectedCandidateField({
                fieldName: "status",
                fieldValue: item.value,
              });
            }}
          />
        </Flex>
      </PipelineDetails>
    </BasicDetailsWrapper>
  );
};

const BasicDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;
const CandidateProfileDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 70%;
`;
const ProfileDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
`;
const PipelineDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
`;
const MoveIconWrapper = styled.div<{ isDragging: boolean }>`
  display: ${({ isDragging }) => (!isDragging ? "block" : "none")};
  height: 23px;
  width: 23px;
  background: ${({ theme }) => theme.gradients.yellow100};
  position: absolute;
  top: 45px;
  left: 0px;
  border-radius: 4px;
  padding: 3px;
  cursor: grab;
`;
const ProfileImage = styled.img`
  border-radius: 16px;
  border: 8px solid ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.effects.boxShadow};
`;
const CandidateName = styled.label`
  ${({ theme }) => theme.text.headingTwo};
  color: ${({ theme }) => theme.colors.black100};
`;

const CandidateData = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;
const LocationIconWrapper = styled.span`
  position: relative;
  right: 2px;
  top: 1px;
  height: 16px;
`;
const CandidateDetailsLabel = styled.label`
  ${({ theme }) => theme.text.bodySmall};
  color: ${({ theme }) => theme.colors.black80};
  padding-left: 8px;
`;
const CandidateDetailsLink = styled.a`
  ${({ theme }) => theme.text.bodySmall};
  color: ${({ theme }) => theme.colors.black80};
  padding-left: 8px;
`;
const Rating = styled.div`
  display: flex;
  justify-content: start;
  padding-right: 5px;
  align-items: center;
  cursor: pointer;
`;
const RatingTitle = styled.label`
  ${({ theme }) => theme.text.subTitleTwo};
  color: ${({ theme }) => theme.colors.black100};
`;
const RatingIconWrapper = styled.button`
  padding-left: 8px;
  cursor: pointer;
  border: 0;
  background: transparent;
`;
const CandidateDetails = styled.div`
  margin: 30px 20px;
`;
