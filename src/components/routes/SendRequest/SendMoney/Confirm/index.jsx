import React, { Fragment } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { Label, InputName, Error, TextArea, ButtonPrimary } from "components/common";
import {
    Heading,
    SubHeading,
    Email,
    Form,
    FormName,
    SendAmount,
    Amount,
    TotalFees,
    Fees,
    Divider,
    Total,
    TotalAmount,
} from "./styles";

function Confirm({ payload: { email, fee, baseCurrency, senderAmount, total }, dispatch }) {
    //Initial Form Values
    const values = {
        description: "",
    };

    // Validation Schema
    const schema = () => {
        return Yup.object().shape({
            description: Yup.string()
                .trim()
                .matches(
                    /[a-zA-Z0-9!.,?;:@#&*%$]$/,
                    "Description cannot include any special characters, or start with a space",
                )
                .required("A payment description is required"),
        });
    };

    // Form Submition
    const submition = (values) => {
        dispatch({
            type: "success",
            payload: {
                email,
                total,
                ...values,
            },
        });
    };
    return (
        <Fragment>
            <Heading>Send Money</Heading>
            <SubHeading>
                You are sending money to <Email>{email}</Email>
            </SubHeading>
            <Formik initialValues={values} validationSchema={schema} onSubmit={submition}>
                {({ handleSubmit, handleChange, handleBlur, values: { description } }) => (
                    <Form onSubmit={handleSubmit}>
                        <Label label="description">
                            <InputName>Description</InputName>
                            <TextArea
                                id="description"
                                name="description"
                                rows="4"
                                placeholder="Payment Description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={description}
                            />
                            <ErrorMessage component={Error} name="description" />
                        </Label>
                        <FormName>Details</FormName>
                        <SendAmount>
                            Send Amount{" "}
                            <Amount>
                                {senderAmount} {baseCurrency}
                            </Amount>
                        </SendAmount>
                        <TotalFees>
                            Total Fees{" "}
                            <Fees>
                                {fee} {baseCurrency}
                            </Fees>
                        </TotalFees>
                        <Divider />
                        <Total>
                            Total{" "}
                            <TotalAmount>
                                {total} {baseCurrency}
                            </TotalAmount>
                        </Total>
                        <ButtonPrimary stretch type="submit">
                            Send Money
                        </ButtonPrimary>
                    </Form>
                )}
            </Formik>
        </Fragment>
    );
}

export default Confirm;
