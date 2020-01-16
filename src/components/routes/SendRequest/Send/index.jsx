import React, { Fragment } from "react"
import {
  TextInputLabel,
  TextInput,
  TextInputName as Name,
  FormGroup,
  FormGroupControl,
  FormGroupPrepend,
  Select,
  ButtonPrimary
} from "components/common"
import { Heading, SubHeading, Form, FormName } from "./styles"

function SendMoney() {
  // fake data set
  const options = [
    { value: "usd", label: "USD" },
    { value: "cad", label: "CAD" },
    { value: "gbp", label: "GBP" }
  ]

  return (
    <Fragment>
      <Heading>Send Money</Heading>
      <SubHeading>
        Send your money anytime, anywhere around the globe.
      </SubHeading>
      <Form>
        <FormName>Personal Details</FormName>
        <Name>Recipient</Name>
        <TextInputLabel label="email">
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email Address"
          />
        </TextInputLabel>
        <Name>You Send</Name>
        <FormGroup>
          <FormGroupPrepend>$</FormGroupPrepend>
          <TextInputLabel label="send">
            <FormGroupControl id="send" type="text" name="send" />
          </TextInputLabel>
          <Select
            options={options}
            classNamePrefix="currency-select"
            isSearchable
          />
        </FormGroup>
        <Name>Recipient Gets</Name>
        <FormGroup>
          <FormGroupPrepend>$</FormGroupPrepend>
          <TextInputLabel label="recipient">
            <FormGroupControl id="recipient" type="text" name="recipient" />
          </TextInputLabel>
        </FormGroup>
        <ButtonPrimary stretch>Continue</ButtonPrimary>
      </Form>
    </Fragment>
  )
}

export default SendMoney
