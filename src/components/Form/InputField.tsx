import { forwardRef, Input, InputProps } from "@chakra-ui/react";
import React from "react";

interface InputFieldProps extends InputProps {
  name: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = forwardRef(
  ({ name, placeholder, ...rest }, ref) => {
    return (
      <Input
        type="text"
        ref={ref}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

export default InputField;
