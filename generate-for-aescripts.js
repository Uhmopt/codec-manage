import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import AfterCodecs from "./components/content/AfterCodecs/Overview";
import BRAWStudio from "./components/content/BRAW_Studio/Overview";
import PlumePack from "./components/content/PlumePack/Overview";

const fs = require("fs");

const Plugins = [
  { name: "AfterCodecs", mainColor: "#B80D4D" },
  { name: "BRAWStudio", mainColor: "#4367BC" },
  { name: "PlumePack", mainColor: "#eac11c" }
];

Plugins.forEach(({ name, mainColor }) => {
  const sheet = new ServerStyleSheet();
  let Comp = AfterCodecs;
  if (name === "BRAWStudio") {
    Comp = BRAWStudio;
  } else if (name === "PlumePack") {
    Comp = PlumePack;
  }
  const html = renderToStaticMarkup(
    sheet.collectStyles(
      <Comp mainColor={mainColor} generateForAescripts={true} />
    )
  );
  const styleTags = sheet
    .getStyleTags()
    .replace(/\/\*.*\*\//g, " ")
    .replace(/(.sc-[a-zA-z]{6} {})/g, "")
    .replace(/(data-styled="[a-zA-Z ]+")/g, "")
    .replace(/(data-styled-version="[a-zA-Z\d. ]+")/g, "")
    .replace(/\s+/g, " ");
  fs.writeFile(
    `./aescripts/${name}.html`,
    `<style>ul{list-style-type:none!important;}</style>${styleTags}${html}`,
    () => {
      console.log(`${name}.html created successfully.`);
    }
  );
});
