// #Global Imports
import React from "react";
import { storiesOf } from "@storybook/react";
// #end Global Imports

// #Local Imports
import { Button } from ".";
import { theme } from "@Global/Theme";
import { FilterIcon, EditIcon } from "@Global/Components/Icons";
// #Local Imports
/* Main Buttons Stories */
storiesOf("Components/Basic/Button", module).add("Main Buttons", () => {
  return (
    <React.Fragment>
      <div>
        <span>Plain Button:</span>
        <Button buttonCategory="main" variant="plain">
          Button
        </Button>
      </div>
      <div>
        <span>Success Button:</span>
        <Button buttonCategory="main" variant="success">
          Button
        </Button>
      </div>
      <div>
        <span>Cancel Button:</span>
        <Button buttonCategory="main" variant="cancel">
          Button
        </Button>
      </div>
      <div>
        <span>Primary Button:</span>
        <Button buttonCategory="main" variant="primary">
          Button
        </Button>
      </div>
      <div>
        <span>Disabled Button:</span>
        <Button buttonCategory="main" variant="disabled">
          Button
        </Button>
      </div>
    </React.Fragment>
  );
});

/* Icon & Icon with Text Button Stories */
storiesOf("Components/Basic/Button", module).add("Icon Buttons", () => {
  return (
    <React.Fragment>
      <div>
        <span>Plain Icon with text Button:</span>
        <Button
          buttonCategory="icon"
          variant="plain"
          prefixIcon={<EditIcon color={theme.colors.black100} />}
        >
          Button
        </Button>
      </div>
      <div>
        <span>Success Button:</span>
        <Button
          buttonCategory="icon"
          variant="success"
          prefixIcon={<EditIcon color={theme.colors.green180} />}
        >
          Button
        </Button>
      </div>
      <div>
        <span>Cancel Button:</span>
        <Button
          buttonCategory="icon"
          variant="cancel"
          prefixIcon={<EditIcon color={theme.colors.red100} />}
        >
          Button
        </Button>
      </div>
      <div>
        <span>Disabled Button:</span>
        <Button
          buttonCategory="icon"
          variant="disabled"
          prefixIcon={<EditIcon color={theme.colors.black100} />}
        >
          Button
        </Button>
      </div>
    </React.Fragment>
  );
});

/* Dropdown Button Stories */
storiesOf("Components/Basic/Button", module).add("Dropdown Buttons", () => {
  return (
    <React.Fragment>
      <div>
        <span>Plain Icon with text Button:</span>
        <Button
          buttonCategory="dropdown"
          variant="plain"
          prefixIcon={<EditIcon color={theme.colors.black100} />}
          suffixIcon={<FilterIcon color={theme.colors.black100} />}
        >
          Button
        </Button>
      </div>
      <div>
        <span>Primary Button:</span>
        <Button
          buttonCategory="dropdown"
          variant="primary"
          prefixIcon={<EditIcon color={theme.colors.white100} />}
          suffixIcon={<FilterIcon color={theme.colors.white100} />}
        >
          Button
        </Button>
      </div>
      <div>
        <span>Disabled Button:</span>
        <Button
          buttonCategory="dropdown"
          variant="disabled"
          prefixIcon={<EditIcon color={theme.colors.black100} />}
          suffixIcon={<FilterIcon color={theme.colors.black100} />}
        >
          Button
        </Button>
      </div>
    </React.Fragment>
  );
});
