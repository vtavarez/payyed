import React, { Fragment, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import { useQuery } from "@tanstack/react-query";
import { getExchangeRates } from "api";
import * as Yup from "yup";
import {
    Label,
    TextInput,
    TextArea,
    InputName,
    FormGroup,
    FormGroupControl,
    FormGroupPrepend,
    FormGroupAppend,
    Error,
    CurrencySelect,
    CountrySelect,
    DatePicker,
    ButtonPrimary,
} from "components/common";
import { parseAmount, formatDate, dateFormat, tomorrow } from "utils/functions";
import { Heading, SubHeading, Form, FormName, Divider } from "./styles";

/**
 * Renders the details section of the Request Money page, including a form for the payer's details.
 * Uses Formik and Yup for form validation and date-fns for date formatting.
 * @returns JSX element containing the details section of the Request Money page.
 */

function Details() {
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
        name: "",
        email: "",
        requestAmount: "1,000.00",
        description: "",
        paymentDue: formatDate(tomorrow, dateFormat),
    };

    // Validation Schema
    const schema = () => {
        Yup.object().shape({
            name: Yup.string().required("A recipient name is required"),
            email: Yup.string().email().required("A recipient email address is required"),
            country: Yup.string().required("Required"),
            requestAmount: Yup.string()
                .matches(/^[+-]?\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$/, "Amount must be a valid number")
                .required("A request amount is required"),
            description: Yup.string().notRequired(),
            paymentDue: Yup.date().required("Required"),
        });
    };

    // Country Change
    const countryChange = (country) => country.value;

    // Form Submition
    const submition = (values) => {
        console.log(values);
    };

    return (
        <Fragment>
            <Heading>Request Money</Heading>
            <SubHeading>Request payment anytime, anywhere around the globe.</SubHeading>
            <Formik initialValues={values} validationSchema={schema} onSubmit={submition}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values: { name, email, description, requestAmount, paymentDue },
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormName>Payer Details</FormName>
                        <Divider stretch />
                        <Label label="name">
                            <InputName>Name</InputName>
                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={name}
                            />
                            <ErrorMessage component={Error} name="name" />
                        </Label>
                        <Label label="email">
                            <InputName>Email</InputName>
                            <TextInput
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Enter Email Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={email}
                            />
                            <ErrorMessage component={Error} name="email" />
                        </Label>
                        <Label label="country">
                            <InputName>Country</InputName>
                            <CountrySelect
                                id="country"
                                name="country"
                                onChange={countryChange}
                                onBlur={handleBlur}
                                isSearchable
                            />
                            <ErrorMessage component={Error} name="country" />
                        </Label>
                        <Label label="request-amount">
                            <InputName>Amount</InputName>
                            <FormGroup>
                                <FormGroupPrepend>$</FormGroupPrepend>
                                <FormGroupControl
                                    id="request-amount"
                                    type="text"
                                    name="requestAmount"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={requestAmount}
                                />
                                <FormGroupAppend>
                                    <Label label="currency" nomargin>
                                        <CurrencySelect
                                            id="currency"
                                            name="currency"
                                            onChange={currencyChange}
                                            isSearchable
                                        />
                                    </Label>
                                </FormGroupAppend>
                            </FormGroup>
                            <ErrorMessage component={Error} name="requestAmount" />
                        </Label>
                        <Label label="payment-description">
                            <InputName>Description</InputName>
                            <TextArea
                                id="payment-description"
                                name="description"
                                rows="4"
                                placeholder="Payment Description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={description}
                            />
                            <ErrorMessage component={Error} name="description" />
                        </Label>
                        <Label label="payment-due">
                            <InputName>Payment due by</InputName>
                            <DatePicker
                                id="payment-due"
                                name="paymentDue"
                                selected={selected}
                                setSelected={setSelected}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage component={Error} name="paymentDue" />
                        </Label>
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
