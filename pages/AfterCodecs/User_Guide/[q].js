import { meta as FAQMeta } from "../User_Guide.mdx";
import ProductPage, { FAQ } from "../../../components/ProductPage";
import { H1, H3 } from "../../../components/Heading";
import Container from "../../../components/Container";
import { getComponents, getPaths } from "../../../utils/faq";
import Link from "../../../components/Link";
import Head from "../../../components/Head";

const Q = props => {
  let [category, question, answer] = getComponents(FAQMeta, props.q);
  return (
    <>
      <ProductPage
        meta={FAQMeta}
        landerImage={require("assets/images/_AC/AC_product_background.jpg?trace")}
      />
      <Head title={question}></Head>
      <Container>
        <H1>{category}</H1>
        <H3>{question}</H3>
        <FAQ.A>{answer}</FAQ.A>

        <Link href="/AfterCodecs/User_Guide">
          Go back to AfterCodecs User Guide
        </Link>
      </Container>
    </>
  );
};

export default Q;

export async function getStaticProps(context) {
  const q = context.params.q;
  return {
    props: {
      q
    }
  };
}
export async function getStaticPaths() {
  return getPaths(FAQMeta);
}
