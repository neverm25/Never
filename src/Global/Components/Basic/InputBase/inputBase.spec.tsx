// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render, fireEvent } from "@Test/utils";
import { InputBase } from ".";

// #endregion Local Imports

describe("Basic Components", () => {
  describe("InputBase", () => {
    it("should match snapshot", () => {
      const { container } = render(
        <InputBase
          key="unique-key"
          type="text"
          name="uniqueName"
          hasLabel={true}
          label="Input base label"
          value="inputBaseValue"
          isSearch={false}
          placeholder="Enter Text ..."
        />
      );
      expect(container).toMatchSnapshot();
    });

    it("should have placeholder", () => {
      const { getByPlaceholderText } = render(
        <InputBase
          key="unique-key"
          type="text"
          name="uniqueName"
          hasLabel={true}
          label="Input base label"
          value="inputBaseValue"
          isSearch={false}
          placeholder="Enter Text ..."
        />
      );
      expect(getByPlaceholderText("Enter Text ...")).toHaveProperty(
        "placeholder"
      );
    });

    it("value should have match", () => {
      const { getByPlaceholderText } = render(
        <InputBase
          key="unique-key"
          type="text"
          name="uniqueName"
          hasLabel={true}
          label="Input base label"
          value="inputBaseValue"
          placeholder="Enter Text ..."
        />
      );
      expect(getByPlaceholderText("Enter Text ...").value).toEqual(
        "inputBaseValue"
      );
    });

    it("count value should have increased", () => {
      let count = 0;
      const { container, getByPlaceholderText } = render(
        <InputBase
          key="unique-key"
          type="text"
          onChangeHandler={() => {
            count++;
          }}
          name="uniqueName"
          hasLabel={true}
          label="Input base label"
          value="inputBaseValue"
          isSearch={false}
          placeholder="Enter Text ..."
          hasError={true}
        />
      );

      fireEvent.change(getByPlaceholderText("Enter Text ..."), {
        target: { value: "je" },
      });

      expect(count).toEqual(1);
    });

    it("on error border color should have red", () => {
      const wrapper = render(
        <InputBase
          key="unique-key"
          type="text"
          name="uniqueName"
          hasLabel={true}
          label="Input base label"
          value="inputBaseValue"
          isSearch={false}
          placeholder="Enter Text ..."
          hasError={true}
          errorMsg="This is Error"
        />
      );

      expect(wrapper.getByPlaceholderText("Enter Text ...")).toHaveStyle(
        "border-color:#E91145"
      );
    });

    it("should have error message", () => {
      const wrapper = render(
        <InputBase
          key="unique-key"
          type="text"
          name="uniqueName"
          hasLabel={true}
          label="Input base label"
          value="inputBaseValue"
          isSearch={false}
          placeholder="Enter Text ..."
          hasError={true}
          errorMsg="This is Error"
        />
      );

      expect(wrapper.getByText("This is Error")).toBeInTheDocument();
    });

    it("should get onchange value", () => {
      let value = "james";
      const wrapper = render(
        <InputBase
          key="unique-key"
          type="text"
          onChangeHandler={e => {
            return (value = e.target.value);
          }}
          name="uniqueName"
          hasLabel={true}
          label="Input base label"
          isSearch={false}
          placeholder="Enter Text ..."
          hasError={true}
          value={value}
        />
      );

      fireEvent.change(wrapper.getByPlaceholderText("Enter Text ..."), {
        target: { value: "jaco" },
      });

      expect(value).toEqual("jaco");
    });
  });
});
