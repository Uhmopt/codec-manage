import { Flex } from "rebass";
import styled from "styled-components";
import Container from "../Container";
import { H1 } from "../Heading";
import Text from "../Text";
import Icon from "./Icon";
import Button, { PlatformButton } from "../Button";
import VideoEmbed from "../EmbedVideo";
import _Image from "../Image";
import { config } from "../../config";
import hexToRgba from "hex-to-rgba"; // TODO: Replace that if we gonna use React code

const ProductIcons = ({ iconsList }) => (
  <Flex mt={4} mx={["auto", "auto", "auto", 0]}>
    {iconsList.map((iconName, index) => (
      <Icon mr={3} iconName={iconName} key={index} />
    ))}
  </Flex>
);

const ImageMask = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Image = styled.div`
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      90deg,
      ${props => hexToRgba(props.colors[0], "0.9")},
      ${props => hexToRgba(props.colors[1], "0.9")}
    ),
    url(${props => props.src});
`;

const ProductBlockWrapper = styled(Flex).attrs({
  flexDirection: "column",
  justifyContent: "center"
})``;

const ProductLander = styled(props => {
  const { meta, landerImage, path } = props;
  let downloadButtonText = "Download installer";
  if (meta.title === "AfterCodecs") {
    downloadButtonText = `Download installer v${config.afterCodecsChangelogVersion}`;
  } else if (meta.title === "BRAW Studio") {
    downloadButtonText = `Download installer v${config.brawStudioChangelogVersion}`;
  } else if (meta.title === "PlumePack") {
    downloadButtonText = `Download installer v${config.plumePackChangelogVersion}`;
  }

  return (
    <Flex {...props}>
      <ImageMask>
        <Image
          src={landerImage.src}
          colors={[meta.secondaryColor, meta.mainColor]}
        />
      </ImageMask>
      <Container flexDirection="row" flexWrap="wrap" py={4}>
        <ProductBlockWrapper
          alignItems={["center", "center", "center", "flex-start"]}
          width={[1, 1, 1, "45%", "45%", "45%", 1 / 2]}
        >
          <H1
            children={meta.title}
            css={{ alignSelf: "unset" }}
            mb={[2, 2, 4]}
            mt={0}
          />
          <Text
            color="#FFF"
            mr={[0, 4]}
            children={meta.preview}
            textAlign={["center", "center", "center", "inherit"]}
            width={[1 / 2, 1 / 2, "auto"]}
          />
          <ProductIcons iconsList={meta.supportedPlatforms || []} />
          <ProductIcons iconsList={meta.pluginCapabilities || []} />
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            mt={4}
            width={[1, 1, 1, "auto"]}
          >
            <PlatformButton
              macUrl={meta.buyLinkMac}
              winUrl={meta.buyLinkWin}
              defaultUrl={meta.buyLinkDefault}
              color="#000"
              mr={[0, 0, 0, 3]}
              css={{ width: "100%" }}
              children={`Buy ${meta.title}`}
            />
            <Button
              mt={[2, 2, 2, 0]}
              css={{ width: "100%", whiteSpace: "nowrap" }}
              href={`${path}/Download`}
              labelText="Free trial included"
              hoverColor={meta.mainColor}
              {...(meta.title !== "PlumePack"
                ? { outline: true }
                : { color: "white", textColor: "black" })}
            >
              {downloadButtonText}
            </Button>
          </Flex>
        </ProductBlockWrapper>
        {meta.playlistId || meta.videoSrc ? (
          <ProductBlockWrapper
            mt={[5, 5, 5, 0]}
            width={[1, 1, 1, "55%", "55%", "55%", 1 / 2]}
          >
            <VideoEmbed
              playlistId={meta.playlistId}
              videoSrc={meta.videoSrc}
            ></VideoEmbed>
          </ProductBlockWrapper>
        ) : null}
      </Container>
    </Flex>
  );
})`
  position: relative;
  width: 100%;

  min-height: 500px;

  flex-direction: row;
  color: white;
  flex-wrap: wrap;
`;

export default ProductLander;
