import Container from "../Container";
import Head from "../Head";
import blogposts from "../../utils/data/blog-posts";
import { config } from "../../config";
import BlogPageLander from "./BlogPageLander";
import { ProductBlogpostList } from "../BlogpostList";
import { H2 } from "../Heading";
import { format, parseISO } from "date-fns";

const getTitlePostfix = tags => {
  let postfix = config.blogTitlePostfixes.defaultBlogPostfix;
  tags.find(tag => {
    if (config.blogTitlePostfixes[tag]) {
      postfix = config.blogTitlePostfixes[tag];
      return true;
    }
  });
  return postfix;
};

const isTOC = component => {
  return component.props.id === "table-of-contents";
};

const BlogPage = ({ meta, children }) => {
  let TOC;
  if (isTOC(children[0])) {
    TOC = children[0];
    children = children.slice(1);
  } else {
    TOC = null;
  }
  let tags = [];
  if (!meta.tags || meta.tags.length === 0) {
    tags = [];
  } else if (meta.tags.length > 1) {
    tags = [meta.tags[0], meta.tags[1]];
  } else {
    tags = [meta.tags[0]];
  }
  const url = blogposts.find(post => post.title === meta.title).path + "/";
  return (
    <>
      <Head
        title={`${meta.title} | ${getTitlePostfix(tags)}`}
        description={meta.preview}
        image={require(`assets/${meta.thumbnail}`)}
        lastUpdated={meta.lastUpdated || meta.date}
        ogUrl={url}
        bigTwitterCard
        jsonld={{
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          headline: meta.title,
          image: require(`assets/${meta.thumbnail}`),
          url: url,
          keywords: meta.tags,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.autokroma.com/blog",
            dateModified: format(
              parseISO(meta.lastUpdated ? meta.lastUpdated : meta.date),
              "MMMM do, yyyy"
            ),
            datePublished: format(parseISO(meta.date), "MMMM do, yyyy"),
            description: meta.summary
          }
        }}
      >
        {/* Prevent indexing on Blog posts in Draft */}
        {meta.draft && <meta name="robots" content="noindex" />}
      </Head>
      <BlogPageLander meta={meta} TOC={TOC} />
      <Container
        blogPage
        mt={[0, 0, 0, -4]}
        mb={meta.hideReadMoreButton ? 0 : 4}
        textAlign="justify"
      >
        {children}
      </Container>
      {!meta.hideReadMoreButton && tags.length && (
        <ProductBlogpostList
          tag={tags}
          hideArticleWithTitle={meta.title}
          maxNumber={tags.length > 1 ? 7 : 5}
          buttonText="Read more articles"
        />
      )}
    </>
  );
};

export default BlogPage;
