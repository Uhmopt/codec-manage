import { Flex, Box } from "rebass";
import styled, { css } from "styled-components";
import { H2 } from "./Heading";
import { DottedList } from "./ProductPage";
import Container from "./Container";
import Button from "./Button";
import Text from "./Text";
import BlogpostList from "./BlogpostList";

const NewsWrapper = styled(Flex)`
  min-height: 300px;
  max-height: 50vh;
  overflow: hidden;
  flex-direction: column;
`;

const NewsFeed = props => {
  return (
    <Container {...props}>
      <H2 mt={0}>Our News Feed</H2>

      <NewsWrapper>
        <DottedList
          title="September 27 2019"
          listItems={[
            "Windows: new “AfterCodecs Desktop” standalone popup next to the plugins (in MediaCore/Autokroma AfterCodecs/) so you can access Global Settings & License more easily! Shortcut will be created on your Desktop & Programs Menu",
            "Premiere Pro / Media Encoder: “Quick Sub Resolutions” new buttons at the bottom of Video Settings so you can quickly set Width and Height to Full 1/1, Half 1/2, Quarter 1/4 or Eighth 1/8",
            "Now AfterCodecs will warn you with a popup when there’s a new version available"
          ]}
        />

        <DottedList
          title="September 27 2019"
          listItems={[
            "Windows: new “AfterCodecs Desktop” standalone popup next to the plugins (in MediaCore/Autokroma AfterCodecs/) so you can access Global Settings & License more easily! Shortcut will be created on your Desktop & Programs Menu",
            "Premiere Pro / Media Encoder: “Quick Sub Resolutions” new buttons at the bottom of Video Settings so you can quickly set Width and Height to Full 1/1, Half 1/2, Quarter 1/4 or Eighth 1/8",
            "Now AfterCodecs will warn you with a popup when there’s a new version available"
          ]}
        />
      </NewsWrapper>
      {!props.longList && (
        <Flex justifyContent="center" mt={4}>
          <Button href={"/News"} color="#B80D4D">
            <Text fontSize={[1, 2]}>{`Read more`}</Text>
          </Button>
        </Flex>
      )}

      {props.longList && <BlogpostList />}
    </Container>
  );
};

export default NewsFeed;
