import React, { Fragment } from "react"
import Intro from "./Intro"
import WhyShouldYouChoosePayyed from "./WhyShouldYouChoosePayyed"
import PaymentSolutionsForAnyone from "./PaymentSolutionsForAnyone"
import WhatCanYouDoWithPayyed from "./WhatCanYouDoWithPayyed"
import HowDoesItWork from "./HowDoesItWork"
import WhatPeopleAreSayingAboutPayyed from "./WhatPeopleAreSayingAboutPayyed"
import AwesomeCustomerSupport from "./AwesomeCustomerSupport"
import GetTheApp from "./GetTheApp"

import { Header, Footer, SEO } from "components/common"

export function Landing() {
  return (
    <Fragment>
      <SEO />
      <Header />
      <Intro />
      <WhyShouldYouChoosePayyed />
      <PaymentSolutionsForAnyone />
      <WhatCanYouDoWithPayyed />
      <HowDoesItWork />
      <WhatPeopleAreSayingAboutPayyed />
      <AwesomeCustomerSupport />
      <GetTheApp />
      <Footer />
    </Fragment>
  )
}
