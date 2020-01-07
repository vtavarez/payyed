import React, { Fragment } from "react"
import Filters from "./Filters"
import AllTransactions from "./AllTransactions"
import {
  Header,
  Footer,
  SEO,
  Profile,
  AvailableBalance,
  Chat,
  Wrapper,
  Contents,
  Row,
  Col
} from "components/common"

export function Transactions() {
  return (
    <Fragment>
      <SEO title="Payyed - Transactions" />
      <Header />
      <Wrapper bgColor="#f5f5f5" padding="1.5rem 0">
        <Contents>
          <Row>
            <Col flex="2">
              <Profile />
              <AvailableBalance />
              <Chat />
            </Col>
            <Col flex="10">
              <Filters />
              <AllTransactions />
            </Col>
          </Row>
        </Contents>
      </Wrapper>
      <Footer />
    </Fragment>
  )
}