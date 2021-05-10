import React, { useState, useEffect } from "react";
import { Button, Box } from "rebass";
import styled, { css } from "styled-components";
import Link from "./Link";
import { IText } from "./Text";

const StyledBtn = styled(Button).attrs(props => ({
  px: props.small ? 2 : [2, 3, 4],
  py: props.small ? 1 : 3
}))`
  border-radius: 0;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;

  ${props =>
    props.outline &&
    css`
      color: ${props => props.color || "inherit"};
      background-color: transparent;
      border: 1px solid ${props => props.color || "inherit"};

      &:hover:not(:active) {
        background-color: ${props => props.color || "inherit"};
        color: ${props => (props.color === "white" ? "black" : "white")};
      }

      &:active {
        background-color: ${props => props.color || "inherit"};
        color: ${props => (props.color === "white" ? "black" : "white")};

        > * {
          color: ${props => props.hoverColor || "inherit"};
        }
      }
    `}

  ${props =>
    !props.outline &&
    css`
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
      background-color: ${props => props.color || "inherit"};
      color: ${props => props.textColor || "white"};
      fill: ${props => props.textColor || "white"};

      &:hover {
        background-color: ${props => props.hoverColor || "white"};
        color: black;
        fill: ${props => props.color || "inherit"};
      }

      &:active {
        background-color: ${props => props.hoverColor || "white"};
        color: ${props =>
          props.color === "#000"
            ? props.theme.colors.primary
            : props.color || "inherit"};

        > * {
          color: ${props =>
            props.color === "#000"
              ? props.theme.colors.primary
              : props.color || "inherit"};
        }
      }
    `}
`;

const Label = styled(IText).attrs({ mt: 2 })`
  color: white !important;
  position: absolute;
  text-align: center;
  width: 100%;
  font-size: 0.7em;
`;

export { Label };

export const PlatformButton = props => {
  // const [currentPlatform, setCurrentPlatform] = useState("win");

  // useEffect(() => {
  //   const platform = window.navigator.platform;
  //   const macosPlatforms = [
  //     "Macintosh",
  //     "MacIntel",
  //     "MacPPC",
  //     "Mac68K",
  //     "iPhone",
  //     "iPad",
  //     "iPod",
  //     "iOS"
  //   ];

  //   var currentPlatformIsWindows = macosPlatforms.indexOf(platform) == -1;
  //   setCurrentPlatform(currentPlatformIsWindows ? "win" : "mac");
  // }, []);

  const Button = !props.labelText ? (
    <StyledBtn {...props} as="div" />
  ) : (
    <>
      <StyledBtn {...props} as="div" />
      <Label
        css={{ position: "absolute", bottom: "-25px" }}
        children={props.labelText}
      />
    </>
  );
  if (props.macUrl && props.winUrl) {
    return (
      <Box {...props}>
        <Link
          href={props.defaultUrl}
          forwardRef={props.forwardRef}
          selfTarget={props.selfTarget}
          className="no-js store-link"
        >
          {Button}
        </Link>
        <Link
          href={props.macUrl}
          forwardRef={props.forwardRef}
          selfTarget={props.selfTarget}
          className="mac-only store-link"
          css={{ display: "none" }}
        >
          {Button}
        </Link>
        <Link
          href={props.winUrl}
          forwardRef={props.forwardRef}
          selfTarget={props.selfTarget}
          className="win-only store-link"
          css={{ display: "none" }}
        >
          {Button}
        </Link>
      </Box>
    );
  }
  return Button;
};

const ButtonComponent = props => {
  const Button = !props.labelText ? (
    <StyledBtn {...props} as="div" />
  ) : (
    <Box css={{ position: "relative" }}>
      <StyledBtn {...props} as="div" />
      <Label css={{ pointerEvents: "none" }} children={props.labelText} />
    </Box>
  );
  if (props.href) {
    return (
      <Box {...props}>
        <Link
          id={props.linkId}
          href={props.href}
          forwardRef={props.forwardRef}
          selfTarget={props.selfTarget}
        >
          {Button}
        </Link>
      </Box>
    );
  }
  return Button;
};

export default ButtonComponent;
