import React from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "./DatePickerField.css";

const DatePickerField: React.FC<
  ReactDatePickerProps & {
    inputRef: any;
  }
> = ({ inputRef, ...rest }) => {
  return <DatePicker {...rest} ref={inputRef} />;
};

export default DatePickerField;
