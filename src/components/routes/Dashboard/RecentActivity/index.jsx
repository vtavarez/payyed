import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Transaction, TransactionTitles, ButtonLink } from "components/common"
import { Wrapper, Title, ViewAll } from "./styles"

function RecentActivity() {
  return (
    <Wrapper>
      <Title>Recent Activity</Title>
      <TransactionTitles />
      {Array.from({ length: 7 }).map((_, i) => (
        <Transaction key={i} />
      ))}
      <ViewAll>
        <ButtonLink href="#">
          View all <FontAwesomeIcon icon="chevron-right" transform="shrink-2" />
        </ButtonLink>
      </ViewAll>
    </Wrapper>
  )
}

export default RecentActivity
