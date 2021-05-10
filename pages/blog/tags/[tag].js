import blogposts from "../../../utils/data/blog-posts";
import BlogpostList from "../../../components/BlogpostList";

const Blog = ({ tag }) => {
  return <BlogpostList tag={tag} />;
};

export async function getStaticProps(ctx) {
  return {
    props: {
      tag: ctx.params.tag
    }
  };
}

export async function getStaticPaths() {
  const tagsSet = blogposts.reduce((obj, post) => {
    post.tags.forEach(tag => {
      obj.add(tag.split(" ").join("-"));
    });
    return obj;
  }, new Set());

  return {
    paths: [...tagsSet].map(tag => {
      return { params: { tag: tag } };
    }),
    fallback: true
  };
}

export default Blog;
