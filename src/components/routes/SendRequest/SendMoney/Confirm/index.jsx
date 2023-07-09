import React, { Fragment } from "react";
import * as Yup from "yup";
import { Formik, ErrorMessage } from "formik";
import {
  Label,
  InputName,
  Error,
  TextArea,
  ButtonPrimary,
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
  TotalAmount,
} from "./styles";

function Confirm({ state, dispatch }) {
  	const { email, fee, senderCurrency, senderAmount, total } = state.confirm.payload;
	return (
		<Fragment>
			<Heading>Send Money</Heading>
			<SubHeading>
				You are sending money to <Email>{email}</Email>
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
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true);
					dispatch({
						type: "success",
						payload: {
							email, 
							total, 
							...values 
						}
					})
				}}
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
					Send Amount{" "}
					<Amount>
						{senderAmount} {senderCurrency}
					</Amount>
					</SendAmount>
					<TotalFees>
						Total Fees{" "}
						<Fees>
							{fee} {senderCurrency}
						</Fees>
					</TotalFees>
					<Divider />
					<Total>
						Total{" "}
						<TotalAmount>
							{total} {senderCurrency}
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
