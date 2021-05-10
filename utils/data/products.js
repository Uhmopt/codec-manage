import preval from "babel-plugin-preval/macro";
import { config } from "../../config";

const products = preval`
  module.exports = require('./get-products.js');
`;

module.exports = products.filter(el => {
  if (el.product === "PlumePack") {
    return config.enablePlumePack;
  } else {
    return true;
  }
});
