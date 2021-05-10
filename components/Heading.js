import { Heading } from "rebass";
import styled, { css } from "styled-components";

const BaseHeading = styled(Heading)`
  line-height: 1.5;
  align-self: flex-start;
  font-family: inherit;
  position: relative;
  text-align: unset;

  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${props =>
    props.underline &&
    css`
      &:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: -5px;
        height: 3px;
        width: ${props.centered ? "100%" : "43%"};
        border-bottom: 3px solid ${props.underline};
        visibility: visible !important;
      }
    `}

    ${props =>
      props.centered &&
      css`
        align-self: center;
        text-align: center;
      `}

    ${props =>
      props.right &&
      css`
        align-self: flex-end;
        text-align: right;
      `}
`;

const H1 = props => (
  <BaseHeading fontSize={[4, 5, 6]} as="h1" mb={4} mt={4} {...props} />
);

const H2 = props => (
  <BaseHeading fontSize={[3, 4]} as="h2" mb={4} mt={4} {...props} />
);
const H3 = props => (
  <BaseHeading fontSize={[2, 3]} as="h3" mb={3} mt={2} {...props} />
);
const H4 = props => (
  <BaseHeading fontSize={[1, 2]} as="h4" mb={2} mt={2} {...props} />
);

export { H1, H2, H3, H4 };

export default BaseHeading;
