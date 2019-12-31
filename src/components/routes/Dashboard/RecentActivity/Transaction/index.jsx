import React from "react"
import { Row, Col } from "components/common"
import { Wrapper, TransactionName, TransactionDescription, Day, Month } from "./styles"

function Transaction() {
  return (
    <Wrapper>
    <Row>
      <Col flex="0.6" align="center">
        <Day>16</Day>
        <Month>APR</Month>
      </Col>
      <Col flex="7">
        <TransactionName>HDFC Bank</TransactionName>
        <TransactionDescription>Withdraw to Bank account</TransactionDescription>
      </Col>
      <Col flex="0.7" align="center">
        Status
      </Col>
      <Col flex="2" align="right">
        Amount
      </Col>
    </Row>
  </Wrapper>
  )
}

export default Transaction