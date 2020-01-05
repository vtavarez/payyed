import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Transactions, ButtonLink } from "components/common"
import { Wrapper, Title } from "./styles"

function RecentActivity() {
  return (
    <Wrapper>
      <Title>Recent Activity</Title>
      <Transactions recent/>
    </Wrapper>
  )
}

export default RecentActivity
