import React, { useState } from "react"
import TransactionStatus from "./Status"
import TransactionDetails from "./Details"
import { Row, Col, Modal } from "components/common"
import {
  Wrapper,
  TransactionName,
  TransactionDescription,
  TransactionAmount,
  Date,
  Day,
  Month,
  Amount,
  Currency,
  Sign
} from "./styles"

function Transaction() {
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)
  return (
    <Wrapper onClick={openModal}>
      <Row>
        <Col flexSM="1" flex="1">
          <Date>
            <Day>16</Day>
            <Month>APR</Month>
          </Date>
        </Col>
        <Col flexSM="8" flex="7">
          <TransactionName>HDFC Bank</TransactionName>
          <TransactionDescription>
            Withdraw to Bank account
          </TransactionDescription>
        </Col>
        <Col flexSM="0" flex="2">
          <TransactionStatus status="processing" />
        </Col>
        <Col flexSM="3" flex="2">
          <TransactionAmount>
            <Sign>-</Sign>
            <Amount>$572</Amount>
            <Currency>(usd)</Currency>
          </TransactionAmount>
        </Col>
      </Row>
      {showModal && (
        <Modal closeModal={closeModal} noCloseButton>
          <TransactionDetails closeModal={closeModal} />
        </Modal>
      )}
    </Wrapper>
  )
}

export default Transaction
