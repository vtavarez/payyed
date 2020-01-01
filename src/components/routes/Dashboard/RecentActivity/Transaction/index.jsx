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

function Transaction({ name, description, amount, currency, status, date }) {
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)
  return (
    <Wrapper onClick={openModal}>
      <Row>
        <Col flexSM="0.6" flex="0.6">
          <Date>
            <Day>16</Day>
            <Month>APR</Month>
          </Date>
        </Col>
        <Col flexSM="4" flex="7">
          <TransactionName>HDFC Bank</TransactionName>
          <TransactionDescription>
            Withdraw to Bank account
          </TransactionDescription>
        </Col>
        <Col flexSM="1" flex="0.7">
          <TransactionStatus status="processing" />
        </Col>
        <Col flexSM="3" flex="2">
          <TransactionAmount>
            <Sign>-</Sign>
            <Amount>572.00</Amount>
            <Currency>(usd)</Currency>
          </TransactionAmount>
        </Col>
      </Row>
      {showModal && (
        <Modal closeModal={closeModal}>
          <TransactionDetails />
        </Modal>
      )}
    </Wrapper>
  )
}

export default Transaction
