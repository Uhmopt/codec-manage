import preval from "babel-plugin-preval/macro";

const posts = preval`
  module.exports = require('./get-blog-posts.js')(process.env.NODE_ENV !== 'production');
`;

module.exports = posts;
