import { Flex, Box } from "rebass";
import { H4 } from "./Heading";
import Link from "./Link";
import Text from "./Text";
import {
  BlogpostImage,
  BlogpostTextWrapper,
  Wrapper
} from "./BlogpostListItem";

const SearchListItem = ({ searchItem: { link }, template }) => (
  <Link
    href={template ? "#" : link}
    id={template && "template_search_item"}
    css={template && { display: "none" }}
    minWidth={0}
  >
    <Wrapper flat>
      <Flex alignItems="center" minWidth="10em">
        <BlogpostImage flat id="search_item_image" />
      </Flex>
      <BlogpostTextWrapper>
        <H4 mb={2} mt={0} id="search_item_title" />
        <Text fontSize={[0, 1]} id="search_item_snippet" />
        <Text fontSize={[0, 1]} mt={1} id="search_item_formatted_url" />
      </BlogpostTextWrapper>
    </Wrapper>
  </Link>
);

export default SearchListItem;
