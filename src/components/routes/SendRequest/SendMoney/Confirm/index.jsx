import React, { Fragment } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  Label,
  InputName,
  Error,
  TextArea,
  ButtonPrimary
} from "components/common";
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
  TotalAmount
} from "./styles";

function Confirm({ email }) {
  return (
    <Fragment>
      <Heading>Send Money</Heading>
      <SubHeading>
        You are sending money to <Email>user@gmail.com</Email>
      </SubHeading>
      <Formik
        initialValues={{
          description: ""
        }}
        validationSchema={() =>
          Yup.object().shape({
            description: Yup.string()
              .trim()
              .matches(
                /[a-zA-Z0-9!.,?;:@#&*%$]$/,
                "Description cannot include any special characters, or start with a space"
              )
              .required("A payment description is required")
          })
        }
        onSubmit={() => {}}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
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
                value={values.description}
              />
              <ErrorMessage component={Error} name="description" />
            </Label>
            <FormName>Details</FormName>
            <SendAmount>
              Send Amount <Amount>1,000.00 USD</Amount>
            </SendAmount>
            <TotalFees>
              Total Fees <Fees>7.21 USD</Fees>
            </TotalFees>
            <Divider />
            <Total>
              Total <TotalAmount>1,007.21 USD</TotalAmount>
            </Total>
            <ButtonPrimary stretch>Send Money</ButtonPrimary>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default Confirm;
