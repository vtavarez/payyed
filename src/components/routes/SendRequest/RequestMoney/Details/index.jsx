import React, { Fragment } from "react";
import { Formik, ErrorMessage } from "formik";
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
import { formatDate, dateFormat, tomorrow } from "utils/functions";
import { Heading, SubHeading, Form, FormName, Divider } from "./styles";

/**
 * Renders the details section of the Request Money page, including a form for the payer's details.
 * Uses Formik and Yup for form validation and date-fns for date formatting.
 * @returns JSX element containing the details section of the Request Money page.
 */

function Details() {
    // fake data set
    const countries = [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "eng", label: "England" },
        { value: "mx", label: "Mexico" },
    ];

    const currencies = [
        { value: "usd", label: "USD", description: "United States dollar" },
        { value: "cad", label: "CAD", description: "Canadian dollar" },
        { value: "gbp", label: "GBP", description: "British pound" },
        { value: "mxn", label: "MXN", description: "Mexican peso" },
    ];

    const parseAmount = (amount) => Number(amount.replace(/,/g, ""));

    return (
        <Fragment>
            <Heading>Request Money</Heading>

            <SubHeading>Request payment anytime, anywhere around the globe.</SubHeading>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    country: countries[0],
                    requestAmount: "1,000.00",
                    description: "",
                    paymentDue: formatDate(tomorrow, dateFormat),
                }}
                validationSchema={() =>
                    Yup.object().shape({
                        name: Yup.string().required("A recipient name is required"),
                        email: Yup.string()
                            .email()
                            .required("A recipient email address is required"),
                        country: Yup.string().required("Required"),
                        requestAmount: Yup.string()
                            .matches(
                                /^[+-]?\d{1,3}(?:,?\d{3})*(?:\.\d{2})?$/,
                                "Amount must be a valid number",
                            )
                            .required("A request amount is required"),
                        description: Yup.string().notRequired(),
                        paymentDue: Yup.date().required("Required"),
                    })
                }
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
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
                                value={values.name}
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
                                value={values.email}
                            />
                            <ErrorMessage component={Error} name="email" />
                        </Label>

                        <Label label="country">
                            <InputName>Country</InputName>
                            <CountrySelect
                                id="country"
                                name="country"
                                options={countries}
                                defaultValue={values.country}
                                onChange={(option) => handleChange("country")}
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
                                    value={values.requestAmount}
                                />
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
                            <ErrorMessage component={Error} name="requestAmount" />
                        </Label>

                        <Label label="payment-description">
                            <InputName>Description</InputName>
                            <TextArea
                                id="payment-description"
                                name="description"
                                rows="4"
                                placeholder="Payment Description"
                                aria-label="Include a payment description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                            <ErrorMessage component={Error} name="description" />
                        </Label>

                        <Label label="payment-due">
                            <InputName>Payment due by</InputName>
                            <DatePicker
                                id="payment-due"
                                name="paymentDue"
                                minDate={values.paymentDue}
                                alwaysShowCalendars={true}
                                singleDatePicker={true}
                                dateSelected={handleChange}
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
