import React from "react";
import { InputWrapper, DatetimeBar } from "./EditCardInputs.styled";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const EditCardInputs = ({
  titleValue,
  onCancel = "",
  cardType = "",
  onTitleChange,
  dateTimeValue,
  onDateTimeChange,
  placeholder
}) => {
  return (
    <>
      <InputWrapper>
        <label htmlFor="create-new-quest" onClick={onCancel}> 
          EDIT {cardType === "Task" ? "Quest" : cardType}
        </label>
        <input
          value={titleValue}
          id="create-new-quest"
          type="text"
          autoFocus
          required
          onChange={onTitleChange}
          placeholder={placeholder}
        ></input>
      </InputWrapper>
      <DatetimeBar>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            value={dateTimeValue}
            onChange={(newValue) => {
              onDateTimeChange(newValue);
            }}
            onError={console.log}
            ampm={false}
            minDateTime={dayjs()}
            inputFormat="YYYY-MM-DD, HH:mm"
            mask="____-__-__, __:__"
            components={{
              OpenPickerIcon: DateRangeIcon,
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Today" />
            )}
          />
        </LocalizationProvider>
      </DatetimeBar>
    </>
  );
};

export default EditCardInputs;
