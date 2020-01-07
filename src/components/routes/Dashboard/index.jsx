import React, { Fragment } from "react"
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
import ProfileCompleteness from "./ProfileCompleteness"
import RecentActivity from "./RecentActivity"

export function Dashboard() {
  return (
    <Fragment>
      <SEO title="Payyed - Dashboard" />
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
              <ProfileCompleteness />
              <RecentActivity />
            </Col>
          </Row>
        </Contents>
      </Wrapper>
      <Footer />
    </Fragment>
  )
}
