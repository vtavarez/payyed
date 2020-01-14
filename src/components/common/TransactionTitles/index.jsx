import React from "react"
import { Row, Col } from "components/common"
import { Title, Date, Description, Status, Amount } from "./styles"

export function TransactionTitles() {
  return (
    <Title>
      <Row>
        <Col flexSM="1" flexMD="1" flex="1">
          <Date>
            Date
          </Date>
        </Col>
        <Col flexSM="8" flexMD="7" flex="7">
          <Description>
            Description
          </Description>
        </Col>
        <Col flexSM="0" flexMD="2" flex="2">
          <Status>
            Status
          </Status>
        </Col>
        <Col flexSM="3" flexMD="2" flex="2">
          <Amount>
            Amount
          </Amount>
        </Col>
      </Row>
    </Title>
  )
}
