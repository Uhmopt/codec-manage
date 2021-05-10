import { Flex, Box } from "rebass";
import styled, { css } from "styled-components";
import Container from "../../components/Container";
import { H2, H3, H4 } from "../../components/Heading";
import _Image from "../../components/Image";
import Text from "../../components/Text";
import { FeaturesListItem } from "../../components/ProductPage/FeaturesCard";
import Button from "../../components/Button";
import { Grid } from "../../components/BlogpostList";
import { useState } from "react";
import { Label, Select } from "@rebass/forms";
import Input, { Checkbox } from "../../components/Input";
import Link from "../../components/Link";

export const meta = {
  storeBgImage: require("assets/images/_AC/AC_product_background.jpg?trace"),
  mainColor: "#B80D4D",
  productName: "AfterCodecs",
  productDescription:
    "AfterCodecs plugins for Adobe CC, giving you the best and missing codecs for faster exports!",
  bundleTitle: "Buy AfterCodecs Full Adobe Suite",
  bundleImage: require("assets/images/_AC/AfterCodecsLogo.png"),
  bundleSubtext: [
    "Buy this bundle to save 25% of all 3 items!",
    "Includes all plugins below:"
  ],
  bundlePrice: "267",
  bundleDiscount: "25",
  bundleHosts: ["AE", "PP", "ME"],
  plugins: [
    {
      name: "AfterCodecs for After Effects",
      price: "89",
      image: require("assets/images/_AC/AfterCodecsLogo.png"),
      hosts: ["AE"],
      url: "https://autokroma.com/AfterCodecs/After_Effects"
    },
    {
      name: "AfterCodecs for Premiere Pro",
      price: "89",
      image: require("assets/images/_AC/AfterCodecsLogo.png"),
      hosts: ["PP"],
      url: "https://autokroma.com/AfterCodecs/Premiere_Pro"
    },
    {
      name: "AfterCodecs for Media Encoder",
      price: "89",
      image: require("assets/images/_AC/AfterCodecsLogo.png"),
      hosts: ["ME"],
      url: "https://autokroma.com/AfterCodecs/Media_Encoder"
    }
  ],
  trials: [
    {
      name: "AfterCodecs 500 frames free trial for Adobe CC",
      image: require("assets/images/_AC/AfterCodecsLogo.png"),
      hosts: ["AE", "PP", "ME"],
      trial: true
    }
  ]
};

const Wrapper = styled(Flex).attrs({
  flexDirection: "column"
})`
  position: relative;
`;

const ImageMask = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  top: -4.5em;

  @media screen and (min-width: ${props => props.theme.breakpoints[5]}) {
    top: -4.5em;
  }
`;

const Image = styled.img`
  position: absolute;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    max-width: 100%;
    object-fit: cover;
  }
`;

const BundleCard = styled(Flex).attrs({
  p: 3
})`
  background-color: #fff;
  color: black;

  border: 1px solid #e5e5e5;
`;

const SeparatePluginCard = styled(Flex).attrs({
  justifyContent: "flex-start",
  px: 2,
  py: 3,
  width: 1,
  my: [2, 2, 0]
})`
  background-color: #fff;
  color: black;

  border: 1px solid #e5e5e5;
`;

const CheckoutWrapper = styled(Flex).attrs({
  flexDirection: "column",
  justifyContent: "space-between",
  ml: [0, 0, 4],
  mt: [4, 4, 0]
})`
  min-width: 300px;
  background-color: #fff;
  color: black;
  height: fit-content;

  border: 1px solid #e5e5e5;
`;

const getHostImage = host => {
  switch (host.toLowerCase()) {
    case "ae":
      return require("assets/images/AdobeAE_color.png");
    case "me":
      return require("assets/images/AdobeAME_color.png");
    case "pp":
      return require("assets/images/AdobePPro_color.png");
  }
};
const HostsWrapper = styled(props => {
  return (
    <Flex {...props}>
      {props.hosts.map((host, index) => {
        return (
          <_Image
            mr={index !== props.hosts.length - 1 ? 2 : 0}
            src={getHostImage(host)}
            key={index}
            width={props.small ? "30px" : "40px"}
            css={{ objectFit: "contain" }}
          />
        );
      })}
    </Flex>
  );
}).attrs({
  my: 1
})``;

const PluginImageBox = props => {
  return (
    <Box width={props.width} css={{ position: "relative", margin: "0" }}>
      <_Image src={props.image} />
    </Box>
  );
};

const AmountSelector = props => {
  return (
    <>
      <Label htmlFor={props.id}>Amount</Label>
      <Select
        id={props.id}
        name={props.id}
        defaultValue="1"
        onChange={ev => props.onChangeCallback(ev.target.value)}
      >
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </Select>
    </>
  );
};

const AddButton = props => {
  const [addedAmount, setAddedAmount] = useState(0);

  return addedAmount === 0 ? (
    <Button
      color={props.color}
      width={props.width}
      onClick={() => {
        if (props.callback) {
          props.callback();
        }

        setAddedAmount(1);
      }}
    >
      {props.btnText}
    </Button>
  ) : (
    <AmountSelector id={props.dropdownId} onChangeCallback={setAddedAmount} />
  );
};

const FeatureListLink = styled.a`
  color: black;
`;

const CheckoutButton = styled(Button).attrs({
  justifySelf: "flex-end",
  color: "#187bcd",
  width: 1,
  my: 1,
  small: true
})``;

const AfterCodecsStore = styled(props => {
  const [showCheckout, setShowCheckout] = useState(true);
  const [bundleSelected, setBundleSelected] = useState(false);
  return (
    <Wrapper pb={4}>
      <Flex {...props}>
        <ImageMask>
          <Image height="550px" width="auto" src={meta.storeBgImage.src} />
        </ImageMask>
        <Container>
          <H3
            mt={4}
            width={[1, 1, 1 / 2]}
            mb={0}
            children={`Buy ${meta.productName}. ${meta.productDescription}`}
          />
          <Flex mt={4} flexDirection={["column", "column", "row"]} width={1}>
            <Box width={1}>
              <BundleCard flex="1">
                <Flex
                  alignItems="center"
                  flexDirection={["column", "column", "row"]}
                  width={1}
                >
                  <Flex flexDirection="column" alignItems="center">
                    <PluginImageBox
                      image={meta.bundleImage}
                      width={["100px", "100px", "auto"]}
                    />
                    <HostsWrapper hosts={meta.bundleHosts} />
                  </Flex>
                  <Box ml={[0, 0, 4]}>
                    <H3 mb={0}>
                      {meta.bundleTitle}{" "}
                      {meta.bundleDiscount && (
                        <Text
                          css={{
                            display: "inline",
                            color: "green",
                            fontWeight: "500"
                          }}
                        >
                          {" - "}
                          {meta.bundleDiscount}% OFF
                        </Text>
                      )}
                    </H3>
                    <Box my={2}>
                      {meta.bundleSubtext.map((text, index) => (
                        <Text color="rgba(0,0,0,.4)" key={index}>
                          {text}
                        </Text>
                      ))}
                    </Box>

                    <Box mb={2}>
                      {meta.plugins.map((plugin, index) => (
                        <FeaturesListItem key={index} color={meta.mainColor}>
                          <FeatureListLink href={plugin.url} target="_blank">
                            {plugin.name}
                          </FeatureListLink>
                        </FeaturesListItem>
                      ))}
                    </Box>

                    <H4>
                      Total price:{" $"}
                      {meta.bundleDiscount
                        ? (meta.bundlePrice * (100 - meta.bundleDiscount)) / 100
                        : meta.bundlePrice}{" "}
                      {meta.bundleDiscount && (
                        <Text
                          css={{
                            "text-decoration": "line-through",
                            display: "inline",
                            color: "rgba(0,0,0, .3)",
                            fontSize: ".7em"
                          }}
                        >
                          (${meta.bundlePrice})
                        </Text>
                      )}
                    </H4>

                    <Flex
                      flexDirection={["column", "column", "row"]}
                      width={1}
                      mt={2}
                    >
                      <AddButton
                        width={[1, 1, 1 / 2]}
                        color={meta.mainColor}
                        dropdownId="bundle_selector"
                        btnText="Add to cart"
                      />
                      <Button
                        id="button-click"
                        ml={[0, 0, 4]}
                        mt={[2, 2, 0]}
                        color="#eac11c"
                        width={[1, 1, 1 / 2]}
                      >
                        <Text textAlign="center">Try for Free</Text>
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </BundleCard>
              {!bundleSelected && (
                <>
                  <H3 color="#000" mt={5}>
                    Buy plugins separately
                  </H3>
                  <Grid>
                    {meta.plugins.map((plugin, index) => {
                      return (
                        <SeparatePluginCard
                          key={index}
                          id={plugin.name.split(" ").join("_")}
                        >
                          <Flex
                            flexDirection="column"
                            alignItems="center"
                            mx={2}
                            justifyContent="center"
                          >
                            <PluginImageBox
                              width="100px"
                              image={plugin.image}
                              hosts={plugin.hosts}
                            />
                            <HostsWrapper hosts={plugin.hosts} small />
                          </Flex>
                          <Flex
                            flexDirection="column"
                            justifyContent="space-between"
                            mx={2}
                          >
                            <Link href={plugin.url} target="_blank">
                              <Text
                                mt={0}
                                css={{ textAlign: "left", fontWeight: "700" }}
                              >
                                {plugin.name}{" "}
                                <span
                                  css={{
                                    color: "rgba(0,0,0, .7)",
                                    fontWeight: "500"
                                  }}
                                >
                                  ({plugin.price},00$)
                                </span>
                              </Text>
                            </Link>

                            <Button
                              color={meta.mainColor}
                              small
                              width={[1, 1, "200px"]}
                              mt={2}
                            >
                              Add to cart
                            </Button>
                          </Flex>
                        </SeparatePluginCard>
                      );
                    })}
                  </Grid>
                </>
              )}
            </Box>
            {showCheckout && (
              <CheckoutWrapper p={3}>
                <Box>
                  <H4>Choose your payment method</H4>

                  <Text css={{ color: "rgba(0,0,0,.4)" }}>Total: $200.25</Text>

                  <Flex mt={2} justifyContent="space-between">
                    <Text>AfterCodecs Full Adobe Suite</Text>
                    <Text css={{ color: "rgba(0,0,0,.4)" }}>x1</Text>
                  </Flex>
                </Box>

                <Input placeholder={"Email"} name="email" required />
                <Checkbox
                  small
                  label={"Subscribe to our newsletter"}
                  id="subscribe_newsletter"
                  name="subscribe_newsletter"
                />

                <Flex flexDirection="column" alignItems="center" mt={4}>
                  <CheckoutButton>Credit/debit card</CheckoutButton>
                  <CheckoutButton>PayPal</CheckoutButton>
                  <CheckoutButton>Amazon</CheckoutButton>
                  <CheckoutButton>Bank Transfer</CheckoutButton>
                </Flex>
              </CheckoutWrapper>
            )}
          </Flex>
        </Container>
      </Flex>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var a = document.querySelector("#button-click");
            a.addEventListener('click', function() {
              alert("button clicked");
            });
          `
        }}
      ></script>
    </Wrapper>
  );
})`
  position: relative;
  width: 100%;

  min-height: 550px;

  flex-direction: row;
  color: white;
  flex-wrap: wrap;
`;

export default AfterCodecsStore;
