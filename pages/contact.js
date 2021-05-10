import { Flex } from "rebass";
import styled, { css } from "styled-components";
import { useState } from "react";
import { config } from "../config";

import Container from "../components/Container";
import { H1, H2, H4 } from "../components/Heading";
import Input, { Select, Textarea } from "../components/Input";
import Button from "../components/Button";
import { IText as Text, Error } from "../components/Text";
import Image from "../components/Image";
import Loader from "../components/Loader";

const topics = [
  { value: "", txt: "Choose your category" },
  {
    value: "aftercodecs",
    txt: "AfterCodecs -- Fast Exporter plugins",
    bottomPopup:
      "If you have an issue with a render, please enable .log file generation in the Settings tab of AfterCodecs and send us this .log file generated next to your render !"
  },
  {
    value: "brawstudio",
    txt: "BRAW Studio -- Blackmagic RAW Importer plugins and panel",
    bottomPopup:
      'Please send us a bug report <a target="_blank" href="https://www.autokroma.com/blog/How-to-report-bug-BRAW-Studio/">by following this article !</a>'
  },
  {
    value: "influx",
    txt: "Influx -- All-in-one Importer plugins"
  },
  {
    value: "plumepack",
    txt: "PlumePack -- Project & Media Management PrPro panel",
    bottomPopup:
      'Please send us an analysis so that we can inspect your project and fix your issue faster !'
  },
  { value: "general", txt: "General enquiry about Autokroma" },
  {
    value: "sales",
    txt: "Sales -- troubleshooting licenses, our store, invoices etc.",
    bottomPopup:
      "Don't forget to give us your Order ID and select the right email address concerned by your purchase !"
  }
];

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
          Your email is processing...
        </H4>
        <Loader />
      </div>
      <H4 centered mb={4} className="error">
        An error occurred! Try again later.
      </H4>
      <div className="success">
        <H4 mb={4}>
          Your message has been successfully sent. If you did not receive a
          confirmation on your email address by 10 minutes, please check your
          SPAM folder. If it's not there, please send us an email at:
        </H4>
        <Image src={require("assets/images/contact_email.png")} />
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

const BottomPopup = styled(props => {
  const [popup, setPopup] = useState(props.popup);
  if (props.popup && props.popup !== popup && popup !== "") {
    setPopup("");
    setTimeout(() => setPopup(props.popup), 200);
  }
  return (
    <Flex {...props}>
      <Text dangerouslySetInnerHTML={{ __html: popup }}></Text>
    </Flex>
  );
})`
  align-content: flex-start;
  justify-content: flex-start;

  width: 100%;
  opacity: 0;

  background-color: white;
  transition: all 0.5s ease-in-out;
  padding: 10px;

  a {
    color: black;
    text-decoration: underline;
  }

  ${props =>
    props.popup &&
    css`
      background-color: #f0c230;
      opacity: 1;
    `}

  margin-top: 20px;
`;

const ContactPage = () => {
  return (
    <>
      <Container id="contact-page">
        <Wrapper id="form">
          <H1 centered>Tell us what do you think</H1>
          <Select
            name="question_type"
            id="question_type_selector"
            required
            options={topics}
            label={"Topic of your question"}
          />
          <Input
            id="subject"
            type="text"
            name="subject"
            required
            defaultValue=""
            placeholder={"Subject"}
            required
          />
          <Flex css={{ width: "100%" }}>
            <Input
              mr={4}
              width={1 / 2}
              placeholder={"Name"}
              id="name"
              type="text"
              name="name"
              defaultValue=""
            />
            <Input
              width={1 / 2}
              placeholder={"Email"}
              id="email"
              type="email"
              name="email"
              required
              defaultValue=""
            />
          </Flex>
          <Textarea
            placeholder={"Enter your message"}
            css={css`
              max-width: 100%;
              min-height: 150px;
            `}
            id="message"
            name="message"
            id="message"
          />
          {/* <BottomPopup
                popup={
                  topics.find(el => el.value === selectedTopic).bottomPopup
                }
              /> */}
          <Flex
            mt={4}
            css={{
              width: "100%",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <Flex alignItems="center">
              <Button
                type="button"
                color="#000"
                hoverColor="#f0c230"
                htmlFor="attachment"
                as="label"
                outline
              >
                <Text fontSize={[1, 2]}>{`Click to upload files`}</Text>
              </Button>
              <Text ml={3} fontSize={0} color="#555">
                Max file size 5MB
              </Text>
            </Flex>
            <Input
              id="attachment"
              type="file"
              multiple="multiple"
              name="attachment"
              accept="image/*,.log,.zip"
              style={{ position: "absolute", opacity: 0 }}
            />
            <Text
              id="attachments_size"
              css={{ width: "100%", textAlign: "left" }}
              mt={2}
            ></Text>
          </Flex>

          <Flex mt={2} css={{ width: "100%" }}>
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
          <Button mt={4} id="submit_btn" color="#b4003d" alignSelf="flex-start">
            <Text
              fontSize={[1, 2]}
              textAlign="center"
            >{`Send email to us`}</Text>
          </Button>
          {config.enableLicensePage && (
            <Button
              color="#3867d6"
              href="/Send_My_License_Email"
              outline
              alignSelf="flex-start"
              mt={2}
            >
              <Text
                fontSize={[1, 2]}
                textAlign="center"
              >{`I would like to receive again my license`}</Text>
            </Button>
          )}
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
      contactPage: true
    }
  };
}

export default ContactPage;
