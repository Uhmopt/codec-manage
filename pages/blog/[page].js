import BlogpostList from "../../components/BlogpostList";
import { config } from "../../config";
import blogposts from "../../utils/data/blog-posts";
import BlogPaginator from "../../components/BlogPaginator";

const pagesNum = Math.round(blogposts.length / config.numberOfBlogpostsOnPage);

const Blog = ({ page }) => {
  return [
    <BlogpostList
      showProductTag={true}
      min={(+page - 1) * config.numberOfBlogpostsOnPage}
      max={+page * config.numberOfBlogpostsOnPage}
      hideButton
    />,
    <BlogPaginator pagesNum={pagesNum} activePage={+page} />
  ];
};

export async function getStaticProps(context) {
  return {
    props: {
      page: context.params.page
    }
  };
}

export async function getStaticPaths() {
  return {
    paths: Array(pagesNum)
      .fill()
      .map((_, index) => {
        return {
          params: {
            page: `${index + 1}`
          }
        };
      }),
    fallback: true
  };
}

export default Blog;
