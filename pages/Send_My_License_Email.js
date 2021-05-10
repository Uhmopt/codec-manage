import { Flex } from "rebass";
import styled, { css } from "styled-components";
import { useState } from "react";

import Container from "../components/Container";
import { H1, H4 } from "../components/Heading";
import Input, { Select, Textarea } from "../components/Input";
import Button from "../components/Button";
import { IText as Text, Error } from "../components/Text";
import Loader from "../components/Loader";
import Link from "../components/Link";

const Wrapper = styled(Flex).attrs({
  mt: 4,
  mx: "auto",
  maxWidth: "600px",
  width: ["100%"],
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
})``;

const EmailSended = styled(props => {
  return (
    <Flex
      flexDirection="column"
      minHeight="80vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      id="email_sended"
      pt={4}
      {...props}
    >
      <div className="loading">
        <H4 centered mb={4}>
          Retrieval in process...
        </H4>
        <Loader />
      </div>
      <H4 centered mb={4} className="error">
        An error occurred! Try again later.
      </H4>
      <div className="success">
        <H4 mb={4}>
          If there is an order associated with your email address, you will
          receive an email soon. If you did not receive a confirmation on your
          email address by 10 minutes, please check your SPAM folder. If it's
          not there, please <Link href={"/contact/"}>contact us</Link>
        </H4>
      </div>
    </Flex>
  );
})`
  display: none;
  .loading {
    display: none;
  }

  .error {
    display: none;
  }

  .success {
    display: none;
  }
`;

const LicensePage = () => {
  return (
    <>
      <Container id="license-page">
        <Wrapper id="form">
          <H1 centered>Retrieve your previous licenses</H1>
          <Flex css={{ width: "100%" }}>
            <Input
              mr={4}
              width={1}
              placeholder={"Email"}
              id="email"
              type="email"
              name="email"
              defaultValue=""
            />
          </Flex>
          <Flex mt={4} css={{ width: "100%" }}>
            <div
              id="recaptcha"
              className="g-recaptcha"
              data-sitekey="6LfpPbwUAAAAAGo7eanJzS_vTFY69H5BxlzGHP6v"
              data-callback="send"
            ></div>
          </Flex>
          <Flex mt={2} css={{ width: "100%" }}>
            <Error id="error_message" />
          </Flex>
          <Button
            id="submit_btn"
            mt={4}
            color="#b4003d"
            css={{ width: "100%" }}
          >
            <Text
              fontSize={[1, 2]}
              textAlign="center"
            >{`Request your license`}</Text>
          </Button>
        </Wrapper>
        <Wrapper>
          <EmailSended />
        </Wrapper>
      </Container>
    </>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      licensePage: true
    }
  };
}

export default LicensePage;
