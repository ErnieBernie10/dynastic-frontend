import { Input, InputProps } from "@chakra-ui/react";
import React from "react";

interface InputFieldProps extends InputProps {
  name: string;
  placeholder: string;
  inputRef: any;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  inputRef,
  ...rest
}) => {
  return (
    <Input
      type="text"
      name={name}
      placeholder={placeholder}
      ref={inputRef}
      {...rest}
    />
  );
};

export default InputField;
