import { Flex } from "rebass";
import styled, { css } from "styled-components";
import Container from "../Container";
import _Image from "../Image";
import Link from "../Link";
import { H1, H4 } from "../Heading";
import { format, parseISO } from "date-fns";
import Text from "../Text";

const ImageMask = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  filter: blur(5px);
  transform: scale(1.1);

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    max-width: 100%;
    object-fit: cover;
  }
`;

const BlogPageLanderWrapper = styled(Flex).attrs({
  py: 4,
  mb: [2, 2, 2, 0],
  width: [1, 1, 1, 2 / 3]
})`
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
  max-height: 500px;

  background-color: white;
  box-shadow: ${props => props.shadow || "rgba(0, 0, 0, 0.1) 0px 3px 8px 0px"};
`;

const Tag = styled(Link).attrs(({ tag }) => ({
  mr: [1, 2],
  px: [1, 3],
  href: `/blog/tags/${tag.split(" ").join("-")}`,
  children: tag,
  prefetch: false,
  fontSize: [1, 2]
}))`
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    background-color: white;
    color: ${props => props.theme.colors.primary};
  }

  &:active {
    border: 1px solid #940031;
    color: #940031;
  }

  font-weight: 600;
  cursor: pointer;
  color: white;
  border-radius: 20px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const TagsBlock = ({ tags }) => (
  <Flex mb={2} justifyContent="flex-end">
    {tags.map((tag, index) => (
      <Tag key={index} tag={tag} />
    ))}
  </Flex>
);

const TocWrapper = styled(Flex).attrs({
  pb: 3,
  pt: 4,
  px: 4
})`
  flex-direction: column;

  ol {
    margin-top: 8px;
  }

  ol > div {
    margin-bottom: 8px;
  }

  #table-of-contents a {
    text-align: left;
    line-break: auto;
  }

  p {
    line-height: 1.3;
    width: 100%;
  }

  height: fit-content;
  background-color: white;
  box-shadow: ${props => props.shadow || "rgba(0, 0, 0, 0.1) 0px 3px 8px 0px"};
`;

const TableOfContents = props => {
  return (
    <TocWrapper width={[1, 1, 1, 1 / 3]} mt={2}>
      <H4 mt={0}>Table of Contents</H4>
      {props.children}
    </TocWrapper>
  );
};
const Gradient = styled(Flex)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 80%;
  background: linear-gradient(to bottom, transparent, #fff 100%);
`;

const BlogPageLander = styled(props => {
  const { meta, TOC } = props;
  const wasUpdated = meta.lastUpdated && meta.date !== meta.lastUpdated;
  return (
    <Flex {...props}>
      <ImageMask>
        <Image
          css={{
            height: "auto",
            width: "100%"
          }}
          src={require(`assets/${meta.thumbnail}`)}
        />
        <Gradient />
      </ImageMask>
      <Container
        py={4}
        css={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <BlogPageLanderWrapper>
          <TagsBlock tags={meta.tags} />
          <H1
            centered
            my={1}
            px={2}
            children={meta.title}
            css={{ width: "100%", lineHeight: 1.2 }}
          />
          <Text css={{ color: "grey" }} fontSize={[0]}>
            {format(
              parseISO(wasUpdated ? meta.lastUpdated : meta.date),
              "MMMM do, yyyy"
            )}
          </Text>
          {wasUpdated && (
            <Text css={{ color: "grey" }} fontSize={[0]}>
              (Originally published on{" "}
              {format(parseISO(meta.date), "MMMM do, yyyy")})
            </Text>
          )}
          <Text
            css={{
              width: "66%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center"
            }}
            mt={3}
            dangerouslySetInnerHTML={{
              __html: meta.preview
            }}
          />
        </BlogPageLanderWrapper>
        {TOC &&
          TOC.props.children.props.children &&
          TOC.props.children.props.children.length > 1 && (
            <TableOfContents>{TOC}</TableOfContents>
          )}
      </Container>
    </Flex>
  );
}).attrs({
  pb: [0, 0, 0, 4]
})`
  position: relative;
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
`;

export default BlogPageLander;
