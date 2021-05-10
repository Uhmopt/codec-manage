import { Flex, Box } from "rebass";
import styled, { css } from "styled-components";
import { useContext } from "react";
import Dot from "assets/dot.svg";
import Text from "./Text";
import { ProductPageContext } from "./ProductPage";

export const ListItem = styled(props => {
  const theme = useContext(ProductPageContext);
  return (
    <Flex mb={3}>
      <Box mt={"2px"}>
        <Dot width="10px" fill={theme.color} />
      </Box>
      <Text
        lineHeight={1.5}
        width="calc(100%-10px)"
        as="li"
        ml={3}
        {...props}
      />
    </Flex>
  );
})`
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const OrderedList = styled(Box).attrs({
  as: "ol"
})`
  svg {
    display: none;
  }
`;

OrderedList.defaultProps = {
  fontSize: [0, 1]
};

const DottedList = styled(Box).attrs({
  my: [2],
  px: [2, 0],
  as: "ul"
})`
  flex-direction: column;
  display: flex;
  width: 100%;

  color: ${props => props.color || props.theme.colors.primary};

  ${props =>
    props.noJustify &&
    css`
      p {
        text-align: unset;
      }
    `}

  > div:first-child {
    margin-top: 16px;
  }
`;

DottedList.defaultProps = {
  fontSize: [0, 1]
};

export default DottedList;
