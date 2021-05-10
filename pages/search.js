import styled from "styled-components";
import { Flex, Box } from "rebass";

import Container from "../components/Container";
import { SearchInput } from "../components/Input";
import Button from "../components/Button";
import { H1, H2, H3 } from "../components/Heading";
import SearchListItem from "../components/SearchItem";
import Loader from "../components/Loader";
import { config } from "../config";
import { Grid } from "../components/BlogpostList";

export const SearchBlock = () => {
  return (
    <Flex justifyContent="center" mt={4}>
      <SearchInput width={1 / 2} mr={4} />
      <Button id="search_submit" outline="black" color="black">
        Search
      </Button>
    </Flex>
  );
};

const Search = () => {
  if (!config.showSearchPage) {
    return (
      <Container>
        <H2 centered>Search is temporary unavailable.</H2>
        <H3 centered>Sorry for inconvenience.</H3>
        <Button
          href="/"
          css={{ width: "200px", margin: "40px auto 0" }}
          outline="black"
          color="black"
        >
          Go to homepage
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <H1 centered>Search Page</H1>
      <SearchBlock />
      <Loader id="search_loader" style={{ display: "none" }} />
      <SearchListItem template searchItem={{}} />
      <Container>
        <Flex
          id="search_results"
          css={{ width: "100%", flexDirection: "column" }}
        >
          <H3 id="search_results_label"></H3>
          <H3 id="no_results" style={{ display: "none" }}>
            No results found.
          </H3>
          <Grid flat id="search_results_wrapper"></Grid>
        </Flex>
      </Container>
    </Container>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      searchPage: true
    }
  };
}

export default Search;
