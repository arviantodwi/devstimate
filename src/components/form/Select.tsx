import styled from "styled-components";
import React, { useState } from "react";

import {
  COLOR_FORM_INPUT_BORDER,
  COLOR_FORM_INPUT_BORDER_HOVER,
  COLOR_TEXT_PRIMARY,
} from "../../app/constants";
import { ChangeEvent } from "@devstimate";
import { ReactComponent as SelectArrowIcon } from "../../assets/icons/triangle-down.svg";

type SelectOptions = {
  value: string;
  label: string;
};

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOptions[];
  groupLabel?: string;
  selectedValue?: string;
  onSelectChange?: (e: ChangeEvent) => unknown;
};

const Label = styled.label`
  margin: 0 4px;
  position: relative;
`;

const SelectInput = styled.select`
  appearance: none;
  height: 40px;
  border: solid 1px ${COLOR_FORM_INPUT_BORDER.HEX};
  border-radius: 4px;
  background: white;
  font-size: 1rem;
  font-family: inherit;
  color: ${COLOR_TEXT_PRIMARY.HEX};
  padding-left: 15px;
  padding-right: 25px;
  margin: 0;

  &:hover {
    border-color: ${COLOR_FORM_INPUT_BORDER_HOVER.HEX};
  }
`;

const SelectArrow = styled.i`
  display: inline-flex;
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Select: React.FC<Props> = ({
  id,
  name,
  options,
  groupLabel,
  selectedValue,
  onSelectChange,
  ...rest
}) => {
  const [value, setValue] = useState(selectedValue);

  const mappedOptions = options.map((option, i) => (
    <option value={option.value} key={`name-option-${i}`}>
      {option.label}
    </option>
  ));

  const handleChange = (e: ChangeEvent) => {
    setValue(e.target.value);

    if (onSelectChange) {
      return onSelectChange(e);
    }
  };

  return (
    <Label htmlFor={id}>
      <SelectInput
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {groupLabel ? (
          <optgroup label={groupLabel}>{mappedOptions}</optgroup>
        ) : (
          mappedOptions
        )}
      </SelectInput>

      <SelectArrow>
        <SelectArrowIcon width={16} height={16} fill="#363636" />
      </SelectArrow>
    </Label>
  );
};

export default Select;
