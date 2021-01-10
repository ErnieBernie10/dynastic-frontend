import { Input } from "@chakra-ui/react";
import React from "react";

interface InputFieldProps {
  name: string;
  placeholder: string;
  inputRef: any;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  inputRef,
}) => {
  return (
    <Input type="text" name={name} placeholder={placeholder} ref={inputRef} />
  );
};

export default InputField;
