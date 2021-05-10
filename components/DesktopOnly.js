import styled from "styled-components";
import { Flex } from "rebass";

const DesktopOnly = styled(Flex)`
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

export default DesktopOnly;
