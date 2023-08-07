import React, { useContext, useState } from "react";
import styled from "styled-components";

import { GradientIcons } from "@Global/Components/Icons";
import { AdditionalInfoContext } from "..";

export const AdditionalDetailHeader = () => {
  const { setIsEditMode } = useContext(AdditionalInfoContext);
  //Hover effect for EditIcon
  const [isMouseOverEditIcon, setIsMouseOverEditIcon] = useState(false);

  return (
    <AdInfoHeadingWrap>
      <EditIconWrapper
        onClick={() => {
          setIsEditMode(true);
          setIsMouseOverEditIcon(false);
        }}
        onMouseOver={() => setIsMouseOverEditIcon(true)}
        onMouseLeave={() => setIsMouseOverEditIcon(false)}
      >
        {isMouseOverEditIcon ? (
          <GradientIcons.EditIconHover />
        ) : (
          <GradientIcons.EditIcon />
        )}
      </EditIconWrapper>
    </AdInfoHeadingWrap>
  );
};

const AdInfoHeadingWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const EditIconWrapper = styled.div`
  cursor: pointer;
`;
