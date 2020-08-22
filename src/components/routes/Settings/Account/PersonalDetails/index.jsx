import React, { Fragment } from "react";
import { Card, Contents, Row, Col } from "components/common";
import { Heading, FieldName, FieldValue } from "./styles";

export default function PersonalDetails() {
  return (
    <Card>
      <Heading>Personal Details</Heading>
      <Row>
        <Col flex="0 0 25%">
          <FieldName>Name</FieldName>
          <FieldName>Date of Birth</FieldName>
          <FieldName>Address</FieldName>
        </Col>
        <Col flex="0 0 75%">
          <FieldValue>Smith Rhodes</FieldValue>
          <FieldValue>12-09-1982</FieldValue>
          <FieldValue>
            145 Murphy Canyon Rd,
            Suite 100-18, San Diego, California - 22434, <br /> United States
          </FieldValue>
        </Col>
      </Row>
    </Card>
  );
}
