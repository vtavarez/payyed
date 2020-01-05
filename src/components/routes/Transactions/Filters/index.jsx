import React, { Fragment, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"
import {
  Row,
  Col,
  DatePicker,
  ButtonLink,
  ButtonLinkSecondary,
  TextInput
} from "components/common"
import {
  Title,
  DatePickerWrapper,
  ButtonsWrapper,
  DatePickerIcon
} from "./styles"

function Filters() {
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
    <Fragment>
      <Title>Transactions</Title>
      <Row>
        <Col flex="5" noPaddingRight>
          <DatePickerWrapper>
            <DatePicker
              inputRef={inputRef}
              ranges={ranges}
              startDate={moment().subtract(29, "days")}
              endDate={moment()}
              alwaysShowCalendars={true}
              onApply={onApply}
            >
              <TextInput ref={inputRef} type="text" name="daterange" />
            </DatePicker>
            <DatePickerIcon>
              <FontAwesomeIcon
                icon="calendar-alt"
                size="1x"
                transform="grow-5"
              />
            </DatePickerIcon>
          </DatePickerWrapper>
        </Col>
        <Col flex="7" noPaddingLeft>
          <ButtonsWrapper>
            <ButtonLink href="#" fontSize="0.9rem">
              All Filters
              <FontAwesomeIcon
                icon="sliders-h"
                size="1x"
                transform="right-4 grow-2"
              />
            </ButtonLink>
            <ButtonLinkSecondary
              href="#"
              fontSize="0.9rem"
              id="statements"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon
                icon="file-download"
                size="1x"
                transform="left-4 grow-2"
              />
              Statements
            </ButtonLinkSecondary>
          </ButtonsWrapper>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Filters
