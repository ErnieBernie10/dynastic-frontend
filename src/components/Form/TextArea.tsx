import { Textarea, TextareaProps } from "@chakra-ui/react";
import React from "react";

interface TextareaFieldProps extends TextareaProps {
  name: string;
  placeholder: string;
  inputRef: any;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  placeholder,
  inputRef,
  ...rest
}) => {
  return (
    <Textarea
      type="text"
      name={name}
      placeholder={placeholder}
      ref={inputRef}
      {...rest}
    />
  );
};

export default TextareaField;
