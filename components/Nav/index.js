import React from "react";
import { Flex, Box } from "rebass";
import { withRouter } from "next/router";
import styled from "styled-components";

import Link from "../Link";
import { IText as Text } from "../Text";
import Container from "../Container";
import WithIsScrolled from "../WithIsScrolled";
import AutokromaLogo from "assets/autokroma.svg";
import SearchIcon from "assets/search-icon.svg";
import ContactIcon from "assets/contact.svg";
import MenuIcon from "assets/menu-icon.svg";
import CartIcon from "assets/cart.svg";
import X from "assets/x.svg";
import DesktopOnly from "../DesktopOnly";
import MobileOnly from "../MobileOnly";
import { createToggle } from "../Toggle";
import products from "../../utils/data/products";
import { getTabName, getIcon } from "../ProductPage";
import { config } from "../../config";

const { Toggle, State, Display } = createToggle("mobile-menu");

const Logo = props => (
  <Link
    {...props}
    title="Homepage"
    href="/"
    css={{ textDecoration: "none", width: "33%", color: "inherit" }}
  >
    <Flex>
      <Box pt={"2px"} mr={2}>
        <AutokromaLogo fill={props.color || "inherit"} />
      </Box>
      <Text children="Autokroma" />
    </Flex>
  </Link>
);

const MobileMenuWrapper = styled(Flex)`
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(Flex)`
  z-index: 1000;
  position: relative;
  position: sticky;
  top: -1px;
  left: 0;
  width: 100%;
  border-bottom: 1px solid transparent;
  background: ${props =>
    props.transparent
      ? "rgba(0, 0, 0, .4)"
      : props.isScrolled
      ? "rgba(0, 0, 0, .8)"
      : "#000"};
  transition: background 0.25s ease-in-out;
`;

const NavItem = withRouter(props => {
  const active = props.strict
    ? props.router.pathname === props.href
    : props.router.pathname.indexOf(props.href) === 0;
  return (
    <Link
      title={props.title}
      href={props.href}
      underline={props.underline}
      prefetch={false}
      className={props.sub ? "" : "top-nav-link"}
      css={{ textDecoration: "none", color: "inherit", whiteSpace: "nowrap" }}
    >
      <Flex mx={3} css={{ flexDirection: "row" }}>
        {typeof props.route === "string" ? (
          <Box mt={"3px"} mx={2}>
            {getIcon(props.route)}
          </Box>
        ) : null}
        <Text
          css={{ fontWeight: active ? "bold" : "normal" }}
          children={props.title}
        />
      </Flex>
    </Link>
  );
});

const MobileNavItem = props => (
  <Box p={3}>
    <Link href={props.href} prefetch={false} css={{ color: "inherit" }}>
      <Text
        css={{ color: "#333", fontWeight: "bold" }}
        fontSize={4}
        children={props.title}
      />
    </Link>
  </Box>
);

const MobileMenu = styled(props => (
  <Display {...props}>
    <Toggle css={{ position: "absolute", right: "1em", top: "1em" }}>
      <X />
    </Toggle>
    <MobileMenuWrapper css={{ flexDirection: "column" }}>
      <MobileNavItem href="/" title="Home" />
      <MobileNavItem href="/AfterCodecs" title="AfterCodecs" />
      <MobileNavItem href="/BRAW_Studio" title="BRAW Studio" />
      {config.enablePlumePack && (
        <MobileNavItem href="/PlumePack" title="PlumePack" />
      )}
    </MobileMenuWrapper>
  </Display>
))`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const SubMenu = styled(props => {
  return (
    <Flex
      {...props}
      className={props.className + " sub-menu-wrapper"}
      py={3}
      id={`sub-menu-${props.visibleProduct.title.split(" ").join("-")}`}
      css={{ flexDirection: "column" }}
    >
      <Container css={{ flexDirection: "row", justifyContent: "center" }}>
        {props.visibleProduct &&
          props.visibleProduct.routes
            .sort()
            .filter(
              route =>
                route === "" || route === "Download" || route === "User_Guide"
            )
            .map((route, index) => (
              <NavItem
                sub
                strict
                href={`${props.visibleProduct.path}${route ? `/${route}` : ""}`}
                title={getTabName(route)}
                route={route}
                key={index}
              />
            ))}
      </Container>
    </Flex>
  );
})`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(0, 100%);
  width: 100%;
  color: #000;
  transition: all 200ms ease-in-out;
  opacity: 1;
  background-color: #fff;
  display: none;

  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const DesktopHeader = styled(props => {
  const color = "#FFF";
  const separateCart = config.separateCart;
  return (
    <DesktopOnly {...props} css={{ flexDirection: "column" }}>
      <Flex css={{ width: "100%" }}>
        <Logo withBoxShadow={!props.showBlackNav} color={color} />
        <Flex color={color} css={{ width: "33%", justifyContent: "center" }}>
          {products.map((product, index) => (
            <NavItem
              title={product.title}
              key={index}
              href={product.path}
              dataTitle={product.title}
            />
          ))}
        </Flex>
        <Flex css={{ width: "33%", justifyContent: "flex-end" }}>
          {config.showSearchPage && (
            <Link
              title="Search within the whole website"
              href="/search"
              prefetch={false}
            >
              <SearchIcon color={color} />
            </Link>
          )}
          <Link title="Contact Us" mx={4} href="/contact" prefetch={false}>
            <ContactIcon color={color} />
          </Link>
        </Flex>
      </Flex>
      {products.map((product, index) => (
        <SubMenu visibleProduct={product} key={index} />
      ))}
    </DesktopOnly>
  );
})`
  width: 100%;
  align-items: center;
  justify-content: space-between;

  color: #fff;
`;

const MobileHeader = styled(props => (
  <MobileOnly {...props}>
    <Logo color="#FFF" />
    <Toggle>
      <MenuIcon fill="#FFF" />
    </Toggle>
  </MobileOnly>
))`
  z-index: 10;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  fill: #fff;
  color: #fff;
`;

class Nav extends React.Component {
  menu = null;

  render() {
    const { router } = this.props;
    const { pathname } = router;
    return (
      <Wrapper transparent={false}>
        <Container py={3}>
          <DesktopHeader isProductPage={false} />
          <MobileHeader />
          <MobileOnly>
            <State ref={elem => (this.menu = elem)} />
            <MobileMenu />
          </MobileOnly>
        </Container>
      </Wrapper>
    );
  }
}

export default withRouter(Nav);
