import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextInput } from "components/common";
import { Container, Wrapper, Ranges, Calendars, RangeButton } from "./styles";
import {
    today,
    yesterday,
    lastSevenDays,
    lastThirtyDays,
    monthStart,
    lastMonthStart,
} from "utils/functions";
import "react-day-picker/dist/style.css";
import "./styles.css";

export function DatePicker({ setSelected, ...props }) {
    const options = [
        {
            label: "Today",
            value: today,
        },
        {
            label: "Yesterday",
            value: yesterday,
        },
        {
            label: "Last 7 Days",
            value: lastSevenDays,
        },
        {
            label: "Last 30 Days",
            value: lastThirtyDays,
        },
        {
            label: "This Month",
            value: monthStart,
        },
        {
            label: "Last Month",
            value: lastMonthStart,
        },
        {
            label: "Custom Range",
            value: "custom",
        },
    ];

    return (
        <Container>
            <Wrapper>
                <Ranges>
                    {options.map(({ label, value }) => (
                        <RangeButton key={label} onClick={() => setSelected(value)}>
                            <span>{label}</span>
                        </RangeButton>
                    ))}
                </Ranges>
                <Calendars>
                    <DayPicker {...props} mode="range" defaultMonth={options[3].value} />
                </Calendars>
            </Wrapper>
        </Container>
    );
}

// export function DatePicker(props) {
//   const inputRef = useRef();

//   useEffect(() => {
//     let $picker = $(inputRef.current);
//     $picker.daterangepicker({ ...props, applyButtonClasses: "drp-apply" });
//     $picker.on("apply.daterangepicker", props.dateSelected);
//     $picker.on("hide.daterangepicker", props.dateSelected);
//     return () => {
//       $picker = null;
//     };
//     // eslint-disable-next-line
//   }, []);

//   return (
//     <div className="date-picker__wrapper">
//       <TextInput ref={inputRef} type="text" {...props} />
//       <span className="date-picker__icon">
//         <FontAwesomeIcon icon="calendar-alt" size="1x" transform="grow-5" />
//       </span>
//     </div>
//   );
// }
