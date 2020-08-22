import styled from "styled-components";

export const Heading = styled.h3`
  font-family: "rubikregular";
  font-size: 1.3125rem;
  text-transform: capitalize;
  align-self: flex-start;
  margin-bottom: 1rem;
`;
export const FieldName = styled.p`
  text-align: left;
  margin-bottom: 1rem;
  color: #8e9a9d;

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

export const FieldValue = styled.p`
  text-align: left;
  margin-bottom: 1rem;
`;
