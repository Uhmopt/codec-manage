import { Flex, Box } from "rebass";
import styled, { css } from "styled-components";
import React from "react";
import { createContext } from "react";
import { faqAnchorRegexp } from "../../utils/faq";
import { H4 } from "../Heading";
import ExternalLink from "assets/external-link.svg";

const TogglerBtn = styled(Flex).attrs({
  mb: 4
})`
  .no-js & {
    display: none;
  }
  cursor: pointer;
  font-weight: normal;

  &:hover {
    font-weight: bold;
  }
`;

export const FAQContext = createContext();

const FAQ = styled(props => {
  return (
    <FAQContext.Provider value={{ product: props.product }}>
      <Flex flexDirection="column" id="faq-page">
        <TogglerBtn id="expand-all-btn">
          <Expander />
          <QuestionHeader id="expand-all-label">
            Expand all questions (to perform a text search with your browser for
            example)
          </QuestionHeader>
        </TogglerBtn>
        {props.faq.map((category, index) => {
          return (
            <div key={index}>
              <Category>{category.categoryName}</Category>
              {category.questions.map(question => {
                return [
                  <FAQ.Q>{question[0]}</FAQ.Q>,
                  <FAQ.A>{question[1]}</FAQ.A>
                ];
              })}
            </div>
          );
        })}
      </Flex>
    </FAQContext.Provider>
  );
})``;

const Expander = styled(props => {
  return (
    <Box mt={"1px"} mr={1} {...props} className={props.className + " expander"}>
      <svg
        width="6"
        height="14"
        viewBox="0 0 8 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 9L0.499999 17.6603L0.5 0.339745L8 9Z" fill="black" />
      </svg>
    </Box>
  );
})`
  width: 1em;
  height: 1em;

  no-js & {
    display: none;
  }

  transform: none;

  &.expanded {
    transform: rotate(90deg);
    margin-top: 8px;
  }
`;

const QuestionHeader = styled(H4).attrs({ mt: 0 })``;

const HiddenId = styled.div`
  display: block;
  position: relative;
  top: -80px;
  visibility: hidden;
`;

const A = styled(Box).attrs({
  mb: 4,
  width: [1, 2 / 3],
  fontSize: [0, 1]
})`
  line-height: 1.5;
`;

const Q = styled(props => {
  const anchor = props.children
    .replace(faqAnchorRegexp, "")
    .trim()
    .split(" ")
    .join("_");
  return (
    <FAQContext.Consumer>
      {context => (
        <Flex
          as="a"
          css={css`
            color: black;
            text-decoration: none;
            cursor: pointer;
            position: relative;

            + ${A} {
              display: block;
            }

            .no-js & {
              ${Expander} {
                display: none;
              }

              + ${A} {
                display: block;
              }

              ${QuestionHeader} {
                font-weight: bold;
              }
            }

            ${QuestionHeader} {
              font-weight: 600;
            }

            &.collapsed {
              ${QuestionHeader} {
                font-weight: normal;
              }

              + ${A} {
                display: none;
              }

              &:hover {
                ${QuestionHeader} {
                  font-weight: 500;
                }
              }
            }
          `}
          flexDirection="row"
          className="faq-q-wrapper collapsed"
          href={`/${context.product}/User_Guide/${anchor}`}
        >
          <Expander />
          <QuestionHeader mr={2}>{props.children}</QuestionHeader>
          <Box
            as=""
            mt={"3px"}
            className="faq-external-link"
            href={`/${context.product}/User_Guide/${anchor}`}
          >
            <ExternalLink />
          </Box>
        </Flex>
      )}
    </FAQContext.Consumer>
  );
})``;

const Category = styled(H4)``;

FAQ.Q = Q;

FAQ.A = A;

FAQ.Category = Category;

export default FAQ;
