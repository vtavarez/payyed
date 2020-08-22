import React, { Fragment, useState } from "react"
import Account from "./Account"
import {
    Header,
    Footer,
    SEO,
    Wrapper,
    Contents,
    Tabs,
    Tab,
    Row,
    Col,
    Profile,
    AvailableBalance,
    Chat
  } from "components/common"


  export function Settings(){
    const [tab, setTab] = useState("account")

    const onTabClicked = e => {
      e.preventDefault()
      setTab(e.target.dataset.label)
    }
  
    return (
      <Fragment>
        <SEO title="Payyed - Account Settings" />
        <Header />
        <Tabs onClick={onTabClicked}>
          <Tab label="account" aria-label="send" active={tab === "account"}>
            Account
          </Tab>
          <Tab label="cards-bank" aria-label="request" active={tab === "cards-bank"}>
            Cards & Bank Accounts
          </Tab>
          <Tab label="notifications" aria-label="request" active={tab === "notifications"}>
            Notifications
          </Tab>
        </Tabs>
        <Wrapper bgColor="#f5f5f5" padding="1.5rem 0">
          <Contents>
              <Row>
                  <Col flex="2">
                      <Profile />
                      <AvailableBalance />
                      <Chat />
                  </Col>
                  <Col flex="10">
                      <Account />
                  </Col>
              </Row>
          </Contents>
        </Wrapper>
        <Footer />
      </Fragment>
    )
  }