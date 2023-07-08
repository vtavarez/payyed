import React, { Fragment, useEffect, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { openExchangeId } from "data/keys";
import * as Yup from "yup";
import axios from "axios";
import {
  Label,
  Error,
  TextInput,
  InputName,
  FormGroup,
  FormGroupControl,
  FormGroupPrepend,
  FormGroupAppend,
  CurrencySelect,
  ButtonPrimary,
} from "components/common";
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
  Fee,
} from "./styles";

function Details({ setStep }) {
  // fake data set
  const options = [
    { value: "usd", label: "USD", description: "United States dollar" },
    { value: "cad", label: "CAD", description: "Canadian dollar" },
    { value: "gbp", label: "GBP", description: "British pound" },
    { value: "mxn", label: "MXN", description: "Mexican peso" },
  ];

  const [exchangeRates, setExchangeRates] = useState(0);
  const [senderCurrency, setSenderCurrency] = useState(options[0].value);
  const [recipientCurrency, setRecipientCurrency] = useState(options[1].value);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { rates },
      } = await axios.get(`	https://openexchangerates.org/api/latest.json`, {
        params: {
          app_id: openExchangeId,
          base: senderCurrency,
          symbols: `${senderCurrency},${recipientCurrency}`,
          prettyprint: true,
          show_alternative: false,
        },
      });
      setExchangeRates(rates);
    };
    fetchData();
  }, [senderCurrency, recipientCurrency]);

  const onSendCurrencyChange = (option) => setSenderCurrency(option.value);
  const onRecipientCurrencyChange = (option) => setRecipientCurrency(option.value);
  const exchangeRate = (currency) => exchangeRates[currency.toUpperCase()];
  const getFee = (amount) => amount * 0.01;

  return (
    <Fragment>
      <Heading>Send Money</Heading>
      <SubHeading>
        Send your money anytime, anywhere around the globe.
      </SubHeading>

      <Formik
        initialValues={{
          email: "",
          senderAmount: 10.0,
          senderCurrency: options[0],
          recipientCurrency: options[1],
        }}
        validationSchema={() =>
          Yup.object().shape({
            email: Yup.string()
              .email()
              .required("A recipient email address is required"),
            senderAmount: Yup.number()
              .min(
                (exchangeRate(senderCurrency) * 10.0).toFixed(2),
                `A minimum amount of $${(
                  exchangeRate(senderCurrency) * 10.0
                ).toFixed(2)} ${senderCurrency.toUpperCase()} is required`
              )
              .required("A send amount is required"),
          })
        }
        onSubmit={({ email, senderAmount }, { setSubmitting }) => {
          setSubmitting(true)
          setStep({
            step: "confirm",
            payload: {
              email,
              senderAmount: senderAmount.toFixed(2),
              fee: getFee(senderAmount).toFixed(2),
              senderCurrency: senderCurrency.toUpperCase(),
              total: (senderAmount + getFee(senderAmount)).toFixed(2),
            },
          });
        }}
      >
        {({ handleBlur, handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormName>Personal Details</FormName>

            <Label label="email">
              <InputName>Recipient</InputName>
              <TextInput
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter Email Address"
              />
              <ErrorMessage component={Error} name="email" />
            </Label>

            <Label label="sender-amount" nomargin>
              <InputName>You Send</InputName>
              <FormGroup>
                <FormGroupPrepend>$</FormGroupPrepend>
                <FormGroupControl
                  id="sender-amount"
                  type="number"
                  step="0.01"
                  min="10"
                  name="senderAmount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.senderAmount}
                />
                <FormGroupAppend>
                  <Label
                    label="sender-currency"
                    aria-label="select the currency you would like to send"
                    nomargin
                  >
                    <CurrencySelect
                      id="sender-currency"
                      options={options}
                      defaultValue={values.senderCurrency}
                      onChange={onSendCurrencyChange}
                      isSearchable
                    />
                  </Label>
                </FormGroupAppend>
              </FormGroup>
              <ErrorMessage component={Error} name="senderAmount" />
            </Label>

            <Label
              label="recipient-amount"
              aria-label="select the currency you would like the recipient to receive"
              nomargin
            >
              <InputName>Recipient Gets</InputName>
              <FormGroup>
                <FormGroupPrepend>$</FormGroupPrepend>
                <FormGroupControl
                  id="recipient-amount"
                  type="number"
                  name="recipientAmount"
                  value={
                    Number(
                      values.senderAmount * exchangeRate(recipientCurrency)
                    ).toFixed(2)
                  }
                  readOnly
                />
                <FormGroupAppend>
                  <Label label="recipient-currency" nomargin>
                    <CurrencySelect
                      id="recipient-currency"
                      options={options}
                      defaultValue={values.recipientCurrency}
                      onChange={onRecipientCurrencyChange}
                      isSearchable
                    />
                  </Label>
                </FormGroupAppend>
              </FormGroup>
              <ErrorMessage component={Error} name="recipientAmount" />
            </Label>

            <ExchangeRate>
              The current exchange rate is{" "}
              <Rate>
                1 {senderCurrency.toUpperCase()} ={" "}
                {exchangeRate(recipientCurrency)}{" "}
                {recipientCurrency.toUpperCase()}
              </Rate>
            </ExchangeRate>

            <Divider />

            <TotalFees>
              Total fees{" "}
              <Fee>
                {getFee(values.senderAmount).toFixed(2)}{" "}
                {senderCurrency.toUpperCase()}
              </Fee>
            </TotalFees>
            <TotalToPay>
              Total To Pay{" "}
              <Fee>
                {Number(
                  values.senderAmount + getFee(values.senderAmount)
                ).toFixed(2)}{" "}
                {senderCurrency.toUpperCase()}
              </Fee>
            </TotalToPay>

            <ButtonPrimary stretch type="submit">
              Continue
            </ButtonPrimary>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default Details;
