import React from "react"
import { Row, Col } from "components/common"
import { Title } from "./styles"

function TransactionTitle() {
  return (
    <Title>
      <Row>
        <Col flex="0.6" align="center">
          Date
        </Col>
        <Col flex="7">Description</Col>
        <Col flex="0.7" align="center">
          Status
        </Col>
        <Col flex="2" align="right">
          Amount
        </Col>
      </Row>
    </Title>
  )
}

export default TransactionTitle
