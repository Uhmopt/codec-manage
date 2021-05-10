import { Flex, Box } from "rebass";
import styled from "styled-components";
import Link from "./Link";

const PageLink = styled(Link).attrs(({ page }) => ({
  mr: 2,
  href: `/blog/${page}`,
  children: page,
  prefetch: false
}))`
  background-color: ${props =>
    props.active ? props.theme.colors.primary : "transparent"};
  color: ${props => (props.active ? "white" : "black")};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  line-height: 20px;
  padding: 8px;
  text-align: center;
  text-decoration: none !important;

  pointer-events: ${props => (props.active ? "none" : "all")};

  &:hover {
    background-color: ${props =>
      props.active ? props.theme.colors.primary : "#EEE"};
  }
`;

const BlogPaginator = props => {
  return (
    <Flex width={1} justifyContent="center" mt={4}>
      {Array(props.pagesNum)
        .fill()
        .map((_, index) => {
          return (
            <PageLink
              page={index + 1}
              active={index + 1 === props.activePage}
            />
          );
        })}
    </Flex>
  );
};

export default BlogPaginator;
