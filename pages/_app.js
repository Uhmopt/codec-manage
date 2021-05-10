import React from "react";
import App from "next/app";
import { MDXProvider } from "@mdx-js/react";
import Nav from "../components/Nav";
import Head from "../components/Head";
import components from "../components/markdown";
import Footer from "../components/Footer";
import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Box } from "rebass";
import { withRouter } from "next/router";
import "../public/static/lightbox/css/lightbox.min.css";

const colors = {
  blue: "#3867d6",
  greys: ["#EEE", "#BBB", "#999", "#666"],
  white: "#FFF",
  black: "#333",
  red: "#b4003d",
  yellow: "#f0c230"
};

const theme = {
  breakpoints: ["576px", "768px", "992px", "1140px", "1368px", "1920px"],
  fontSizes: [13, 15, 17, 20, 24, 28, 32],
  colors: {
    primary: colors.red,
    text: colors.black,
    background: "rgb(246, 247, 248)",
    secondary: colors.greys[4],
    tertiary: colors.greys[3],
    quaternary: colors.greys[2],
    ...colors
  }
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;600;700;900&display=swap');
  ${reset}
  body {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
    overflow-x: hidden;
    display: block;
  }
  .black {
    color: black;
  }
  a.suggestion {
    color: black;
  }

  i {
    font-style: italic;
  }

  a.suggestion:hover {
    color: ${props => props.theme.colors.primary};
  }
  strong, b {
    font-weight: bold;
  }
  hr {
    margin: 2em 0;
    border-color: rgba(0, 0, 0, 0.1);
  }
  ul {
    list-style-type: none;
  }
  ol {
    list-style-type: decimal;
  }
  code {
    line-height: 1.4;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI;
    color: ${props => props.theme.colors.primary};
    border-radius: 3px;
    background-color: ${props => props.theme.colors.greys[0]};
    padding: 2px;
  }
  h1[id]::before, h2[id]::before {
    display: block; 
    content: " "; 
    margin-top: 60px; 
    visibility: hidden; 
    pointer-events: none;
  }

  // override lightbox2 styles for larger screens
  @media screen and (min-width: ${props => props.theme.breakpoints[5]}) {
    .lb-data .lb-caption {
      font-size: 24px !important;
    }

    .lb-data .lb-number {
      font-size: 18px !important;
    }
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <Box css={{ minHeight: "85vh" }}>
            {router.pathname.includes("AfterCodecs/store") ||
            router.pathname.includes("AfterCodecs/confirmation") ? null : (
              <Nav />
            )}
            <Head />
            <GlobalStyle />
            <Component {...pageProps} />
          </Box>
          {router.pathname.includes("AfterCodecs/store") ||
          router.pathname.includes("AfterCodecs/confirmation") ? null : (
            <Footer />
          )}
        </MDXProvider>
      </ThemeProvider>
    );
  }
}

export default withRouter(MyApp);
