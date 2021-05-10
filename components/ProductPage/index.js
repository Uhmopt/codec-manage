import { useState, createContext } from "react";
import styled from "styled-components";
import { Flex, Box } from "rebass";
import Container from "../Container";
import Text from "../Text";
import Link from "../Link";
import { useRouter, withRouter } from "next/router";
import FeaturesCard from "./FeaturesCard";
import DottedList from "./DottedList";
import { BackToProductLink } from "./BackToProductLink";
import FAQ from "./FAQ";

import products from "../../utils/data/products";
import ProductLander from "./ProductLander";
import Head from "../Head";
import Error from "next/error";

import Documentation from "assets/documentation.svg";
import Updates from "assets/updates.svg";
import Overview from "assets/overview.svg";

const Wrapper = styled(Flex).attrs({
  flexDirection: "column"
})`
  position: relative;
`;

const TabsWrapper = styled(Flex)`
  color: #000;
  background-color: #f8f8f8;
  padding: 16px 0;
`;

const TabItem = withRouter(styled(props => {
  const href = `${props.path}${props.route ? `/${props.route}` : ""}`;
  const active = props.router.pathname === href;
  return (
    <Link
      mr={4}
      my={[2, 0]}
      href={href}
      scroll={false}
      css={{ textDecoration: "none" }}
    >
      <Flex
        className={props.className}
        css={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Box mt={["0", "2px"]} mx={[1, 2]}>
          {getIcon(props.route)}
        </Box>
        <Text
          css={{ fontWeight: active ? "bold" : "normal" }}
          fontSize={[0, 1]}
        >
          {getTabName(props.route)}
        </Text>
      </Flex>
    </Link>
  );
})`
  &:last-of-type {
    margin-right: 0;
  }
`);

const getIcon = routeName => {
  switch (routeName.toLowerCase()) {
    case "download":
      return <Updates />;
    case "user_guide":
      return <Documentation />;
    case "":
      return <Overview />;
  }
};

const getTabName = (routeName, version) => {
  switch (routeName.toLowerCase()) {
    case "user_guide":
      return "Documentation";
    case "download":
      return "Download";
    case "":
      return "Overview";
  }
};

const isTOC = component => {
  return component.props.id === "table-of-contents";
};

export const ProductPageContext = createContext({ color: "#b4003d" });

const Product = ({ children, meta, landerImage, downloadPage }) => {
  const router = useRouter();
  const [currentProduct] = useState(
    products.filter(product => router.pathname.indexOf(product.path) === 0)[0]
  );
  if (!currentProduct) {
    return <Error statusCode={404} />;
  }

  if (children && isTOC(children[0])) {
    children = children.slice(1);
  }

  return (
    <ProductPageContext.Provider value={{ color: meta.mainColor }}>
      <Head
        {...meta}
        image={require(`assets/${meta.ogImage}`)}
        jsonld={{
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: meta.title,
          image: require(`assets/${meta.ogImage}`),
          description: meta.preview
        }}
      ></Head>
      <Wrapper>
        <ProductLander
          meta={meta}
          landerImage={landerImage}
          path={currentProduct.path}
        />
        <TabsWrapper>
          <Container justifyContent="center" flexDirection={["column", "row"]}>
            {currentProduct.routes
              .sort()
              .filter(
                route =>
                  route === "" || route === "Download" || route === "User_Guide"
              )
              .map((route, index) => (
                <TabItem route={route} path={currentProduct.path} key={index} />
              ))}
          </Container>
        </TabsWrapper>
        <Container blogPage={downloadPage}>{children}</Container>
      </Wrapper>
    </ProductPageContext.Provider>
  );
};

export default Product;

export {
  FeaturesCard,
  DottedList,
  FAQ,
  getTabName,
  getIcon,
  BackToProductLink
};
