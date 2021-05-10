import { Flex, Box } from "rebass";
import styled, { css } from "styled-components";

import Button from "./Button";
import Container from "./Container";
import BlogpostListItem, { FlatBlogpostListItem } from "./BlogpostListItem";
import blogposts from "../utils/data/blog-posts";
import { H2 } from "./Heading";
import { IText as Text } from "./Text";

const isDevMode = process.env.NODE_ENV !== "production";

export const Grid = styled(Box).attrs({
  mt: 4
})`
  display: grid;
  grid-gap: 4em 3em;

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    display: -ms-flexbox;
    -ms-flex-wrap: wrap;
    justify-content: space-between;
 }

  ${props =>
    props.flat &&
    css`
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: ${props.theme.breakpoints[2]}) {
        display: flex;
        flex-wrap: wrap;
      }
    `}

  ${props =>
    !props.flat &&
    css`
      -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: repeat(6, 1fr);

      @media screen and (max-width: ${props.theme.breakpoints[3]}) {
        grid-gap: 2em;
      }

      @media screen and (max-width: ${props.theme.breakpoints[1]}) {
        -ms-grid-columns: 1fr 1fr 1fr 1fr;
        grid-template-columns: repeat(4, 1fr);

        > *:nth-child(3n + 2) {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        > *:nth-child(3n + 3) {
          grid-column-start: 3;
          grid-column-end: 5;
        }

        > *:nth-child(3n + 1) {
          grid-column-start: 1;
          grid-column-end: 5;
        }
      }

      @media screen and (max-width: ${props.theme.breakpoints[0]}) {
        display: flex;
        flex-wrap: wrap;
      }

      @media screen and (min-width: ${props.theme.breakpoints[1]}) {
        > *:nth-child(5n + 3) {
          grid-column-start: 1;
          grid-column-end: 3;
        }

        > *:nth-child(5n + 4) {
          grid-column-start: 3;
          grid-column-end: 5;
        }

        > *:nth-child(5n + 5) {
          grid-column-start: 5;
          grid-column-end: 7;
        }

        > *:nth-child(5n + 1) {
          grid-column-start: 1;
          grid-column-end: 4;
        }

        > *:nth-child(5n + 2) {
          grid-column-start: 4;
          grid-column-end: 7;
        }
      }

      ${props.productList &&
        css`
          @media screen and (max-width: ${props.theme.breakpoints[1]}) {
            display: flex;
            flex-wrap: wrap;
          }
        `}
    `}
`;

// Usage: Homepage, User_Guide (flat)
const BlogpostList = ({
  tag,
  max,
  flat,
  showProductTag,
  min,
  hideButton,
  homePage
}) => {
  const BlogItemComponent = flat ? FlatBlogpostListItem : BlogpostListItem;
  return (
    <Container>
      <Flex css={{ width: "100%", flexDirection: "column" }}>
        {!flat && (
          <H2 underline={"#B80D4D"}>
            {tag
              ? `Posts tagged "${tag.split("-").join(" ")}"`
              : "Autokroma Blog"}
          </H2>
        )}
        <Grid flat={flat}>
          {blogposts
            .filter(meta => (isDevMode ? true : !(meta.hidden || meta.draft)))
            .filter(item =>
              tag && item.tags
                ? item.tags.includes(tag.split("-").join(" "))
                : true
            )
            .slice(min ? min : 0, max || blogposts.length)
            .map((item, index) => (
              <BlogItemComponent
                showProductTag={showProductTag}
                post={item}
                key={index}
              />
            ))}
        </Grid>
        {max && !hideButton ? (
          <Flex mt={4} css={{ justifyContent: "center" }}>
            <Button href={homePage ? "/blog/2" : "/blog"} color="#B80D4D">
              <Text fontSize={[1, 2]}>{`See all blog posts`}</Text>
            </Button>
          </Flex>
        ) : null}
      </Flex>
    </Container>
  );
};

// Usage: Products/index
const ProductBlogpostList = ({
  tag,
  hideButton,
  maxNumber = 2,
  buttonText = "See all blog posts",
  btnColor = "#B80D4D",
  hideArticleWithTitle = ""
}) => {
  const tags = Array.isArray(tag) ? tag : [tag];
  const hrefTag = (tags[0] || "").split(" ").join("-");
  return (
    <Container mb={[4, 5]}>
      <Grid productList>
        {blogposts
          .filter(item => {
            if (
              !isDevMode &&
              (item.hidden || item.draft || item.title === hideArticleWithTitle)
            ) {
              return false;
            } else {
              return tags.length && item.tags
                ? tags.find(tag => item.tags.includes(tag.split("-").join(" ")))
                : true;
            }
          })
          .slice(0, maxNumber)
          .map((item, index) => (
            <BlogpostListItem post={item} key={index} flatOnMobile={true} />
          ))}
      </Grid>
      {!hideButton && (
        <Flex justifyContent="center" mt={4} css={{ justifyContent: "center" }}>
          <Button
            href={hrefTag ? `/blog/tags/${hrefTag}` : "/blog"}
            color={btnColor}
          >
            {buttonText}
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export { ProductBlogpostList };

export default BlogpostList;
