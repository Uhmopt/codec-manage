import styled, { css } from "styled-components";
import { Card } from "rebass";
import { H4 } from "./Heading";
import Text from "./Text";
import BoxShadow from "./BoxShadow";

const Title = styled(props => (
  <H4 pt={[3, 4]} my={0} lineHeight={1} {...props} />
))``;

const BaseCard = styled(Card)`
  height: 100%;

  ${props =>
    props.hover !== false &&
    css`
      &:hover {
        ${Title} {
          text-decoration: underline;
        }
      }
    `};
`;

const C = props => (
  <BoxShadow height={props.boxShadowHeight || "auto"} display="block">
    <BaseCard {...props} />
  </BoxShadow>
);

C.Title = Title;
C.Body = props => (
  <Text lineHeight={1.25} mt={3} fontSize={[0, 1]} as="div" {...props} />
);

export default C;
