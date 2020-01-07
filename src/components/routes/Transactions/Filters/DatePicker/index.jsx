import React, { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import { DatePicker as Picker, TextInput } from "components/common"
import { Wrapper, Icon } from "./styles"

function DatePicker() {
  const inputRef = useRef()

  const ranges = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment()
        .subtract(1, "month")
        .startOf("month"),
      moment()
        .subtract(1, "month")
        .endOf("month")
    ]
  }

  const onApply = (e, picker) => {
    console.log(picker.startDate, picker.endDate)
  }

  return (
    <Wrapper>
      <Picker
        inputRef={inputRef}
        ranges={ranges}
        startDate={moment().subtract(29, "days")}
        endDate={moment()}
        alwaysShowCalendars={true}
        onApply={onApply}
      >
        <TextInput ref={inputRef} type="text" name="daterange" />
      </Picker>
      <Icon>
        <FontAwesomeIcon icon="calendar-alt" size="1x" transform="grow-5" />
      </Icon>
    </Wrapper>
  )
}

export default DatePicker
