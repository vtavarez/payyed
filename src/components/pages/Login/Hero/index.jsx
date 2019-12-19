import React from "react"
import { Wrapper, Logo, Content, Heading, SubHeading } from "./styles"
import logo from "assets/illustrations/logo-white.webp"

function Hero() {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Payyed logo" />
      </Logo>
      <Content>
        <Heading>Welcome back!</Heading>
        <SubHeading>
          We are glad to see you agian! Instant deposits, withdrawals & payouts
          trusted by millions worldwide.
        </SubHeading>
      </Content>
    </Wrapper>
  )
}

export default Hero
