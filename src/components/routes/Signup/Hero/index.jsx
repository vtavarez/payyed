import React from "react"
import { Link } from "@reach/router";
import { Wrapper, Logo, Content, Heading, SubHeading } from "./styles"
import logo from "assets/illustrations/logo-white.webp"

function Hero() {
  return (
    <Wrapper>
      <Logo as={Link} to="/">
        <img src={logo} alt="Payyed logo" />
      </Logo>
      <Content>
        <Heading>Get Verified!</Heading>
        <SubHeading>
          Every day, Payyed makes thousands of customers happy.
        </SubHeading>
      </Content>
    </Wrapper>
  )
}

export default Hero
