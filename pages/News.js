import Container from "../components/Container";
import { H2 } from "../components/Heading";
import NewsFeed from "../components/NewsFeed";
import Head from "../components/Head";

const NewsPage = props => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Container {...props}>
        <H2 centered>News Page</H2>

        <NewsFeed longList></NewsFeed>
      </Container>
    </>
  );
};

export default NewsPage;
