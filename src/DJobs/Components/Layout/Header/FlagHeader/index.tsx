import { LeftArrowIcon, RightArrowIcon } from "@DJobs/Components/Icons";
import { djobsTheme } from "@DJobs/Theme";
import { theme } from "@Global/Theme";

import React, { useContext, useMemo } from "react";
import { FlageHeaderMainContainer } from "../Styles/HeaderStyles";
import Flags from "country-flag-icons/react/3x2";
import { DjobsHeaderContext } from "../DjobsHeader";

const FlagHeader = () => {
  const {
    setIsUserModalOpen,
    setIsCountryCityModalOpen,
    isCountryCityModalOpen,
    selectedFlag,
    setCitySearchValue,
    setIsJobTitleNotFound,
  } = useContext(DjobsHeaderContext);

  const renderFlag = useMemo(() => {
    let SelectedFlag = selectedFlag ? Flags[selectedFlag] : "";
    if (SelectedFlag) {
      return <SelectedFlag style={{ width: "42px", height: "29px" }} />;
    }
    return null;
  }, [selectedFlag]);
  return (
    <FlageHeaderMainContainer
      isCountryCityModalOpen={isCountryCityModalOpen}
      onClick={() => {
        setIsCountryCityModalOpen(prev =>
          prev === "country" ? "" : "country"
        );
        setIsUserModalOpen(false);
        setCitySearchValue({ id: 0, name: "" });
        setIsJobTitleNotFound(false);
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "3px",
          backgroundColor: `${djobsTheme.colors.white100}`,
        }}
      >
        {renderFlag}
        <div style={{ transform: "rotate(90deg)" }}>
          {isCountryCityModalOpen === "country" ? (
            <LeftArrowIcon color={theme.colors.black100} />
          ) : (
            <RightArrowIcon color={theme.colors.black100} />
          )}
        </div>
      </div>
    </FlageHeaderMainContainer>
  );
};

export default FlagHeader;
