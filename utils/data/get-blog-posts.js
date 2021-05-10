const fs = require("fs");
const path = require("path");
const { compareAsc, parseISO } = require("date-fns");

const META = /export\s+const\s+meta\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;
const DIR = path.join(process.cwd(), ".", "pages", "blog");
const files = fs
  .readdirSync(DIR)
  .filter(file => file.endsWith(".md") || file.endsWith(".mdx"));

const compareFunc = (a, b) => {
  const bDate = b.lastUpdated || b.date;
  const aDate = a.lastUpdated || a.date;
  const compDate = compareAsc(parseISO(bDate), parseISO(aDate));
  if (compDate === 0) {
    return a.title > b.title;
  }
  return compDate;
};

module.exports = devMode =>
  files
    .map(file => {
      const name = path.join(DIR, file);
      const contents = fs.readFileSync(name, "utf8");
      const match = META.exec(contents);
      if (!match || typeof match[1] !== "string")
        throw new Error(`${name} needs to export const meta = {}`);

      const meta = eval("(" + match[1] + ")");

      const ret = {
        ...meta,
        path: "/blog/" + file.replace(/\.mdx?$/, "")
      };

      return ret;
    })
    .sort(compareFunc);
