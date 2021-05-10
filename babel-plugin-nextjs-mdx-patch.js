const DATA_FETCH_FNS = ["getStaticPaths", "getStaticProps", "getServerProps"];

module.exports = () => {
  return {
    visitor: {
      ObjectProperty(path) {
        if (
          DATA_FETCH_FNS.includes(path.node.value.name) &&
          path.findParent(
            path =>
              path.isVariableDeclarator() && path.node.id.name === "layoutProps"
          )
        ) {
          path.remove();
        }
      }
    }
  };
};
