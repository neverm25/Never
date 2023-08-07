import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Formik } from "formik";

import { createDjobsInputField } from "@DJobs/Components/Basic/DjobsFormFields";
import { SearchIcon } from "@DJobs/Components/Icons";
import { DjobsButton } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";

export const HeaderInputFields = () => (
  <Container>
    <Formik
      initialValues={{ text: "", headerSearchBar: "" }}
      onSubmit={() => {}}
    >
      {() => {
        const idPrefix = "header_input_";
        return (
          <React.Fragment>
            {createDjobsInputField({
              name: "city",
              inputType: "text",
              isRequired: false,
              placeholder: "City",
              idPrefix,
            })}
            <SearchWrapper>
              <div style={{ flexGrow: 1 }}>
                {createDjobsInputField({
                  name: "headerSearchBar",
                  inputType: "text",
                  isRequired: false,
                  placeholder: "Search",
                  suffix: <SearchIcon fillColor={djobsTheme.colors.black80} />,
                  idPrefix,
                })}
              </div>
              <CountryFlagContainer>
                <Image
                  src={"/static/jobViewImages/sa-flag.svg"}
                  alt="country-flag"
                  width={62}
                  height={47}
                  loading="lazy"
                />
              </CountryFlagContainer>
            </SearchWrapper>
            <DjobsButton.Main variant="Primary" label="Search" />
          </React.Fragment>
        );
      }}
    </Formik>
  </Container>
);

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
const CountryFlagContainer = styled.div`
  border-radius: 5px;
  height: 47px;
  width: 62px;
  overflow: hidden;
`;
