const fs = require("fs");
const path = require("path");

const _products = ["AfterCodecs", "BRAW_Studio", "PlumePack"];

function getProducts(dir) {
  const products = [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = path.join(dir, files[i]);
    if (_products.includes(files[i]) && fs.statSync(name).isDirectory()) {
      const subDirFiles = fs
        .readdirSync(name)
        .filter(file => !fs.statSync(path.join(name, file)).isDirectory());
      const contents = fs.readFileSync(path.join(name, "index.mdx"), "utf8");
      const match = META.exec(contents);
      if (!match || typeof match[1] !== "string")
        throw new Error(`${name} needs to export const meta = {}`);
      const meta = eval("(" + match[1] + ")");
      products.push({
        product: files[i],
        path: "/" + files[i],
        routes: subDirFiles
          .filter(file => file.includes(".mdx"))
          .map(file =>
            file === "index.mdx" ? "" : file.replace(/\.mdx?$/, "")
          ),
        ...meta
      });
    }
  }
  return products;
}

const META = /export\s+const\s+meta\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;
const DIR = path.join(process.cwd(), ".", "pages");

module.exports = getProducts(DIR);
