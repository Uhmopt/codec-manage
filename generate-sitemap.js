const sitemap = require("nextjs-sitemap-generator");
const path = require("path");
const { readdirSync } = require("fs");

const getDirectories = (source, product) =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `/${product}/User_Guide/${dirent.name}`);

const acPaths = getDirectories(
  path.join(__dirname, "out", "AfterCodecs", "User_Guide"),
  "AfterCodecs"
);
const brPaths = getDirectories(
  path.join(__dirname, "out", "BRAW_Studio", "User_Guide"),
  "BRAW_Studio"
);

const extraPaths = [...acPaths, ...brPaths];

sitemap({
  extraPaths: extraPaths,
  baseUrl: "https://www.autokroma.com",
  pagesDirectory: path.join(__dirname, "pages"),
  targetDirectory: "out/",
  nextConfigPath: path.join(__dirname, "next.config.js"),
  ignoredPaths: ["todo website", "[tag]", "Article_Model", "[q]", "[page]"],
  ignoreIndexFiles: true,
  pagesConfig: Object.assign(
    ...extraPaths.map(k => ({
      [k]: { priority: "0.5", changefreq: "daily" }
    }))
  )
});

console.log("Sitemap generated");
