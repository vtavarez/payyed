import React, { Fragment } from "react"
import moment from "moment"
import {
  Label,
  TextInput,
  TextArea,
  InputName,
  FormGroup,
  FormGroupControl,
  FormGroupPrepend,
  FormGroupAppend,
  CurrencySelect,
  CountrySelect,
  DatePicker,
  ButtonPrimary
} from "components/common"
import { Heading, SubHeading, Form, FormName } from "./styles"

function RequestMoney() {
  // fake data set
  const countries = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "eng", label: "England" },
    { value: "mx", label: "Mexico" }
  ]

  const currencies = [
    { value: "usd", label: "USD", description: "United States dollar" },
    { value: "cad", label: "CAD", description: "Canadian dollar" },
    { value: "gbp", label: "GBP", description: "British pound" },
    { value: "mxn", label: "MXN", description: "Mexican peso" }
  ]

  return (
    <Fragment>
      <Heading>Request Money</Heading>

      <SubHeading>
        Request payment anytime, anywhere around the globe.
      </SubHeading>

      <Form>
        <FormName>Payer Details</FormName>

        <Label label="name">
          <InputName>Name</InputName>
          <TextInput
            id="name"
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Label>

        <Label label="email">
          <InputName>Email</InputName>
          <TextInput
            id="email"
            type="text"
            name="email"
            placeholder="Enter Email Address"
          />
        </Label>

        <Label label="country">
          <InputName>Country</InputName>
          <CountrySelect id="country" options={countries} />
        </Label>

        <Label label="amount">
          <InputName>Amount</InputName>
          <FormGroup>
            <FormGroupPrepend>$</FormGroupPrepend>
            <FormGroupControl id="amount" type="text" name="amount" />
            <FormGroupAppend>
              <Label label="currency" nomargin>
                <CurrencySelect
                  id="currency"
                  options={currencies}
                  defaultValue={currencies[0]}
                  isSearchable
                />
              </Label>
            </FormGroupAppend>
          </FormGroup>
        </Label>

        <Label label="payment-description">
          <InputName>Description</InputName>
          <TextArea
            id="payment-description"
            rows="4"
            placeholder="Payment Description"
            aria-label="Include a payment description"
          />
        </Label>

        <Label label="payment-due">
          <InputName>Payment due by</InputName>
          <DatePicker
            id="payment-due"
            minDate={moment()}
            alwaysShowCalendars={true}
            singleDatePicker={true}
          />
        </Label>

        <ButtonPrimary stretch type="submit">
          Continue
        </ButtonPrimary>
      </Form>
    </Fragment>
  )
}

export default RequestMoney
