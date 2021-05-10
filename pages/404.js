import { SearchBlock } from "./search";
import Loader from "../components/Loader";
import SearchListItem from "../components/SearchItem";
import { Flex, Box } from "rebass";
import { H1, H2, H3 } from "../components/Heading";
import Container from "../components/Container";
import { Grid } from "../components/BlogpostList";

export default function Page() {
  return (
    <Container>
      <H1 centered mt={6}>
        404 - Page Not Found
      </H1>
      <H3 centered>Maybe you meant?</H3>
      <Flex
        id="suggestions_block"
        flexDirection="column"
        alignItems="center"
      ></Flex>
      <SearchBlock />
      <Loader id="search_loader" style={{ display: "none" }} />
      <SearchListItem template searchItem={{}} />
      <Container>
        <Flex width="100%" flexDirection="column" id="search_results">
          <H3 id="search_results_label"></H3>
          <Flex css={{ width: "100%", flexDirection: "column" }}>
            <H3 id="no_results" style={{ display: "none" }}>
              No results found.
            </H3>
            <Grid flat id="search_results_wrapper"></Grid>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      errorPage: true
    }
  };
}
