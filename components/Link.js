import React from "react";
import { Link } from "rebass";
import NextLink from "next/link";
import styled from "styled-components";
import ConditionalWrap from "conditional-wrap";

const UniversalLink = props => {
  const external = props.href.indexOf("//") !== -1;
  return (
    <ConditionalWrap
      condition={!external}
      wrap={children => (
        <NextLink
          href={props.href}
          ref={props.forwardRef}
          prefetch={props.prefetch}
          children={children}
        />
      )}
    >
      <Link
        target={external && !props.selfTarget ? "_blank" : undefined}
        ref={props.forwardRef}
        {...props}
      />
    </ConditionalWrap>
  );
};

export default styled(UniversalLink)`
  color: inherit;

  &:hover:not(:active) {
    text-decoration: ${props => props.underline !== false && "underline"};
  }

  &:active {
    color: #b4003d;

    * {
      color: #b4003d;
    }
  }

  ${props => props.css};
`;
