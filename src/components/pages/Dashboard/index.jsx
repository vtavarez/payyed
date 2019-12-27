import React, { Fragment } from "react"
import { Header, Footer, Wrapper, Contents, Row, Col } from "components/common"
import Profile from "./Profile"
import ProfileCompleteness from "./ProfileCompleteness"

export function Dashboard() {
  return (
    <Fragment>
      <Header />
      <Wrapper bgColor="#f5f5f5" padding="1.5rem 0">
        <Contents>
          <Row>
            <Col>
              <Profile />
            </Col>
            <Col flex="12.05">
              <ProfileCompleteness />
            </Col>
          </Row>
        </Contents>
      </Wrapper>
      <Footer />
    </Fragment>
  )
}
