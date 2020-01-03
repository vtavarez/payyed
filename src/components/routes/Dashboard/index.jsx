import React, { Fragment } from "react"
import { Header, Footer, SEO, Wrapper, Contents, Row, Col } from "components/common"
import Profile from "./Profile"
import AvailableBalance from "./AvailableBalance"
import Chat from "./Chat"
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
            <Col flex="1.025">
              <Profile />
              <AvailableBalance />
              <Chat />
            </Col>
            <Col>
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
