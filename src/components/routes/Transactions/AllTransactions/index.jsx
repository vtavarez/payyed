import React from "react"
import { Transactions } from "components/common"
import { Wrapper, Title } from "./styles"

function AllTransactions() {
  return (
    <Wrapper>
      <Title>All Transactions</Title>
      <Transactions recent />
    </Wrapper>
  )
}

export default AllTransactions