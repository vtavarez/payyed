import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Wrapper, Banner, Content, TransactionName,  Details } from "./styles"

function TransactionDetails() {
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Banner>
        <Content>
          <FontAwesomeIcon icon="building" size="5x" color="#ffffff" />
          <TransactionName>
            HDFC Bank
          </TransactionName>
        </Content>
      </Banner>
      <Details></Details>
    </Wrapper>
  )
}

export default TransactionDetails
