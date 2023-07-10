import React, { Fragment } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { ButtonPrimary } from "components/common";
import {
  Heading,
  SubHeading,
  Email,
  Form,
  FormName,
  Divider,
  Wrapper,
  Field,
  FieldName,
  FieldValue,
  Total,
  TotalAmount,
} from "./styles";

function Confirm({ state, dispatch }) {
  	const {
        name,
        email,
        requestCurrency,
        requestAmount,
        dueDate,
        country,
        description,
    } = state.confirm.payload;
	return (
        <Fragment>
            <Heading>Request Money</Heading>
            <SubHeading>
                You are requesting money from <Email>{email}</Email>
            </SubHeading>
            <Formik
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    dispatch({
                        type: "success",
                        payload: {
                            email,
                            requestAmount,
                            ...values,
                        },
                    });
                }}
            >
                {({ handleSubmit, values }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormName>Confirm Details</FormName>
                        <Divider stretch />
                        <Wrapper>
                            <Field>
                                <FieldName>Name:</FieldName>
                                <FieldValue>{name}</FieldValue>
                            </Field>
                            <Field>
                                <FieldName>Email:</FieldName>
                                <FieldValue>{email}</FieldValue>
                            </Field>
                            <Field>
                                <FieldName>Country:</FieldName>
                                <FieldValue>{country}</FieldValue>
                            </Field>
                            <Field>
                                <FieldName>Payment due by:</FieldName>
                                <FieldValue>{dueDate}</FieldValue>
                            </Field>
                            <Field>
                                <FieldName bold>Requested Amount:</FieldName>
                                <FieldValue bold>
                                    {Number(requestAmount || null).toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}{" "}
                                    {requestCurrency}
                                </FieldValue>
                            </Field>
                            <Field>
                                <FieldName>Description:</FieldName>
                                <FieldValue>
									{description || "No description"}
                                </FieldValue>
                            </Field>
                        </Wrapper>
                        <ButtonPrimary stretch type="submit">
                            Request Money
                        </ButtonPrimary>
                    </Form>
                )}
            </Formik>
        </Fragment>
    );
}

export default Confirm;
