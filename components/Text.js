import { Text } from "rebass";
import styled from "styled-components";

const _Text = styled(Text)``;

_Text.defaultProps = {
  color: "rgba(0, 0, 0, 0.9)",
  fontSize: [0, 1],
  lineHeight: 1.5,
  fontFamily: "inherit"
};

export const IText = styled(Text)``;

IText.defaultProps = {
  fontFamily: "inherit",
  color: "inherit"
};

export const B = styled.b``;

B.defaultProps = {
  display: "inline",
  fontWeight: "bold"
};

export const Error = styled(B)`
  color: ${props => props.theme.colors.red};
`;

export default _Text;
