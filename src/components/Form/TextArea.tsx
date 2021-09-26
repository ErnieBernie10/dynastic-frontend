import { forwardRef, Textarea, TextareaProps } from "@chakra-ui/react";
import React from "react";

interface TextareaFieldProps extends TextareaProps {
  name: string;
  placeholder: string;
}

const TextareaField: React.FC<TextareaFieldProps> = forwardRef(
  ({ name, placeholder, ...rest }, ref) => {
    return (
      <Textarea
        ref={ref}
        type="text"
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

export default TextareaField;
