import { StyledComponent } from "styled-components";
declare namespace DjobsButtonProps {
  type Category = "main" | "apply" | "actions" | "navActions" | "others";
  type ButtonCommonProps = {
    onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    label: string;
    width?: string;
    btnType?: "button" | "submit" | "reset";
    disabled?: boolean;
  };

  type mainVariants = "Primary" | "Success";
  type mainVariantsValue = {
    [key in mainVariants]: StyledComponent<"button", any>;
  };
  type mainButton = {
    variant: mainVariants;
  } & ButtonCommonProps;

  type applyVariants = "Primary" | "Success";
  type applyVariantsValue = {
    [key in applyVariants]: StyledComponent<"button", any>;
  };
  type applyButton = {
    variant: applyVariants;
  } & ButtonCommonProps;

  type actionsVariants = "Cancel" | "Close" | "Submit";
  type actionsVariantsValue = {
    [key in actionsVariants]: StyledComponent<"button", any>;
  };
  type actionsButton = {
    variant: actionsVariants;
  } & ButtonCommonProps;

  type navActionsVariants = "Stepper" | "Submit" | "View";
  type navActionsVariantsValue = {
    [key in navActionsVariants]: StyledComponent<"button", any>;
  };
  type navActionsButton = {
    variant: navActionsVariants;
  } & ButtonCommonProps;

  type othersVariants = "Signin";
  type othersVariantsValue = {
    [key in othersVariants]: StyledComponent<"button", any>;
  };
  type othersButton = {
    variant: othersVariants;
  } & ButtonCommonProps;

  type externalLinkVariants = "LightBlue" | "DarkBlue";
  type externalLinkVariantsValue = {
    [key in externalLinkVariants]: StyledComponent<"button", any>;
  };
  type externalLinkButton = {
    variant: externalLinkVariants;
  } & ButtonCommonProps;

  type Button =
    | mainButton
    | applyButton
    | actionsButton
    | navActionsButton
    | othersButton
    | externalLinkButton;
}

export { DjobsButtonProps };
