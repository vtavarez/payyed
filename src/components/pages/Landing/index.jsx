import React from "react"
import Intro from "components/pages/Landing/Intro"
import WhyShouldYouChoosePayyed from "components/pages/Landing/WhyShouldYouChoosePayyed"
import PaymentSolutionsForAnyone from "components/pages/Landing/PaymentSolutionsForAnyone"
import WhatCanYouDoWithPayyed from "components/pages/Landing/WhatCanYouDoWithPayyed"
import HowDoesItWork from "components/pages/Landing/HowDoesItWork"
import WhatPeopleAreSayingAboutPayyed from "components/pages/Landing/WhatPeopleAreSayingAboutPayyed"
import { Header } from "components/common"

export const Landing = () => (
  <>
    <Header />
    <Intro />
    <WhyShouldYouChoosePayyed />
    <PaymentSolutionsForAnyone />
    <WhatCanYouDoWithPayyed />
    <HowDoesItWork />
    <WhatPeopleAreSayingAboutPayyed />
  </>
)
