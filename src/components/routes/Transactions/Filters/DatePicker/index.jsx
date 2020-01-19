import React from "react"
import moment from "moment"
import { DatePicker as Picker } from "components/common"

function DatePicker() {
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
    <Picker
      ranges={ranges}
      startDate={moment().subtract(29, "days")}
      endDate={moment()}
      alwaysShowCalendars={true}
      onApply={onApply}
    />
  )
}

export default DatePicker
