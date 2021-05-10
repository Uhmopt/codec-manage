import { Box, Flex } from "rebass";
import Container from "./Container";
import { H2, H4 } from "./Heading";
import Image from "./Image";
import Text from "./Text";

const offers = [
  {
    title: "First Offer",
    image: "static/images/offer-1.png",
    dayPrice: "$99",
    oldDayPrice: "$199",
    subtitle:
      "Check out the latest version of the hottest plug-ins. Trial version included!"
  },
  {
    title: "Second Offer",
    image: "static/images/offer-2.png",
    dayPrice: "$99",
    oldDayPrice: "$199",
    subtitle:
      "Check out the latest version of the hottest plug-ins. Trial version included!"
  },
  {
    title: "Third Offer",
    image: "static/images/offer-3.png",
    dayPrice: "$99",
    oldDayPrice: "$199",
    subtitle:
      "Check out the latest version of the hottest plug-ins. Trial version included!"
  }
];

const Offer = props => (
  <Flex
    flexDirection="column"
    alignItems="center"
    p={4}
    css={{ border: "1px solid #E5E5E5" }}
    {...props}
  >
    <Image
      src={props.offer.image}
      css={{ maxWidth: "8em", objectFit: "cover" }}
      mb={4}
    />
    <H4>{props.offer.title}</H4>
    <Text fontSize={".9em"}>{props.offer.subtitle}</Text>
  </Flex>
);

const SpecialOffers = props => (
  <Container>
    <Flex flexDirection="column" width="100%" alignItems="center">
      <H2 alignSelf="center" uppercase underline={"#B80D4D"}>
        Special Offers
      </H2>

      <Flex mt={4} width="100%" justifyContent="space-between">
        {offers.map((offer, index) => (
          <Offer key={index} maxWidth="30%" offer={offer} />
        ))}
      </Flex>
    </Flex>
  </Container>
);

export default SpecialOffers;
