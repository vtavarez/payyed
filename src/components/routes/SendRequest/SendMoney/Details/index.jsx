import React, { Fragment, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Formik, ErrorMessage } from "formik";
import { getExchangeRates } from "api";
import { parseAmount, getFee } from "utils/functions";
import * as Yup from "yup";
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
    Amount,
} from "./styles";

function Details({ dispatch }) {
    const [currency, setCurrency] = useState({
        base: "USD",
        recipient: "CAD",
        recipientLocale: "en-CA",
    });

    // Query Exhange Rates
    const {
        data: { rates },
        status,
    } = useQuery({
        queryKey: ["rates", currency.base, currency.recipient],
        queryFn: getExchangeRates,
    });

    //Initial Form Values
    const values = {
        email: "",
        senderAmount: "1,000.00",
    };

    // Validation Schema
    const schema = () => {
        return Yup.object().shape({
            email: Yup.string().email().required("A recipient email address is required"),
            senderAmount: Yup.string()
                .matches(/^[+-]?\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$/, "Amount must be a valid number")
                .required("A send amount is required"),
        });
    };

    // Base Currency Change
    const baseCurrencyChange = ({ value }) => {
        setCurrency({ ...currency, base: value.toUpperCase() });
    };

    // Recipient Currency Change
    const recipientCurrencyChange = ({ value, locale }) => {
        setCurrency({ ...currency, recipient: value.toUpperCase(), recipientLocale: locale });
    };

    // Calculate Recipient Amount
    const recipientAmount = (amount = "") => {
        (parseAmount(amount) * rates[currency.recipient]).toLocaleString(currency.recipientLocale, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    // Form Submition
    const submition = ({ email, senderAmount }) => {
        const parsedAmount = parseAmount(senderAmount);
        const fee = getFee(parsedAmount);
        dispatch({
            type: "confirm",
            payload: {
                email,
                senderAmount: parsedAmount.toFixed(2),
                fee: fee.toFixed(2),
                baseCurrency: currency.base,
                total: (parsedAmount + fee).toFixed(2),
            },
        });
    };

    return (
        <Fragment>
            <Heading>Send Money</Heading>
            <SubHeading>Send your money anytime, anywhere around the globe.</SubHeading>
            <Formik initialValues={values} validationSchema={schema} onSubmit={submition}>
                {({ handleBlur, handleChange, handleSubmit, values: { email, senderAmount } }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormName>Personal Details</FormName>
                        <Divider stretch />
                        <Label label="email">
                            <InputName>Recipient</InputName>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={email}
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
                                    type="text"
                                    name="senderAmount"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={senderAmount}
                                />
                                <FormGroupAppend>
                                    <Label label="sender-currency" nomargin>
                                        <CurrencySelect
                                            id="sender-currency"
                                            onChange={baseCurrencyChange}
                                            isSearchable
                                        />
                                    </Label>
                                </FormGroupAppend>
                            </FormGroup>
                            <ErrorMessage component={Error} name="senderAmount" />
                        </Label>
                        <Label label="recipient-amount" nomargin>
                            <InputName>Recipient Gets</InputName>
                            <FormGroup>
                                <FormGroupPrepend>$</FormGroupPrepend>
                                <FormGroupControl
                                    id="recipient-amount"
                                    type="text"
                                    name="recipientAmount"
                                    value={recipientAmount()}
                                    readOnly
                                />
                                <FormGroupAppend>
                                    <Label label="recipient-currency" nomargin>
                                        <CurrencySelect
                                            id="recipient-currency"
                                            onChange={recipientCurrencyChange}
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
                                1 {currency.base} = {rates[currency.recipient]} {currency.recipient}
                            </Rate>
                        </ExchangeRate>
                        <Divider />
                        <TotalFees>
                            Total fees{" "}
                            <Fee>
                                {getFee(parseAmount(senderAmount)).toFixed(2)} {currency.base}
                            </Fee>
                        </TotalFees>
                        <Divider />
                        <TotalToPay>
                            Total To Pay{" "}
                            <Amount>
                                {parseAmount(senderAmount).toFixed(2)} {currency.base}
                            </Amount>
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
