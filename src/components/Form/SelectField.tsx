/* eslint-disable @typescript-eslint/no-unused-vars */
import { forwardRef, Input, Select, SelectFieldProps } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useSelect } from "react-select-search";
import { InputFieldProps } from "./WithValidation";

interface SelectProps extends InputFieldProps, SelectFieldProps {
  options: { name: string; value: string }[];
  value?: string;
  disabled?: boolean;
  multiple?: boolean;
}

const SelectField: React.FC<SelectProps> = forwardRef(
  ({ options, value, multiple, disabled, name, placeholder, ...rest }, ref) => {
    return (
      <Select {...rest} ref={ref} name={name} placeholder={placeholder}>
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
      </Select>
    );
  }
);

export default SelectField;
