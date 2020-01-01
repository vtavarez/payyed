import React from "react"
import { Row, Col } from "components/common"
import { Title, Align } from "./styles"

function TransactionTitles() {
  return (
    <Title>
      <Row>
        <Col flexSM="0.6" flex="0.6">
          <Align align="center">
            Date
          </Align>
        </Col>
        <Col flexSM="7" flex="7">Description</Col>
        <Col flexSM="2" flex="0.7">
          <Align align="center">
            Status
          </Align>
        </Col>
        <Col flexSM="2" flex="2">
          <Align align="right">
            Amount
          </Align>
        </Col>
      </Row>
    </Title>
  )
}

export default TransactionTitles
