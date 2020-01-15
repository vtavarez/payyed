import React, { useState } from "react"
import { Transaction, TransactionTitles, Pagination } from "components/common"
import { Wrapper, Title } from "./styles"

function AllTransactions() {
  // fake data set
  const transactions = Array.from({ length: 50 })

  const [currentIndex, setCurrentIndex] = useState(0)
  const numberOfTransactionsToShow = 7
  const totalNumberOfChunks = Math.ceil(
    transactions.length / numberOfTransactionsToShow
  )
  const fromIndex = currentIndex * numberOfTransactionsToShow
  const toIndex =
    currentIndex === 0
      ? numberOfTransactionsToShow
      : fromIndex + numberOfTransactionsToShow

  return (
    <Wrapper>
      <Title>All Transactions</Title>
      <TransactionTitles />
      {transactions.slice(fromIndex, toIndex).map((transaction, index) => (
        <Transaction key={index} />
      ))}
      <Pagination
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        total={totalNumberOfChunks}
      />
    </Wrapper>
  )
}

export default AllTransactions
