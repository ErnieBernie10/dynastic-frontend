import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { FieldError } from "react-hook-form";

export interface InputProps {
  error?: FieldError;
  label: string;
}

export interface InputFieldProps {
  inputRef?: any;
  placeholder?: string;
}

const withValidation = <T extends InputFieldProps>(
  Component: React.FC<T>
): React.FC<T & InputProps> => {
  return ({ error, label, ...rest }) => {
    return (
      <FormControl
        minH={105}
        isInvalid={!!error?.message}
        errortext={error?.message}
      >
        <FormLabel>{label}</FormLabel>
        <Component {...(rest as T)} />
        <FormErrorMessage>{error?.message}</FormErrorMessage>
      </FormControl>
    );
  };
};
export default withValidation;
