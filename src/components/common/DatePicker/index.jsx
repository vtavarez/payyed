import React, { Fragment, useEffect } from "react"
import $ from "jquery"
import "daterangepicker"
import "daterangepicker/daterangepicker.css"
import "./styles.css"

export function DatePicker(props) {
  const { inputRef, children, onApply } = props

  useEffect(() => {
   let $picker = $(inputRef.current ?? inputRef)
   $picker.daterangepicker({ ...props, applyButtonClasses: "drp-apply" })
   $picker.on('apply.daterangepicker', onApply)
   return () => {
     $picker = null;
   }
  // eslint-disable-next-line
  },[])

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}
