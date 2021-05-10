import styled from "styled-components";
import { Flex } from "rebass";
import React from "react";
import { default as _Text } from "./Text";

const Wrapper = styled.div`
  display: none;
`;

const Text = styled(_Text)`
  cursor: pointer;
  text-decoration: underline;
`;

const getPlatformOnlyComponent = platform => {
  return props => {
    const { children, strict, inline } = props;

    return (
      <Flex
        flexDirection="column"
        className={`platform-only ${
          platform === "mac" ? "mac-only" : "windows-only"
        } ${strict ? "strict" : ""} ${inline ? "inline" : ""}`}
        css={{ display: props.inline ? "inline" : "flex" }}
        mb={props.mb}
      >
        <Text className="platform-btn" children="" />
        <Wrapper className="platform-content" children={children} />
      </Flex>
    );
  };
};

const MacOnly = getPlatformOnlyComponent("mac");

const WindowsOnly = getPlatformOnlyComponent("win");

export { MacOnly, WindowsOnly };
