import React from "react";
import styled from "styled-components";

import { DjobsTheme } from "@DJobs/Theme/styled";
import { djobsTheme } from "@DJobs/Theme";
import { DJobsTypography } from "..";
import { DjobsButtonProps } from "./DjobsButton";
import { ExternalLinkIcon } from "@DJobs/Components/Icons";

export const ExternalLink = (props: DjobsButtonProps.externalLinkButton) => {
  const { disabled, variant, btnType } = props;

  const [fillColor, setFillColor] = React.useState<string>("");

  const LABEL_COLOR: keyof DjobsTheme.DjobsColorsWithGlobal = disabled
    ? "black50"
    : variant === "LightBlue"
    ? "blue80"
    : "blue150";

  const EXTERNAL_LINK_ICON_COLOR = {
    LightBlue: djobsTheme.colors.blue80,
    DarkBlue: djobsTheme.colors.blue150,
  };

  React.useEffect(() => {
    setFillColor(
      disabled ? djobsTheme.colors.black50 : EXTERNAL_LINK_ICON_COLOR[variant]
    );
  }, [props]);

  return (
    <ExternalLinkButton
      {...props}
      type={btnType}
      variant={variant}
      onMouseEnter={() => setFillColor(djobsTheme.colors.white100)}
      onMouseLeave={() =>
        setFillColor(!disabled && EXTERNAL_LINK_ICON_COLOR[variant])
      }
    >
      <ExternalLinkIcon fillColor={fillColor} />
      <DJobsTypography styleName="djButtonText" color={LABEL_COLOR}>
        {props.label}
      </DJobsTypography>
    </ExternalLinkButton>
  );
};

const ExternalLinkButton = styled.button<DjobsButtonProps.externalLinkButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  height: 54px;
  padding: 0px 34px;
  border-radius: 11px;
  background: ${djobsTheme.colors.white110};
  box-shadow: ${({ disabled }) =>
    disabled ? djobsTheme.effects.inputShadow : djobsTheme.effects.dropShadow};
  width: fit-content;
  width: ${({ width }) => width};
  border: ${({ disabled }) => !disabled && "1px solid #1a97f6"};
  background-opacity: ${({ disabled }) => disabled && "0.3"};
  text-transform: uppercase;

  &:hover {
    background: ${({ variant, disabled }) =>
      disabled
        ? ""
        : variant === "DarkBlue"
        ? djobsTheme.colors.blue150
        : "linear-gradient(135deg, #a8daf2 0%, #58b4fa 100%)"};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    border: ${({ disabled, variant }) =>
      !disabled && variant === "DarkBlue" && djobsTheme.colors.blue200};
    div {
      color: ${({ disabled }) => !disabled && djobsTheme.colors.white100};
    }
  }
  &:active {
    box-shadow: none;
  }
`;
