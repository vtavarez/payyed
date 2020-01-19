import React, { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TextInput } from "components/common"
import $ from "jquery"
import "daterangepicker"
import "daterangepicker/daterangepicker.css"
import "./styles.css"

export function DatePicker(props) {
  const inputRef = useRef()

  useEffect(() => {
   let $picker = $(inputRef.current)
   $picker.daterangepicker({ ...props, applyButtonClasses: "drp-apply" })
   $picker.on('apply.daterangepicker', props.onApply)
   return () => {
     $picker = null;
   }
  // eslint-disable-next-line
  },[])

  return (
    <div className="date-picker__wrapper">
      <TextInput ref={inputRef} type="text" name="daterange" />
      <span className="date-picker__icon">
        <FontAwesomeIcon icon="calendar-alt" size="1x" transform="grow-5" />
      </span>
    </div>
  )
}
