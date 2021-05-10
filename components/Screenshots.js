import Image from "./Image";
import { Flex } from "rebass";
import styled from "styled-components";
import Button from "./Button";

const ImageWrapper = styled(Flex).attrs({
  mt: 4,
  mx: "auto",
  as: "a"
})`
  cursor: pointer;
  border: 2px solid transparent;
  align-items: flex-start;
  transition: 0.25s;

  opacity: 1;

  &:hover {
    opacity: 0.5;
  }
`;

const ScreenshotsWrapper = styled(Flex).attrs({
  flexDirection: "column",
  alignItems: "center",
  mb: 4
})`
  color: ${props => props.theme.colors.primary};
`;

const Screenshots = ({ images, meta }) => {
  // Internet Explorer 6-11
  const isIE =
    /*@cc_on!@*/ typeof window !== "undefined"
      ? false || !!document.documentMode
      : false;
  return (
    <ScreenshotsWrapper width="100%">
      <ImageWrapper
        color={meta.mainColor}
        width="100%"
        href={images[0].image}
        data-lightbox="product-screenshots"
        data-title={images[0].title}
      >
        <Image
          maxHeight="800px"
          width="100%"
          src={images[0].image}
          alt={images[0].title}
          title={images[0].title}
          withBorderHover
        />
      </ImageWrapper>
      {isIE ? null : (
        <Flex justifyContent="space-between">
          {images.map((el, index) => (
            <ImageWrapper
              key={index}
              width={1 / 4}
              css={{ display: index > 2 ? "none" : "flex" }}
              href={el.image}
              data-lightbox="product-screenshots"
              data-title={el.title}
              color={meta.mainColor}
            >
              <Image
                src={el.image}
                alt={el.title}
                title={el.title}
                withBorderHover
              />
            </ImageWrapper>
          ))}
        </Flex>
      )}
      <Button
        mt={4}
        color={meta.mainColor}
        outline="inherit"
        id="lightbox-opener"
      >
        See more screenshots of the plugin
      </Button>
    </ScreenshotsWrapper>
  );
};

export default Screenshots;
