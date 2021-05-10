import BlogpostList from "../../components/BlogpostList";
import { config } from "../../config";
import BlogPaginator from "../../components/BlogPaginator";
import blogposts from "../../utils/data/blog-posts";

const pagesNum = Math.round(blogposts.length / config.numberOfBlogpostsOnPage);

const Blog = () => {
  return [
    <BlogpostList
      showProductTag={true}
      min={0}
      max={config.numberOfBlogpostsOnPage}
      hideButton
    />,
    <BlogPaginator pagesNum={pagesNum} activePage={1} />
  ];
};

export default Blog;
