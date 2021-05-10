import { Flex } from "rebass";
import styled, { css } from "styled-components";

export const xxl = css`
  max-width: unset;
  max-width: 1500px;
`;

const Container = styled(Flex).attrs(props => ({
  mx: "auto",
  px: props.px || [3, 0],
  flexDirection: props.flexDirection || "column"
}))`
  width: 100%;
  font-size: 1em;
  line-height: 1.5;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    // min-width: 576px;
    max-width: 540px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    // min-width: 768px;
    max-width: 720px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    // min-width: 992px;
    max-width: 850px;

    ${props =>
      props.blogPage &&
      css`
        max-width: 740px;
      `}
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    // min-width: 1140px;
    max-width: 1000px;

    ${props =>
      props.blogPage &&
      css`
        max-width: 700px;
      `}
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[4]}) {
    // min-width: 1368px;
    max-width: 1200px;

    ${props =>
      props.blogPage &&
      css`
        max-width: 700px;
      `}
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[5]}) {
    ${xxl}

    ${props =>
      props.blogPage &&
      css`
        max-width: 700px;
      `}
  }
`;

export default Container;
