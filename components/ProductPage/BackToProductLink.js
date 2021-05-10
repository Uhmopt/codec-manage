import { Flex } from "rebass";
import { H2 } from "../Heading";
import Link from "../Link";

const BackToProductLink = ({ product = "AfterCodecs", mainColor, title }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mt={4}
    >
      <Link href={`/${product.split(" ").join("_")}`}>
        Go Back to {product}
      </Link>
      <H2 centered underline={mainColor}>
        {title}
      </H2>
    </Flex>
  );
};

export { BackToProductLink };
