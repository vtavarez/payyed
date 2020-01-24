import React, { Fragment, useState } from "react"
import SendMoney from "./SendMoney"
import RequestMoney from "./RequestMoney"
import {
  Header,
  Footer,
  SEO,
  Wrapper,
  Contents,
  Tabs,
  Tab
} from "components/common"

export function SendRequest() {
  const [tab, setTab] = useState("send")

  const onTabClicked = e => {
    e.preventDefault()
    setTab(e.target.dataset.label)
  }

  return (
    <Fragment>
      <SEO title="Payyed - Send & Request Money" />
      <Header />
      <Tabs onClick={onTabClicked}>
        <Tab label="send" aria-label="send" active={tab === "send"}>
          Send
        </Tab>
        <Tab label="request" aria-label="request" active={tab === "request"}>
          Request
        </Tab>
      </Tabs>
      <Wrapper bgColor="#f5f5f5" padding="2.5rem 0">
        <Contents>
          {tab === "send" && <SendMoney />}
          {tab === "request" && <RequestMoney />}
        </Contents>
      </Wrapper>
      <Footer />
    </Fragment>
  )
}
