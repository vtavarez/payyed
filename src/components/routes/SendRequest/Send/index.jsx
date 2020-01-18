import React, { Fragment } from "react"
import CurrencySelect from "../CurrencySelect"
import {
  TextInputLabel,
  TextInput,
  TextInputName as Name,
  FormGroup,
  FormGroupControl,
  FormGroupPrepend,
  FormGroupAppend,
  ButtonPrimary
} from "components/common"
import { Heading, SubHeading, Form, FormName, ExchangeRate } from "./styles"

function SendMoney() {
  // fake data set
  const options = [
    { value: "usd", label: "USD", description: "United States dollar" },
    { value: "cad", label: "CAD", description: "Canadian dollar" },
    { value: "gbp", label: "GBP", description: "British pound" },
    { value: "mxn", label: "MXN", description: "Mexican peso" }
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
            <FormGroupControl 
              id="send" 
              type="text" 
              name="send" 
            />
          </TextInputLabel>
          <FormGroupAppend>
            <CurrencySelect
              options={options}
              classNamePrefix="currency-select"
              defaultValue={options[0]}
              isSearchable
            />
          </FormGroupAppend>
        </FormGroup>
        <Name>Recipient Gets</Name>
        <FormGroup>
          <FormGroupPrepend>$</FormGroupPrepend>
          <TextInputLabel label="recipient">
            <FormGroupControl 
              id="recipient" 
              type="text" 
              name="recipient" 
            />
          </TextInputLabel>
          <FormGroupAppend>
            <CurrencySelect
              options={options}
              classNamePrefix="currency-select"
              defaultValue={options[3]}
              isSearchable
            />
          </FormGroupAppend>
        </FormGroup>
        <ExchangeRate>The current exchange rate is 1 USD = 18.677791 MXN</ExchangeRate>
        <ButtonPrimary stretch>Continue</ButtonPrimary>
      </Form>
    </Fragment>
  )
}

export default SendMoney
