import React from "react";
import styled, { css } from "styled-components";
import { Flex, Image } from "rebass";
import BoxShadow from "./BoxShadow";

const Img = styled(Image)`
  object-fit: cover;

  ${props =>
    props.scaledDown &&
    css`
      width: 50% !important;
    `}

  ${props =>
    props.withBorderHover &&
    css`
      border: 2px solid transparent;

      &:hover {
        border: 2px solid ${props => props.color};
        box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px 0px;
      }
    `}
`;

const ImageComponent = props => <Img {...props} />;

export default ImageComponent;

const _BlogImg = styled(Img)`
  max-width: unset;
  height: 100%;

  ${props =>
    props.hasShadow &&
    css`
      box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 24px 0px;
    `}
`;

const FloatingLabel = styled(props => {
  const content = props.card ? (
    <BoxShadow p={[2, 2, 4]}>{props.children}</BoxShadow>
  ) : (
    props.children
  );
  return (
    <Flex
      {...props}
      mt={[4, 4, 0]}
      width={[1, 1, props.width ? props.width : 1 / 2]}
      px={props.card ? 0 : [2, 2, 4]}
    >
      {content}
    </Flex>
  );
})`
  background-color: ${props => (props.card ? "white" : "transparent")};
  transition: 0.25s opacity ease-in-out;

  ${props =>
    props.floating &&
    css`
      position: absolute;
      max-width: 400px;
      top: -25px;

      @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
        position: relative;
        top: 0;
      }
    `};

  ${props =>
    props.position !== "left" &&
    css`
      right: 0;
    `}
  ${props =>
    props.position === "left" &&
    css`
      left: 0;
    `}
`;

const BlogImageWrapper = styled(Flex).attrs({
  justifyContent: "center",
  my: 4,
  flexDirection: ["column", "column", "row"],
  alignItems: ["center", "center", "flex-start"],
  minHeight: "1px"
})`
  position: relative;

  ${props =>
    props.floating &&
    css`
      ${_BlogImg}:hover + ${FloatingLabel} {
        opacity: 0;
      }
    `}
`;

const getAlt = src => {
  const alt = src
    .replace("/_next/static/images/", "")
    .split("-")[0]
    .split("_")
    .join(" ");
  return alt;
};

const BlogImage = styled(props => {
  const flatLabel = props.children && !props.float;
  const showLabelBeforeImage = flatLabel && props.textPosition === "left";
  const showLabelAfterImage = flatLabel && props.textPosition !== "left";
  const floatingLabel = props.children && props.float;
  const singleImageWidth = props.width ? props.width : 1 / 2;
  const floatingLabelWidth = props.width
    ? `calc(100% - ${props.width})`
    : "50%";

  return (
    <BlogImageWrapper floating={floatingLabel}>
      {showLabelBeforeImage && (
        <FloatingLabel
          mr={[0, 0, 2]}
          card={props.textCard}
          children={props.children}
        />
      )}
      {Array.isArray(props.src) ? (
        props.src.map((src, index) => (
          <_BlogImg
            src={src}
            my={[2, 2, 0]}
            width={[
              1,
              1,
              props.scaledDown
                ? 1 / (props.src.length + 1)
                : 1 / props.src.length
            ]}
            mx={2}
            hasShadow={props.hasShadow}
            key={index}
            alt={getAlt(src)}
          />
        ))
      ) : (
        <_BlogImg
          src={props.src}
          width={
            flatLabel
              ? [1, 1, singleImageWidth]
              : props.scaledDown
              ? [1, 1, singleImageWidth]
              : 1
          }
          hasShadow={props.hasShadow}
          alt={getAlt(props.src)}
        />
      )}
      {showLabelAfterImage && (
        <FloatingLabel
          ml={[0, 0, 2]}
          card={props.textCard}
          children={props.children}
          width={floatingLabelWidth}
        />
      )}
      {floatingLabel && (
        <FloatingLabel
          floating={true}
          card={true}
          position={props.textPosition}
          children={props.children}
          width={floatingLabelWidth}
        />
      )}
    </BlogImageWrapper>
  );
})``;

export { BlogImage };
