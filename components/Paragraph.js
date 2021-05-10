import { Box } from "rebass";
import Text from "./Text";
import styled from "styled-components";

const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
  z-index: 1;
`;

Wrapper.defaultProps = {
  fontSize: [0, 1]
};

const Paragraph = ({ centered, as, ...props }) => (
  <Wrapper centered={centered} as={as}>
    <Text css={{ color: "inherit" }} mb={4} {...props} />
  </Wrapper>
);

export default Paragraph;
