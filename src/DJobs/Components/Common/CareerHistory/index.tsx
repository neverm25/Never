import React, { createContext, useState, useEffect } from "react";
import styled from "styled-components";
import { months } from "@Helpers/DateHelpers";
import { useAppDispatch, useAppSelector } from "@Redux";
import { DJobsTypography } from "@DJobs/Components/Basic";
import { djobsTheme } from "@DJobs/Theme";
import { PlusIcon } from "@Global/Components/Icons";
import { CareerInfo } from "@DJobs/Components/Common/CareerHistory/CareerInfo";
import { CareerInfoFormAdd } from "@DJobs/Components/Common/CareerHistory/CareerInfo/CareerInfoFormAdd";
import { CareerHistoryProps } from "./CareerHistory";
import {
  addCareerDataThunk,
  fetchCareerDataThunk,
  deleteCareerDataThunk,
  updateCareerThunk,
} from "@Redux/slices/Career";
import { Career } from "@Redux/slices/Career/Career";

export const CareerHistoryContext = createContext(
  {} as CareerHistoryProps.Context
);

export const CareerHistory = ({
  gradient = true,
  setIsAddOrEditFormOpen,
  titleStyleName = "djSubTitleOne",
}: CareerHistoryProps.IProps) => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editComponentId, setEditComponentId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMouseOverAddButton, setIsMouseOverAddButton] = useState(false);
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

  //#region Cancel Handlers
  const onCancelHandlerAdd = () => {
    setTimeout(() => {
      setIsAddFormOpen(false);
    }, 300);
    document
      .getElementById("candidateTabItem")
      .scrollIntoView({ behavior: "smooth" });
  };
  const onCancelHandlerEdit = () => {
    setIsEditFormOpen(false);
    document
      .getElementById("candidateTabItem")
      .scrollIntoView({ behavior: "smooth" });
  };
  //#endregion

  const careerHistoryContextValue: CareerHistoryProps.Context = {
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

  useEffect(() => {
    if (setIsAddOrEditFormOpen)
      setIsAddOrEditFormOpen(isAddFormOpen || isEditFormOpen);
  }, [isAddFormOpen, isEditFormOpen, setIsAddOrEditFormOpen]);

  //#region Redux state management
  const careerList = useAppSelector(state => state.career.careerList);
  const dispatch = useAppDispatch();
  const getAllCareerData = () => {
    setIsLoading(true);
    dispatch(fetchCareerDataThunk()).then(() => setIsLoading(false));
  };

  React.useEffect(() => {
    getAllCareerData();
  }, []);

  const createCareerData = (
    careerData: CareerHistoryProps.CareerInfoFormValues
  ) => {
    let date = new Date();
    let careerHistory: Career.CareerHistory = {
      job_title: careerData.jobTitle,
      company: careerData.companyName,
      from_month: months.indexOf(careerData.startedFrom_month) + 1,
      from_year: careerData.startedFrom_year,
      to_month: careerData.isCurrentPosition
        ? date.getMonth() + 1
        : months.indexOf(careerData.workedTill_month) + 1,
      to_year: careerData.isCurrentPosition
        ? date.getFullYear()
        : careerData.workedTill_year,
      is_to_present: careerData.isCurrentPosition,
      description: careerData.description,
      reason_for_leaving: careerData.isCurrentPosition
        ? ""
        : careerData.reasonForLeaving,
    };
    dispatch(addCareerDataThunk(careerHistory))
      .then(() => {
        getAllCareerData();
        document.getElementById("candidateTabItem")?.scrollIntoView({
          behavior: "smooth",
        });
        setTimeout(() => {
          setIsAddFormOpen(false);
          setSaveInitiated(false);
        }, 300);
      })
      .catch(() => setSaveInitiated(false));
  };
  function deleteCareerData(careerId: string) {
    dispatch(deleteCareerDataThunk(careerId)).then(() => {
      getAllCareerData();
      document
        .getElementById("candidateTabItem")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
  const updateCareerData = (
    updateData: CareerHistoryProps.CareerInfoFormValues & {
      id: string;
    }
  ) => {
    let careerData = {
      job_title: updateData.jobTitle,
      company: updateData.companyName,
      from_month: months.indexOf(updateData.startedFrom_month) + 1,
      from_year: updateData.startedFrom_year,
      to_month: months.indexOf(updateData.workedTill_month) + 1,
      to_year: updateData.workedTill_year,
      is_to_present: updateData.isCurrentPosition,
      description: updateData.description,
      reason_for_leaving: updateData.isCurrentPosition
        ? ""
        : updateData.reasonForLeaving,
    };
    dispatch(updateCareerThunk({ id: updateData.id, raw: careerData }))
      .then(() => {
        getAllCareerData();
        document
          .getElementById("candidateTabItem")
          .scrollIntoView({ behavior: "smooth" });
        setIsEditFormOpen(false);
        setSaveInitiated(false);
      })
      .catch(() => setSaveInitiated(false));
  };
  //#endregion

  return (
    <CareerHistoryContext.Provider value={careerHistoryContextValue}>
      <Container>
        <SubTitleWrapper>
          {gradient ? (
            <DJobsTypography color="blue100" styleName="djSubTitleOne">
              {`Career History`}
            </DJobsTypography>
          ) : (
            <DJobsTypography color="blue150" styleName={titleStyleName}>
              {`Career History`}
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
          <CareerInfoFormAdd createCareerData={createCareerData} />
        )}
        {careerList.length === 0 && !isAddFormOpen && (
          <DJobsTypography
            styleName="djCareerNotFoundMsg"
            color={ADD_FILL_COLOR}
          >
            {isLoading && "Loading..."}
            {!isLoading &&
              careerList.length === 0 &&
              "Add previous work experience here."}
          </DJobsTypography>
        )}
        <AccordiansWrapper>
          {careerList.map(careerHistory => (
            <CareerInfo
              key={careerHistory?.id}
              careerHistory={careerHistory}
              deleteData={deleteCareerData}
              updateData={updateCareerData}
            />
          ))}
        </AccordiansWrapper>
      </Container>
    </CareerHistoryContext.Provider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
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
