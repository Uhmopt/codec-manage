const refract = require("refractor");

// NOTE: This highlights template-strings as strings of CSS
const styledHighlight = {
  "styled-template-string": {
    pattern: /(styled(\.\w+|\([^\)]*\))(\.\w+(\([^\)]*\))*)*|css|injectGlobal|createGlobalStyle|keyframes|\.extend|\.withComponent)`(?:\$\{[^}]+\}|\\\\|\\?[^\\])*?`/,
    lookbehind: true,
    greedy: true,
    inside: {
      interpolation: {
        pattern: /\$\{[^}]+\}/,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: refract.languages.jsx
        }
      },
      string: {
        pattern: /[^$;]+/,
        inside: refract.languages.css,
        alias: "language-css"
      }
    }
  }
};
refract.languages.insertBefore("jsx", "template-string", styledHighlight);
refract.languages.insertBefore("js", "template-string", styledHighlight);

const MDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      require("@mapbox/rehype-prism"),
      require("rehype-slug"),
      [
        require("rehype-toc"),
        {
          headings: ["h1", "h2"],
          customizeTOC(toc) {
            toc.properties.id = "table-of-contents";
          }
        }
      ]
    ]
  }
});

const path = require("path");
const blogPosts = require("./utils/data/get-blog-posts")(false);

const optimizedImages = require("next-optimized-images");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const withPlugins = require("next-compose-plugins");

const withCSS = require("@zeit/next-css");

const nextConfig = {
  exportTrailingSlash: true,
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
    if (dev) return defaultPathMap;
    // Fix TODO#133: removed extra index folder
    delete defaultPathMap["/index"];
    // Don't forget to remove that when News page will be ready
    delete defaultPathMap["/News"];
    // Don't forget to remove that when store page will be ready

    delete defaultPathMap["/AfterCodecs/store"];
    delete defaultPathMap["/AfterCodecs/confirmation"];

    blogPosts.forEach(post => {
      if (post.draft) {
        delete defaultPathMap[post.path];
      }
    });

    return defaultPathMap;
  },
  webpack(config, options) {
    config.resolve.alias["static"] = path.join(__dirname, "static");
    config.resolve.alias["assets"] = path.join(__dirname, "assets");

    config.module.rules.push({
      test: /.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true
          }
        }
      ]
    });

    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `${nextConfig.assetPrefix || ""}/_next/static/videos/`,
            outputPath: `static/videos/`,
            name: "[name]-[hash].[ext]"
          }
        }
      ]
    });

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries["main.js"] &&
        !entries["main.js"].includes("./utils/polyfills/polyfills.js")
      ) {
        entries["main.js"].unshift("./utils/polyfills/polyfills.js");
      }

      return entries;
    };

    return config;
  }
};

module.exports = withPlugins(
  [
    [bundleAnalyzer],
    [
      MDX,
      {
        pageExtensions: ["js", "jsx", "md", "mdx"]
      }
    ],
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "jpg", "png", "gif"],
        optimizeImagesInDev: false,
        inlineImageLimit: -1,
        mozjpeg: {},
        optipng: { optimizationLevel: 0 },
        gifsicle: {},
        optimizeImages: false
      }
    ],
    [withCSS, {}]
  ],
  nextConfig
);
