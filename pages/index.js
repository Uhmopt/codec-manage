import React from "react";
import ProductsCarousel from "../components/ProductsCarousel";
import SpecialOffers from "../components/SpecialOffers";
import BlogpostList from "../components/BlogpostList";
import NewsFeed from "../components/NewsFeed";
import { config } from "../config";
import { Flex } from "rebass";
import Head from "../components/Head";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Head title={config.homepageTitle}></Head>
        <Flex flexDirection="column" alignItems={["center", "flex-start"]}>
          <ProductsCarousel />

          {/* <SpecialOffers /> */}

          {config.showNewsFeedOnMainPage && <NewsFeed />}
          <BlogpostList
            max={config.numberOfBlogpostToShowOnMainPage}
            showProductTag={true}
            homePage={true}
          />
        </Flex>
      </>
    );
  }
}

export default Homepage;
