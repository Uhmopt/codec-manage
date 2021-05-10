import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import { config } from "../config";
import JsonLd from "./JsonLd";

export default withRouter(
  ({
    title = config.defaultPageTitle,
    seoTitle,
    description = config.siteDescription,
    quicktagline,
    image = config.defaultOgImage,
    lastUpdated,
    router,
    ogUrl,
    jsonld,
    bigTwitterCard,
    children
  }) => (
    <Head>
      {/* DEFAULT */}

      {title != undefined && (
        <title key="title">
          {seoTitle || title}
          {quicktagline ? ` | ${quicktagline}` : ""}
        </title>
      )}
      {description != undefined && (
        <meta name="description" key="description" content={description} />
      )}
      {lastUpdated != undefined && (
        <meta property="og:updated_time" content={lastUpdated} />
      )}
      <link rel="icon" type="image/x-icon" href="/static/images/favicon.png" />
      <link rel="apple-touch-icon" href="/static/images/favicon.png" />

      {/* OPEN GRAPH */}
      <meta property="og:locale" content="en" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:url"
        key="og:url"
        content={`https://www.autokroma.com${ogUrl ? ogUrl : router.pathname}`}
      />
      {title != undefined && (
        <meta property="og:title" content={title} key="og:title" />
      )}
      {description != undefined && (
        <meta
          property="og:description"
          key="og:description"
          content={description}
        />
      )}
      {image != undefined && (
        <meta
          property="og:image"
          key="og:image"
          content={`https://www.autokroma.com/${
            image.indexOf("/") === 0 ? image.slice(1) : image
          }`}
        />
      )}

      {/* TWITTER */}
      <meta
        name="twitter:card"
        key="twitter:card"
        content={bigTwitterCard ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:site" key="twitter:site" content="@autokroma" />
      <meta name="twitter:creator" key="twitter:creator" content="@autokroma" />
      {title != undefined && (
        <meta name="twitter:title" key="twitter:title" content={title} />
      )}
      {description != undefined && (
        <meta
          name="twitter:description"
          key="twitter:description"
          content={description}
        />
      )}
      {image != undefined && (
        <meta
          name="twitter:image"
          key="twitter:image"
          content={`https://www.autokroma.com/${
            image.indexOf("/") === 0 ? image.slice(1) : image
          }`}
        />
      )}
      <meta name="keywords" content={config.keywordsForSeo}></meta>
      <JsonLd
        data={[
          {
            "@context": "http://schema.org",
            "@type": "Website",
            id: "autokroma",
            url: "https://www.autokroma.com"
          },
          ...(Array.isArray(jsonld) ? jsonld : [jsonld])
        ].filter(Boolean)}
      />
      {children}
    </Head>
  )
);
