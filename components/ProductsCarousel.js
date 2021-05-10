import { Box, Flex } from "rebass";
import styled, { css } from "styled-components";
import hexToRgba from "hex-to-rgba"; // TODO: Replace that if we gonna use React code

import products from "../utils/data/products";
import { H1, H3 } from "./Heading";
import Paragraph from "./Paragraph";
import Button, { PlatformButton } from "./Button";
import { IText as Text } from "./Text";
import Link from "./Link";
import ChevronLeftIcon from "assets/chevron-left.svg";
import { config } from "../config";
import ChevronRightIcon from "assets/chevron-right.svg";
import { xxl } from "./Container";

const ChevronStyle = css`
  position: absolute;
  top: calc(50% - 3em);
  color: white;

  width: 2em;
  height: 2em;
  cursor: pointer;
  opacity: 0.5;

  z-index: 1000;

  &:hover {
    opacity: 1;
  }

  .no-js & {
    display: none;
  }
`;

const ChevronLeft = styled(ChevronLeftIcon)`
  ${ChevronStyle}
  left: 2em;
`;

const ChevronRight = styled(ChevronRightIcon)`
  ${ChevronStyle}
  right: 2em;
`;

const AboutUsWrapper = styled(Flex).attrs({
  flexDirection: "column",
  p: 3,
  pb: 4
})`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;

  left: 0;
  bottom: 0;

  max-width: 370px;

  @media screen and (max-width: ${props => props.theme.breakpoints[2]}) {
    max-width: 250px;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    display: none;
  }
`;

const DotWrapper = styled(Box).attrs({ mx: 1 })`
  background: #fff;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  &.active {
    background: ${props => props.color};
  }

  &:hover {
    transform: scale(1.2);
  }
`;

const DotsContainerWrapper = styled(Flex).attrs({ py: 3, px: 4 })`
  position: absolute;
  bottom: 0;
  left: 50%;
  background: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, 0);

  .no-js & {
    display: none;
  }
`;

const DotsContainer = ({ amount, products }) => {
  return (
    <DotsContainerWrapper id="dot-wrapper">
      {[...Array(amount)].map((el, index) => (
        <DotWrapper
          key={index}
          color={products[index].mainColor}
          id={`dot-${index}`}
          className={`carousel-dot ${index === 0 ? "active" : ""}`}
        />
      ))}
    </DotsContainerWrapper>
  );
};

const ProductWrapper = styled(Flex)`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9) 0,
      transparent 32px
    ),
    url(${props => props.image});
  transition: transform 500ms ease-in-out;
  min-width: 100%;
  background-size: cover;
  justify-content: flex-end;
  min-height: 550px;

  ${props => css`
    @media screen and (max-width: ${props.theme.breakpoints[1]}) {
      min-height: 500px;
    }
  `}

  .no-js & {
    height: auto;
    margin-bottom: 20px;
    min-width: calc(50% - 10px);
    margin-right: 20px;

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }
`;

const ProductBoxWrapper = styled(Flex).attrs({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  p: 3
})`
  transition: opacity 300ms ease-in;
  opacity: 1;
  height: 100%;
  color: white;
  background: linear-gradient(
    135deg,
    ${props => hexToRgba(props.colors[0], "0.6")},
    ${props => hexToRgba(props.colors[1], "0.6")}
  );
  @media screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    width: 100%;
  }
  .no-js & {
    width: 100%;
  }
`;

const ProductsCarouselContainer = styled(Flex).attrs({
  px: 0
})`
  overflow: hidden;
  min-height: 1px;
  position: relative;
  width: 100%;
  top: 0em;

  @media screen and (min-width: ${props => props.theme.breakpoints[5]}) {
    ${xxl}
    margin: auto;
  }

  .no-js & {
    overflow: visible;
    flex-wrap: wrap;

    &:before {
      display: none;
    }
  }
`;

const Product = ({ product }) => {
  return (
    <ProductWrapper
      className="product-wrapper"
      image={require(`assets/${product.carouselImage || product.ogImage}`)}
    >
      <ProductBoxWrapper
        colors={[product.secondaryColor, product.mainColor]}
        className={"product-box-wrapper"}
      >
        <Flex
          flexDirection="column"
          alignItems={["center", "center", "flex-start"]}
        >
          <Link
            href={product.path}
            underline
            css={{
              "&:active": { color: "#DDD" },
              "&:active *": { color: "#DDD" }
            }}
          >
            <H1 mt={[0, 4]}>{product.title}</H1>
          </Link>
          <Paragraph
            width={[1, 1, "20em"]}
            textAlign={["center", "center", "inherit"]}
            fontSize={1}
          >
            {product.preview}
          </Paragraph>
        </Flex>
        <Flex flexDirection={["column", "column", "row"]} mb={5}>
          <PlatformButton
            defaultUrl={product.buyLinkDefault}
            winUrl={product.buyLinkWin}
            macUrl={product.buyLinkMac}
            color={product.mainColor}
            mr={[0, 0, 3]}
            css={{ width: "100%" }}
          >
            Buy {product.title}
          </PlatformButton>
          <Button
            mt={[2, 2, 0]}
            css={{ width: "100%", whiteSpace: "nowrap" }}
            href={`${product.path}/Download`}
            outline={true}
            labelText="Free trial included"
            hoverColor={product.mainColor}
          >
            Download installer
          </Button>
        </Flex>
      </ProductBoxWrapper>
    </ProductWrapper>
  );
};

const ProductsCarousel = () => {
  return (
    <ProductsCarouselContainer flexDirection="row" id="product-carousel">
      {products
        .sort((a, b) => {
          if (a.firstInCarousel) {
            return -1;
          }
          if (b.firstInCarousel) {
            return 1;
          }
          return 0;
        })
        .map((product, index) => (
          <Product key={index} product={product} />
        ))}
      <AboutUsWrapper>
        <H3 mb={2} right>
          About Us
        </H3>
        <Text textAlign="right" fontSize={1} lineHeight={"1.5"}>
          <strong>The codecs &amp; workflow experts.</strong> We improve your
          daily work on Adobe CC with our importer and exporter plugins and
          panels
        </Text>
      </AboutUsWrapper>
      <ChevronLeft display="none" id="chevron-left" />
      <ChevronRight id="chevron-right" />
      <DotsContainer products={products} amount={products.length} />
    </ProductsCarouselContainer>
  );
};

export default ProductsCarousel;
