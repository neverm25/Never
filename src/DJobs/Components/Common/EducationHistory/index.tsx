import React, { createContext, useState, useEffect } from "react";
import styled from "styled-components";

import { DJobsTypography } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { PlusIcon } from "@Global/Components/Icons";
import { EducationInfoFormAdd } from "@DJobs/Components/Common/EducationHistory/EducationInfo/EducationInfoFormAdd";
import { EducationInfo } from "./EducationInfo";
import { EducationHistoryProps } from "./EducationHistory";
import { useAppDispatch, useAppSelector } from "@Redux";
import {
  addEducationDataThunk,
  deleteEducationDataThunk,
  fetchEducationDataThunk,
  updateEducationDataThunk,
} from "@Redux/slices/Education";

export const EducationHistoryContext = createContext(
  {} as EducationHistoryProps.Context
);

export const EducationHistory = ({
  gradient = true,
  setIsAddOrEditFormOpen,
  titleStyleName = "djSubTitleOne",
}: EducationHistoryProps.IProps) => {
  const educationData = useAppSelector(store => store.education.educationData);
  const dispatch = useAppDispatch();
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editComponentId, setEditComponentId] = useState(0);
  const [isMouseOverAddButton, setIsMouseOverAddButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [saveInitiated, setSaveInitiated] = useState(false);

  const ADD_DISABLED_COLOR = "black20";
  const ADD_HOVER_COLOR = "black50";
  const ADD_DEFAULT_COLOR = "black90";
  const ADD_DISABLED = isEditFormOpen;
  const ADD_FILL_COLOR = ADD_DISABLED
    ? ADD_DISABLED_COLOR
    : isMouseOverAddButton
    ? ADD_HOVER_COLOR
    : ADD_DEFAULT_COLOR;

  //#region Cancel handlers
  const onCancelHandlerAdd = () => {
    document
      .getElementById("candidateTabItem")
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setIsAddFormOpen(false);
    }, 100);
  };
  const onCancelHandlerEdit = () => {
    setIsEditFormOpen(false);
    document
      .getElementById("candidateTabItem")
      .scrollIntoView({ behavior: "smooth" });
  };
  //#endregion

  const EducationHistoryContextValues: EducationHistoryProps.Context = {
    isAddFormOpen,
    setIsAddFormOpen,
    isEditFormOpen,
    setIsEditFormOpen,
    editComponentId,
    setEditComponentId,
    saveInitiated,
    setSaveInitiated,
    onCancelHandlerAdd,
    onCancelHandlerEdit,
  };
  const getAllEducationData = () => {
    setIsLoading(true);
    dispatch(fetchEducationDataThunk()).then(() => {
      setIsLoading(false);
    });
  };
  const createEducationData = educationData => {
    let raw = {
      institution: educationData.institution,
      year_from: educationData.startedFrom_year,
      year_to: educationData.studiedTill_year,
      qualification: educationData.qualification,
      description: educationData.description,
    };
    dispatch(addEducationDataThunk(raw)).then(() => {
      setSaveInitiated(false);
      getAllEducationData();
      document.getElementById("candidateTabItem")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  };

  const deleteEducationData = id => {
    dispatch(deleteEducationDataThunk(id))
      .then(() => {
        getAllEducationData();
        document.getElementById("candidateTabItem")?.scrollIntoView({
          behavior: "smooth",
        });
        setIsEditFormOpen(false);
      })
      .catch(() => setSaveInitiated(false));
  };

  const updateEducationData = (
    updateData: EducationHistoryProps.EducationInfoFormValues & {
      id: number;
    }
  ) => {
    let raw = {
      institution: updateData.institution,
      year_from: updateData.startedFrom_year,
      year_to: updateData.studiedTill_year,
      qualification: updateData.qualification,
      description: updateData.description,
    };
    dispatch(updateEducationDataThunk({ id: updateData.id, raw: raw }))
      .then(() => {
        setSaveInitiated(false);
        getAllEducationData();
        document.getElementById("candidateTabItem")?.scrollIntoView({
          behavior: "smooth",
        });
        setIsEditFormOpen(false);
      })
      .catch(() => setSaveInitiated(false));
  };

  React.useEffect(() => {
    getAllEducationData();
  }, []);

  useEffect(() => {
    if (setIsAddOrEditFormOpen) {
      setIsAddOrEditFormOpen(isAddFormOpen || isEditFormOpen);
    }
  }, [isAddFormOpen, isEditFormOpen, setIsAddOrEditFormOpen]);
  //Add button hover state

  return (
    <EducationHistoryContext.Provider value={EducationHistoryContextValues}>
      <Container>
        <SubTitleWrapper>
          {gradient ? (
            <DJobsTypography color="blue100" styleName={titleStyleName}>
              {`Education History`}
            </DJobsTypography>
          ) : (
            <DJobsTypography color="blue150" styleName={titleStyleName}>
              {`Education History`}
            </DJobsTypography>
          )}
          {!isAddFormOpen && (
            <div
              onMouseOver={() => setIsMouseOverAddButton(true)}
              onMouseLeave={() => setIsMouseOverAddButton(false)}
              onClick={() => setIsMouseOverAddButton(false)}
            >
              <AddButton
                onClick={() => setIsAddFormOpen(true)}
                disabled={ADD_DISABLED}
              >
                <PlusIcon fillColor={djobsTheme.colors[ADD_FILL_COLOR]} />
                <DJobsTypography
                  styleName="djButtonIcon"
                  color={ADD_FILL_COLOR}
                >
                  ADD
                </DJobsTypography>
              </AddButton>
            </div>
          )}
        </SubTitleWrapper>
        {isAddFormOpen && (
          <EducationInfoFormAdd createEducationData={createEducationData} />
        )}
        {educationData.length === 0 && !isAddFormOpen && (
          <DJobsTypography
            styleName="djCareerNotFoundMsg"
            color={ADD_FILL_COLOR}
          >
            {isLoading && "Loading..."}
            {!isLoading &&
              educationData.length === 0 &&
              "Add previous education history here."}
          </DJobsTypography>
        )}
        <AccordiansWrapper>
          {educationData.map(educationHistory => (
            <EducationInfo
              key={educationHistory.id}
              educationHistory={educationHistory}
              deleteData={deleteEducationData}
              updateData={updateEducationData}
            />
          ))}
        </AccordiansWrapper>
      </Container>
    </EducationHistoryContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const SubTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`;
const AccordiansWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;
  @media (min-width: 992px) {
    gap: 30px;
    padding-top: 20px;
  }
`;
const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  align-items: center;
  align-self: flex-end !important;
  padding: 7px 8px;
  width: fit-content;
  background: ${({ disabled }) =>
    disabled ? djobsTheme.colors.black10 : djobsTheme.colors.white100};
  border: ${({ disabled }) => (disabled ? 0 : 0.836836)}px solid
    ${djobsTheme.colors.black50};
  box-shadow: ${({ disabled }) =>
    disabled ? djobsTheme.effects.inputShadow : djobsTheme.effects.PlainButton};
  border-radius: 8.36836px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  @media (min-width: 992px) {
    margin-right: 30px;
  }
`;
