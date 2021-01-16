/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, Select } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useSelect } from "react-select-search";
import { InputFieldProps } from "./WithValidation";

interface SelectProps extends InputFieldProps {
  options: { name: string; value: string }[];
  value?: string;
  disabled?: boolean;
  multiple?: boolean;
}

const SelectField: React.FC<SelectProps> = ({
  options,
  value,
  multiple,
  disabled,
  inputRef,
  name,
  placeholder,
}) => {
  return (
    <Select ref={inputRef} name={name} placeholder={placeholder}>
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectField;
