import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Wrapper,
  Banner,
  BannerContents,
  BannerTransactionName,
  BannerTransactionAmount,
  BannerTransactionDate,
  Details,
  Divider,
  AccessibleText,
  CloseButton,
  Title,
  TransactionContents,
  List,
  Item,
  TransactionAmount,
  TransactionTotal,
  Total
} from "./styles"

function TransactionDetails({ closeModal }) {
  return (
    <Wrapper onClick={e => e.stopPropagation()}>
      <Banner>
        <BannerContents>
          <FontAwesomeIcon icon="building" size="5x" color="#ffffff" />
          <BannerTransactionName>HDFC Bank</BannerTransactionName>
          <BannerTransactionAmount>$550.00</BannerTransactionAmount>
          <BannerTransactionDate>15 March 2019</BannerTransactionDate>
        </BannerContents>
      </Banner>
      <Details>
        <Title>
          Transaction Details
          <CloseButton aria-label="close modal" onClick={closeModal}>
            <FontAwesomeIcon icon="times" size="xs" />
            <AccessibleText>Close</AccessibleText>
          </CloseButton>
        </Title>
        <Divider mt="1rem" mb="1rem" />
        <TransactionContents>
          <List>
            <Item mb="0.5rem">
              Payment Amount
              <TransactionAmount>$572.00</TransactionAmount>
            </Item>
            <Item mb="0.5rem">
              Fee
              <TransactionAmount>$4.80</TransactionAmount>
            </Item>
          </List>
          <Divider mt="1rem" mb="0.5rem" />
          <TransactionTotal>
            Total Amount <Total>$567.20</Total>
          </TransactionTotal>
          <List>
            <Item medium>Paid by:</Item>
            <Item color="#8e9a9d">HDFC Bank</Item>
          </List>
          <List>
            <Item medium>Transaction ID:</Item>
            <Item color="#8e9a9d">26566689645685976589</Item>
          </List>
          <List>
            <Item medium>Description:</Item>
            <Item color="#8e9a9d">Withdraw to Bank account</Item>
          </List>
          <List>
            <Item medium>Status:</Item>
            <Item color="#8e9a9d">Completed</Item>
          </List>
        </TransactionContents>
      </Details>
    </Wrapper>
  )
}

export default TransactionDetails
