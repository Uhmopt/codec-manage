import Document, { Main, NextScript, Head } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { config } from "../config";

class CustomHead extends Head {
  render() {
    const res = super.render();

    function transform(node) {
      // remove all link preloads
      if (
        node &&
        node.type === "link" &&
        node.props &&
        node.props.rel === "preload"
      ) {
        return null;
      }
      if (node && node.type === "meta") {
        // removing duplicating props
        if (node.props && node.props.charSet === "utf-8") {
          return null;
        }
        if (node.props && node.props.content === "width=device-width") {
          return null;
        }
      }
      if (node && node.props && node.props.children) {
        return {
          ...node,
          props: {
            ...node.props,
            children: Array.isArray(node.props.children)
              ? node.props.children.map(transform)
              : transform(node.props.children)
          }
        };
      }
      if (Array.isArray(node)) {
        return node.map(transform);
      }

      return node;
    }

    return transform(res);
  }
}

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    const props = this.props.__NEXT_DATA__.props.pageProps;
    const useReact = props.withReact;
    const HeadComponent = useReact ? Head : CustomHead;
    const contactPage = props.contactPage;
    const licensePage = props.licensePage;
    const searchPage = props.searchPage;
    const errorPage = props.errorPage;
    return (
      <html lang="en">
        <HeadComponent>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0"
          />
          {/* Google analytics */}
          {config.googleAnalytics && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
                ga('create','${config.googleAnalytics}','auto');ga('send','pageview')
              `
                }}
              />
              <script
                src="https://www.google-analytics.com/analytics.js"
                async
                defer
              ></script>
            </>
          )}
          {this.props.styleTags}
        </HeadComponent>
        <body className="no-js">
          <script
            dangerouslySetInnerHTML={{
              __html: `document.body.classList.remove('no-js');`
            }}
          />
          <Main />
          <script src="/static/scripts/app.js"></script>
          <script src="/static/lightbox/js/lightbox-plus-jquery.min.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `lightbox.option({
                'maxWidth': 1500
              })`
            }}
          />
          <script src="/static/scripts/screenshots.js"></script>
          <script src="/static/scripts/download.js"></script>
          <script src="/static/scripts/carousel.js"></script>
          <script src="/static/scripts/faq.js"></script>
          {(contactPage || licensePage) && (
            <script
              src="https://www.google.com/recaptcha/api.js"
              async
              defer
            ></script>
          )}
          {contactPage && <script src="/static/scripts/contact.js"></script>}
          {licensePage && (
            <script
              src="https://www.google.com/recaptcha/api.js"
              async
              defer
            ></script>
          )}
          {licensePage && <script src="/static/scripts/license.js"></script>}
          {(searchPage || errorPage) && (
            <script src="/static/scripts/search.js"></script>
          )}
          {errorPage && <script src="/static/scripts/404.js" />}
          {useReact && <NextScript />}
        </body>
      </html>
    );
  }
}
