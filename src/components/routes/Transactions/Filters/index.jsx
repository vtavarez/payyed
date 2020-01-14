import React, { useState, Fragment } from "react"
import DatePicker from "./DatePicker"
import OptionButtons from "./OptionButtons"
import AdditionalFilters from "./AdditionalFilters"
import { Row, Col } from "components/common"
import { Title } from "./styles"

function Filters() {
  const [toggledFilters, setToggledFilters] = useState(false)
  return (
    <Fragment>
      <Title>Transactions</Title>
      <form>
        <Row>
          <Col flexMD="6" flex="5">
            <DatePicker />
          </Col>
          <Col flexMD="6" flex="7">
            <OptionButtons toggleFilters={() => setToggledFilters(!toggledFilters)} />
          </Col>
        </Row>
        <Row>
          <AdditionalFilters toggled={toggledFilters}/>
        </Row>
      </form>
    </Fragment>
  )
}

export default Filters
