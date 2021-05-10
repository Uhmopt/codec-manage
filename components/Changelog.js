import { DottedList } from "./ProductPage";
import { format } from "date-fns";
import { Flex } from "rebass";

function compareVersions(v1, v2, options) {
  var lexicographical = options && options.lexicographical,
    zeroExtend = options && options.zeroExtend,
    v1parts = v1.split("."),
    v2parts = v2.split(".");

  function isValidPart(x) {
    return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
  }

  if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
    return NaN;
  }

  if (zeroExtend) {
    while (v1parts.length < v2parts.length) v1parts.push("0");
    while (v2parts.length < v1parts.length) v2parts.push("0");
  }

  if (!lexicographical) {
    v1parts = v1parts.map(Number);
    v2parts = v2parts.map(Number);
  }

  for (var i = 0; i < v1parts.length; ++i) {
    if (v2parts.length == i) {
      return 1;
    }

    if (v1parts[i] == v2parts[i]) {
      continue;
    } else if (v1parts[i] > v2parts[i]) {
      return 1;
    } else {
      return -1;
    }
  }

  if (v1parts.length != v2parts.length) {
    return -1;
  }

  return 0;
}

let betaIndex = 0;

const Changelog = ({ changelog, color, version }) => {
  return (
    <Flex
      css={{
        width: "100%",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      {changelog.reduce((prev, current, index) => {
        // To avoid treating the first element with Title and Resources folder as a version in the changelog
        if (typeof current === "string" || current instanceof String || current.hasOwnProperty("Title")) {
          return prev;
        } else {
          if (current.nextBeta && version === "beta") {
            betaIndex = index;
            prev.push(
              <DottedList
                key={index}
                listItems={current.changes}
                title={"Upcoming changes"}
                color={color}
              />
            );
          } else if (
            !current.nextBeta &&
            (version === "beta" ||
              compareVersions(version, current.version) >= 0)
          ) {
            let formattedDate;
            try {
              formattedDate = format(new Date([current.date]), "dd MMMM yyyy");
            } catch (e) {
              formattedDate = format(
                new Date(current.date[0], current.date[1] - 1, current.date[2]),
                "dd MMMM yyyy"
              );
            }
            let title = `${current.version} - ${formattedDate}`;
            if (index === betaIndex + 1) {
              title = `${current.version} (Current version) - ${formattedDate}`;
            }
            prev.push(
              <DottedList
                key={index}
                listItems={current.changes}
                title={title}
                color={color}
              />
            );
            if (current.version.slice(-2) === ".0") {
              prev.push(<hr key={index + current.version} />);
            }
          }
        }
        return prev;
      }, [])}
    </Flex>
  );
};

export default Changelog;
