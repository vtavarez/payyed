import React from "react"
import { Row, Col } from "components/common"
import { Title, Date, Description, Status, Amount } from "./styles"

function TransactionTitles() {
  return (
    <Title>
      <Row>
        <Col flexSM="1" flex="1">
          <Date>
            Date
          </Date>
        </Col>
        <Col flexSM="8" flex="7">
          <Description>
            Description
          </Description>
        </Col>
        <Col flexSM="0" flex="2">
          <Status>
            Status
          </Status>
        </Col>
        <Col flexSM="3" flex="2">
          <Amount>
            Amount
          </Amount>
        </Col>
      </Row>
    </Title>
  )
}

export default TransactionTitles
