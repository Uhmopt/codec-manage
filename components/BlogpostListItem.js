import { Flex, Box } from "rebass";
import { format, parseISO } from "date-fns";
import styled, { css } from "styled-components";
import { H4 } from "./Heading";
import Text from "./Text";
import Link from "./Link";

export const Wrapper = styled(Flex).attrs({
  my: [2, 0, 0]
})`
  user-select: none;
  height: 100%;

  ${props =>
    props.flat &&
    css`
      flex-direction: row;

      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        height: auto;
        width: 45%;
        margin-bottom: 20px;
        margin-left: 20px;
     }
    `}

  ${props =>
    !props.flat &&
    css`
      flex-direction: column;

      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        height: auto;
        width: 400px;
        margin-bottom: 20px;
     }
    `}
  ${props =>
    props.flatOnMobile &&
    css`
      @media all and (max-width: ${props => props.theme.breakpoints[1]}) {
        flex-direction: row;
      }
    `}
`;

export const BlogpostTextWrapper = styled(Flex).attrs({
  ml: [0, 4],
  pr: [0, 4]
})`
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const BlogpostImage = styled.img`
  ${props =>
    props.flat &&
    css`
      max-width: unset;

      width: 10em;
      height: 6em;
      object-fit: cover;

      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        height: auto;
        width: 150px;
      }
    `}

  ${props =>
    !props.flat &&
    css`
      width: 100%;
      object-fit: cover;
      display: block;
      height: intrinsic;

      @media all and (-ms-high-contrast: none) {
        max-height: 400px;
      }

      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        height: auto;
        width: 400px;
      }
    `}

    ${props =>
      (props.flat || props.flatOnMobile) &&
      css`
        @media all and (max-width: ${props.theme.breakpoints[1]}) {
          width: 9em;
          height: 5em;
        }
      `}
`;

// Usage: User_Guide
const FlatBlogpostListItem = ({
  post: { path, title, preview, thumbnail },
  index
}) => (
  <Wrapper flat>
    <Link
      href={path}
      css={{
        textDecoration: "none",
        "&:active *": { color: "#666" },
        "&:hover": { opacity: 0.5 }
      }}
    >
      <Flex alignItems="center" minWidth="10em" height="100%">
        <BlogpostImage flat src={require(`assets/${thumbnail}`)} />
      </Flex>
    </Link>
    <BlogpostTextWrapper>
      <Box>
        <Link
          href={path}
          css={{ textDecoration: "none", "&:active *": { color: "#666" } }}
        >
          <H4 mb={2} mt={0} children={title} />
        </Link>
        <Box css={{ wordBreak: "break-word" }}>
          <Text
            fontSize={[0, 1]}
            lineHeight={1.5}
            dangerouslySetInnerHTML={{
              __html: `${preview} `
            }}
            display="inline"
          />
          <ReadMoreLink href={path}>Read more</ReadMoreLink>
        </Box>
      </Box>
    </BlogpostTextWrapper>
  </Wrapper>
);

const ReadMoreLink = styled(Link).attrs({
  fontSize: [0, 1]
})`
  text-decoration: none;
  color: #666;
  display: inline;
  transition: 0.25s;
  &:hover {
    color: #b4003d;
  }
`;

const RibbonTag = styled(Flex)`
${props =>
  props.tag === "AfterCodecs" &&
  css`
    background-color: ${props => props.theme.colors.primary};
  `}

${props =>
  props.tag === "BRAW Studio" &&
  css`
    background-color: ${props => props.theme.colors.blue};
  `}

${props =>
  props.tag === "PlumePack" &&
  css`
    background-color: #eac11c;
  `}

  white-space: nowrap;

  position: absolute;
  top: 40px;
  right: -90px;

  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);

  color: white;
  font-weight: bold;

  padding: 10px;
  width: 300px;

  display: flex;
  justify-content: center;

  transition: 0.25s;
`;

// max-height is a hack for IE11. don't remove

// Usage: Homepage, Products/index
const BlogpostListItem = ({
  post: { path, title, preview, thumbnail, tags },
  flatOnMobile,
  showProductTag
}) => {
  const tag = tags.filter(
    el => el === "AfterCodecs" || el === "BRAW Studio" || el === "PlumePack"
  );
  return (
    <Wrapper flatOnMobile={flatOnMobile}>
      <Link
        href={path}
        css={{
          textDecoration: "none",
          "&:active *": { color: "#666" }
        }}
      >
        <Flex
          alignItems="center"
          minHeight="1px"
          minWidth={flatOnMobile ? "10em" : "unset"}
          height={flatOnMobile && ["100%", "100%", "auto"]}
          css={css`
            position: relative;
            transition: 0.25s;
            overflow: hidden;

            &:hover {
              opacity: 0.5;

              ${RibbonTag} {
                opacity: 0;
              }
            }
          `}
        >
          {showProductTag && tag.length && (
            <RibbonTag tag={tag[0]}>{tag[0]}</RibbonTag>
          )}
          <BlogpostImage
            flatOnMobile={flatOnMobile}
            src={require(`assets/${thumbnail}`)}
          />
        </Flex>
      </Link>
      <Flex
        mt={flatOnMobile ? [0, 0, 4] : "10px"}
        flexDirection="column"
        justifyContent="space-between"
        css={{ zIndex: 100 }}
      >
        <Link
          href={path}
          css={{ textDecoration: "none", "&:active *": { color: "#666" } }}
        >
          <H4 children={title} css={{ width: "100%" }} />
        </Link>
        <Box mt={1}>
          <Box css={{ wordBreak: "break-word" }}>
            <Text
              fontSize={[0, 1]}
              lineHeight={1.5}
              dangerouslySetInnerHTML={{
                __html: `${preview} `
              }}
              display="inline"
            />
            <ReadMoreLink href={path}>Read more</ReadMoreLink>
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export { BlogpostListItem, FlatBlogpostListItem };

export default BlogpostListItem;
