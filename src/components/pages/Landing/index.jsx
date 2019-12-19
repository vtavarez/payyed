import React from "react"
import Intro from "./Intro"
import WhyShouldYouChoosePayyed from "./WhyShouldYouChoosePayyed"
import PaymentSolutionsForAnyone from "./PaymentSolutionsForAnyone"
import WhatCanYouDoWithPayyed from "./WhatCanYouDoWithPayyed"
import HowDoesItWork from "./HowDoesItWork"
import WhatPeopleAreSayingAboutPayyed from "./WhatPeopleAreSayingAboutPayyed"
import AwesomeCustomerSupport from "./AwesomeCustomerSupport"
import GetTheApp from "./GetTheApp"

import { Header, Footer } from "components/common"

export function Landing() {
  return (
    <>
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
    </>
  )
}
