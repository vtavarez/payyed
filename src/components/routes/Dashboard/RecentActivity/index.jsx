import React from "react"
import {
  Wrapper,
  Title
} from "./styles"
import TransactionTitle from "./TransactionTitle"
import Transaction from "./Transaction"

function RecentActivity() {
  return (
    <Wrapper>
      <Title>Recent Activity</Title>
      <TransactionTitle />
      <Transaction />
    </Wrapper>
  )
}

export default RecentActivity
