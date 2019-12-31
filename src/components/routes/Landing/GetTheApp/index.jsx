import React from "react"
import { Wrapper, Contents, Row } from "components/common";
import { Heading, SubHeading, AppStore, GoogleStore } from "./styles"
import appstore from "assets/images/applestore.webp"
import googlestore from "assets/images/googlestore.webp"

function GetTheApp(){
  return (
    <Wrapper bgColor="#f5f5f5" padding="3rem 0">
      <Contents>
        <Heading>
          Get the app
        </Heading>
        <SubHeading>
          Download our app for the fastest, most convenient way to send & get payment.
        </SubHeading>
        <Row justify="center">
          <AppStore src={appstore} alt="Download on the app store" />
          <GoogleStore src={googlestore} alt="Download on the google play store" />
        </Row>
      </Contents>
    </Wrapper>
  )
}

export default GetTheApp;