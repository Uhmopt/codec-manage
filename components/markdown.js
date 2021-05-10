import styled from "styled-components";
import { Box } from "rebass";

import { H2, H3, H4 } from "./Heading";
import Paragraph from "./Paragraph";
import Link from "./Link";
import UL, { ListItem, OrderedList } from "./HtmlLists";
import Image, { BlogImage } from "./Image";
import { FeaturesCard, FAQ } from "./ProductPage";
import { FAQContext } from "./ProductPage/FAQ";
import Text, { B } from "./Text";
import VideoEmbed, { MarkdownVideo } from "./EmbedVideo";
import { MacOnly, WindowsOnly } from "./PlatformOnly";
import DottedListWrapper, {
  ListItem as _ListItem
} from "./ProductPage/DottedList";
import AfterCodecsBestFeatures from "./BlogPieces/AfterCodecsBestFeatures.mdx";
import { meta as acMeta } from "../pages/AfterCodecs/User_Guide.mdx";
import { meta as brMeta } from "../pages/BRAW_Studio/User_Guide.mdx";
import { getComponents } from "../utils/faq";

const Code = styled(Box).attrs({
  as: "code"
})`
  line-height: 1.4;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI;
  color: ${props => props.theme.colors.primary};
  border-radius: 3px;
  line-break: anywhere;
`;

Code.defaultProps = {
  fontSize: 1
};

const InlineCode = styled(Code).attrs({
  fontSize: 2
})`
  background-color: ${props => props.theme.colors.greys[0]};
  padding: 0.1em 0.5em;
`;

const MLink = styled(Link).attrs({
  prefetch: false
})`
  width: fit-content;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% 1px;
  transition: background-size 0.5s;
  line-break: ${props => (props.normalLB ? "normal" : "anywhere")};

  &:hover {
    background-image: linear-gradient(#b4003d, #b4003d);
    text-decoration: none !important;
    background-size: 0% 1px;
  }
`;

MLink.defaultProps = {
  fontSize: [0, 1]
};

const getFAQById = id => {
  let FAQ = getComponents(acMeta, id);
  if (FAQ[0]) {
    return [FAQ[1], FAQ[2], "AfterCodecs"];
  } else {
    FAQ = getComponents(brMeta, id);
    if (FAQ[0]) {
      return [FAQ[1], FAQ[2], "BRAW_Studio"];
    }
    return null;
  }
};

export default {
  h1: props => <H2 {...props} mt={0} />,
  h2: props => <H3 {...props} mt={2} />,
  h3: H4,
  h4: props => <H4 {...props} />,
  H1: H2,
  H2: props => <H3 {...props} my={4} />,
  H3: H4,
  H4: props => <H4 {...props} />,
  p: props => <Paragraph {...props} />,
  ul: props => <UL noJustify={true} {...props} />,
  ol: OrderedList,
  li: ListItem,
  a: MLink,
  img: props => <Image mt={4} {...props} />,
  code: Code,
  inlineCode: InlineCode,
  Link: props => <MLink normalLB {...props} />,
  BlogImage: BlogImage,
  FeaturesCard: FeaturesCard,
  DottedList: DottedListWrapper,
  ListItem: props => <_ListItem style="fill" {...props} />,
  B: B,
  VideoEmbed: VideoEmbed,
  HTMLVideo: MarkdownVideo,
  MacOnly: MacOnly,
  WindowsOnly: WindowsOnly,
  AfterCodecsBestFeatures: AfterCodecsBestFeatures,
  span: Text,
  strong: props => (
    <Text fontSize={[0, 1]} display="inline">
      <strong {...props} />
    </Text>
  ),
  GetFAQById: props => {
    const faq = getFAQById(props.id);
    if (faq) {
      return (
        <FAQContext.Provider value={{ product: faq[2] }}>
          <FAQ.Q>{faq[0]}</FAQ.Q>
          <FAQ.A>{faq[1]}</FAQ.A>
        </FAQContext.Provider>
      );
    }
    return null;
  }
};
