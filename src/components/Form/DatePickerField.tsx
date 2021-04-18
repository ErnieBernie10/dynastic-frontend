import { useColorMode } from "@chakra-ui/react";
import React from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";
import "./DatePickerField.css";

const DatePickerField: React.FC<
  Omit<ReactDatePickerProps, "onChange"> & {
    onChange?: (date: Date) => void;
    name: string;
    control: Control;
  }
> = ({ name, control, ...rest }) => {
  const isLight = useColorMode().colorMode === "light";
  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <Controller
        name={name}
        control={control}
        render={({ onChange, value }) => (
          <DatePicker
            {...rest}
            name={name}
            value={value}
            onChange={onChange}
            className="react-datapicker__input-text"
          />
        )}
      />
    </div>
  );
};

export default DatePickerField;
