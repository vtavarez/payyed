import React, { useEffect, useRef } from "react"
// import { DayPicker } from "react-day-picker"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TextInput } from "components/common"
import { Container, Wrapper, Ranges, Calendars } from "./styles"
// import { formatDate, dateFormat, lastThirtyDays } from "utils"
import $ from "jquery"
import "daterangepicker"
import "daterangepicker/daterangepicker.css"
import 'react-day-picker/dist/style.css'
import "./styles.css"

export function DatePicker(props) {
  const options = ['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Custom Range']

	return (
		<Container>
			<Wrapper>
        <Ranges>
          {options.map((option, index) => (
            
          ))}
        </Ranges>
				<Calendars>
					<DayPicker
						{...props}
					/>
				</Calendars>
			</Wrapper>
		</Container>
	)
}


export function DatePicker(props) {
  const inputRef = useRef()

  useEffect(() => {
   let $picker = $(inputRef.current)
   $picker.daterangepicker({ ...props, applyButtonClasses: "drp-apply" })
   $picker.on('apply.daterangepicker', props.dateSelected)
   $picker.on('hide.daterangepicker', props.dateSelected)
   return () => {
     $picker = null;
   }
  // eslint-disable-next-line
  },[])

  return (
    <div className="date-picker__wrapper">
      <TextInput ref={inputRef} type="text" {...props} />
      <span className="date-picker__icon">
        <FontAwesomeIcon icon="calendar-alt" size="1x" transform="grow-5" />
      </span>
    </div>
  )
}
