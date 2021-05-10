import FeaturesCard, {
  FeaturesList,
  FeaturesListItem,
  FeaturesCardWrapper
} from "../../ProductPage/FeaturesCard";
import DottedList, { ListItem } from "../../ProductPage/DottedList";
import { H2 } from "../../Heading";
import { Flex, Box } from "rebass";
import Link from "../../Link";
import { ExternalLinkIcon } from "../../ExternalLinkIcon";

export const Features = props => (
  <>
    {props.overview ? (
      <>
        <Flex alignItems="center" justifyContent="center">
          <H2 centered underline={props.mainColor}>
            Main Features
          </H2>
          <Box as="a" ml={2} href={`/PlumePack/Main_Features`}>
            <ExternalLinkIcon />
          </Box>
        </Flex>
      </>
    ) : (
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={4}
      >
        {!props.generateForAescripts && (
          <Link href="/PlumePack">Go Back to PlumePack</Link>
        )}
        <H2 centered underline={props.mainColor}>
          Main Features
        </H2>
      </Flex>
    )}

    <FeaturesCardWrapper>
      <FeaturesCard
        bgImage={props.assetPrefix + "/static/images/_AC/puzzle.png"}
      >
        <FeaturesCard.Title>Feature Title</FeaturesCard.Title>
        <FeaturesCard.Body>Feature body:</FeaturesCard.Body>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem>Feature Item Description</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
      <FeaturesCard
        bgImage={props.assetPrefix + "/static/images/_AC/compression.png"}
      >
        <FeaturesCard.Title>Feature Title</FeaturesCard.Title>
        <FeaturesCard.Body>Feature body:</FeaturesCard.Body>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem>Feature Item Description</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
      <FeaturesCard
        bgImage={props.assetPrefix + "/static/images/_AC/update.png"}
      >
        <FeaturesCard.Title>Feature Title</FeaturesCard.Title>
        <FeaturesCard.Body>Feature body:</FeaturesCard.Body>
        <FeaturesList color={props.mainColor}>
          <FeaturesListItem>Feature Item Description</FeaturesListItem>
        </FeaturesList>
      </FeaturesCard>
    </FeaturesCardWrapper>
  </>
);

export const TechnicalSpecs = props => (
  <>
    {props.overview || props.generateForAescripts ? (
      <H2 centered underline={props.mainColor}>
        Technical Specifications
      </H2>
    ) : (
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={4}
      >
        <Link href="/PlumePack">Go Back to PlumePack</Link>
        <H2 centered underline={props.mainColor}>
          Technical Specifications
        </H2>
      </Flex>
    )}

    {(props.overview || props.requirements || props.generateForAescripts) && (
      <DottedList
        title="Requirements:"
        color={props.mainColor}
        withTitleUrl={props.overview ? "/PlumePack/Requirements" : ""}
      >
        <ListItem>Requirement description</ListItem>
      </DottedList>
    )}

    <Flex flexDirection={["column", "row"]}>
      {(props.overview ||
        props.codecsContainers ||
        props.generateForAescripts) && (
        <DottedList
          halfWidth={props.overview}
          title="Codecs and containers:"
          color={props.mainColor}
          withTitleUrl={props.overview ? "/PlumePack/Codecs_containers" : ""}
        >
          <ListItem>
            <b>Codecs</b> and containers.
          </ListItem>
        </DottedList>
      )}

      {(props.overview ||
        props.knownLimitations ||
        props.generateForAescripts) && (
        <DottedList
          halfWidth={props.overview}
          title="Known Limitations:"
          color={props.mainColor}
          withTitleUrl={props.overview ? "/PlumePack/Known_limitations" : ""}
        >
          <ListItem>
            <b>Known</b> Limitations.
          </ListItem>
        </DottedList>
      )}
    </Flex>
  </>
);

const Overview = props => (
  <>
    <Features
      generateForAescripts={props.generateForAescripts}
      mainColor={props.mainColor}
      assetPrefix={
        props.generateForAescripts ? "https://www.autokroma.com" : ""
      }
    />
    {props.children}
    <TechnicalSpecs
      mainColor={props.mainColor}
      generateForAescripts={props.generateForAescripts}
    />
  </>
);

export default Overview;
