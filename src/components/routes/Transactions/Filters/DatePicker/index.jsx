import React from "react"
import {
    formatDate,
    dateFormat,
    today,
    yesterday,
    lastSevenDays,
    lastThirtyDays,
    monthStart,
    monthEnd,
    lastMonthStart,
    lastMonthEnd,
} from "utils/functions";
import { DatePicker as Picker } from "components/common"

function DatePicker() {
  const ranges = {
    Today: [formatDate(today, dateFormat), formatDate(today, dateFormat)],
    Yesterday: [formatDate(yesterday, dateFormat), formatDate(yesterday, dateFormat)],
    "Last 7 Days": [formatDate(lastSevenDays, dateFormat), formatDate(today, dateFormat)],
    "Last 30 Days": [formatDate(lastThirtyDays, dateFormat), formatDate(today, dateFormat)],
    "This Month": [formatDate(monthStart, dateFormat), formatDate(monthEnd, dateFormat)],
    "Last Month": [formatDate(lastMonthStart, dateFormat), formatDate(lastMonthEnd, dateFormat)]
  }

  const selectedDate = (e, picker) => {
    console.log(e.target.value)
  }

  return (
    <Picker
      ranges={ranges}
      startDate={formatDate(monthStart, dateFormat)}
      endDate={formatDate(monthEnd, dateFormat)}
      alwaysShowCalendars={true}
      dateSelected={selectedDate}
    />
  )
}

export default DatePicker
