import * as React from "react";
import styled from "styled-components";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Heading = styled.h1`
  color: ${(props: any) => props.theme.colors.primary};
`;

export const Hello = ({ compiler, framework }: HelloProps) => (
  <Heading>
    Hello from {compiler} and {framework}!
  </Heading>
);

export default Hello;
