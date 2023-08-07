import React from "react";
import { Checkbox, Space } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

type DjCheckboxGroupProps = {
  options: { label: string; value: string }[];
  onChange: (checkedValue: CheckboxValueType[]) => void;
  value: CheckboxValueType[];
};

const DjCheckboxGroup = (props: DjCheckboxGroupProps) => {
  const { options, onChange, value } = props;
  return (
    <React.Fragment>
      <Checkbox.Group
        onChange={checkedValue => onChange(checkedValue)}
        value={value}
      >
        <Space direction="vertical">
          {options.map(option => {
            return (
              <Checkbox key={option.label} value={option.value}>
                {option.label}
              </Checkbox>
            );
          })}
        </Space>
      </Checkbox.Group>
    </React.Fragment>
  );
};

export default DjCheckboxGroup;
