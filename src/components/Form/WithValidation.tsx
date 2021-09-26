import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { FieldError } from "react-hook-form";

export interface InputProps {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  register: Function;
  error?: FieldError;
}

export interface InputFieldProps {
  placeholder?: string;
}

const withValidation = <T extends InputFieldProps>(
  Component: React.FC<T>
): React.FC<T & InputProps> => {
  return ({ label, register, name, error, ...rest }) => {
    return (
      <FormControl
        minH={105}
        isInvalid={!!error?.message}
        errortext={error?.message}
      >
        <FormLabel>{label}</FormLabel>
        <Component {...register(name)} {...(rest as T)} />
        {error && <FormErrorMessage>{error?.message}</FormErrorMessage>}
      </FormControl>
    );
  };
};
export default withValidation;
