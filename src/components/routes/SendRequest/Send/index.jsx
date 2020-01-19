import React, { Fragment } from "react"
import {
  Label,
  TextInput,
  InputName,
  FormGroup,
  FormGroupControl,
  FormGroupPrepend,
  FormGroupAppend,
  CurrencySelect,
  ButtonPrimary
} from "components/common"
import {
  Heading,
  SubHeading,
  Form,
  FormName,
  ExchangeRate,
  Rate,
  Divider,
  TotalFees,
  TotalToPay,
  Fee
} from "./styles"

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

        <Label label="email">
          <InputName>Recipient</InputName>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Enter Email Address"
          />
        </Label>

        <Label label="send" nomargin>
        <InputName>You Send</InputName>
          <FormGroup>
            <FormGroupPrepend>$</FormGroupPrepend>
            <FormGroupControl id="send" type="text" name="send" />
            <FormGroupAppend>
              <Label label="currency" nomargin>
                <CurrencySelect
                  options={options}
                  defaultValue={options[0]}
                  isSearchable
                />
              </Label>
            </FormGroupAppend>
          </FormGroup>
        </Label>

        <Label label="recipient" nomargin>
          <InputName>Recipient Gets</InputName>
          <FormGroup>
            <FormGroupPrepend>$</FormGroupPrepend>
            <FormGroupControl id="recipient" type="text" name="recipient" />
            <FormGroupAppend>
              <Label label="currency" nomargin>
                <CurrencySelect
                  options={options}
                  defaultValue={options[3]}
                  isSearchable
                />
              </Label>
            </FormGroupAppend>
          </FormGroup>
        </Label>

        <ExchangeRate>
          The current exchange rate is <Rate>1 USD = 18.677791 MXN</Rate>
        </ExchangeRate>

        <Divider />

        <TotalFees>
          Total fees <Fee>7.21 USD</Fee>
        </TotalFees>
        <TotalToPay>
          Total To Pay <Fee>1,007.21 USD</Fee>
        </TotalToPay>

        <ButtonPrimary stretch>Continue</ButtonPrimary>
      </Form>
    </Fragment>
  )
}

export default SendMoney
