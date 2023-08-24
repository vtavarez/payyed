import React, { Fragment, useEffect, useState } from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardSuccess, ButtonPrimary } from "components/common";
import {
    Heading,
    SuccessText,
    LeadText,
    Text,
    Highlight,
    CheckIcon,
    Print,
    PrintIcon,
    ActiveLink,
} from "./styles";

function Success({
    state: {
        success: {
            payload: { email, total },
        },
    },
    dispatch,
}) {
    return (
        <Fragment>
            <Heading>Send Money</Heading>
            <CardSuccess>
                <CheckIcon as={FontAwesomeIcon} icon="check-circle" />
                <SuccessText>Success!</SuccessText>
                <LeadText>Transaction Complete</LeadText>
                <Text>
                    You've Successfully sent <Highlight>${total}</Highlight> to{" "}
                    <Highlight>{email}</Highlight>, See transaction details under{" "}
                    <Link to="/dashboard">
                        <ActiveLink>Activity</ActiveLink>
                    </Link>
                    .
                </Text>
                <ButtonPrimary onClick={(e) => dispatch({ type: "reset" })}>
                    Send Money Again
                </ButtonPrimary>
                <Print>
                    <PrintIcon as={FontAwesomeIcon} icon="print" />
                    Print
                </Print>
            </CardSuccess>
        </Fragment>
    );
}

export default Success;
