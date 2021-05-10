import React from "react";
import { Flex } from "rebass";
import styled, { css } from "styled-components";

import TwitterLogo from "assets/twitter.svg";
import FacebookLogo from "assets/facebook.svg";
import ContactIcon from "assets/contact.svg";
import MailIcon from "assets/subscribe_to.svg";
import { IText as Text } from "../Text";
import Link from "../Link";

const Wrapper = styled(Flex).attrs({
  py: 3,
  px: 4,
  mt: 5,
  fontSize: 1
})`
  background: #000;
  justify-content: space-around;
  color: white;
  border-top: 1px solid;
`;

const LeftWrapper = styled(Flex).attrs({
  width: ["50%", "66%"],
  height: ["10em", "auto"],
  flexDirection: ["column", "row"]
})`
  position: relative;
  justify-content: space-around;
  align-items: center;
`;

const RightWrapper = styled(Flex).attrs({
  width: ["50%", "33%"]
})`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const hoverEffect = css`
  cursor: pointer;
  fill: white;
  color: white;
`;

const FooterLink = styled(Link)`
  ${hoverEffect}

  text-decoration: none;
`;

// news letter URL can also be http://eepurl.com/gSuGCL

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <FooterLink href="https://autokroma.us17.list-manage.com/subscribe?u=1da24c3edad543181b6cb75f8&id=7a5f235bce">
            <Flex flexDirection="row">
              <MailIcon />
              <Text ml={2}>Subscribe to our Newsletter !</Text>
            </Flex>
          </FooterLink>
          <FooterLink href="/contact">
            <Flex flexDirection="row">
              <ContactIcon />
              <Text ml={2}>Contact Us</Text>
            </Flex>
          </FooterLink>
        </LeftWrapper>
        <RightWrapper>
          <Text>Our socials</Text>
          <Flex mt={3} css={{ width: "5em", justifyContent: "space-evenly" }}>
            <FooterLink href="https://twitter.com/Autokroma">
              <TwitterLogo width="1.3em" height="1.3em" />
            </FooterLink>
            <FooterLink href="https://www.facebook.com/Autokroma/">
              <FacebookLogo width="1.3em" height="1.3em" />
            </FooterLink>
          </Flex>
        </RightWrapper>
      </Wrapper>
    );
  }
}
 
export default Footer;
