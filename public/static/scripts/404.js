(function() {
  fetch("/sitemap.xml")
    .then(function(response) {
      return response.text();
    })
    .then(function(str) {
      return new window.DOMParser().parseFromString(str, "text/xml");
    })
    .then(function(data) {
      var urlParams = new URLSearchParams(window.location.search);
      var page = urlParams.get("page");
      if (!page) return;
      var input = document.getElementById("search_input");
      input.value = page
        .split(/[\/_-]/)
        .join(" ")
        .trim();
      var searchBtn = document.getElementById("search_submit");
      searchBtn.click();
      var urls = data.children[0].children;
      var urlsArray = Array.prototype.slice.call(urls);
      urlsArray = urlsArray
        .map(function(el) {
          var url = el.firstChild.textContent.replace(
            "https://www.autokroma.com",
            ""
          );
          url = url.replace(/\/$/, "");
          return {
            url: url,
            text: url
              .slice(1)
              .split(/[_-]/)
              .join(" ")
              .split("/")
              .join(" > "),
            score: getScore(
              page,
              url
                .substring(url.lastIndexOf("/") + 1)
                .split(/[\/_-]/)
                .join(" ")
                .trim()
            )
          };
        })
        .sort(function(a, b) {
          if (a.score > b.score) {
            return -1;
          }
          if (b.score > a.score) {
            return 1;
          }

          return 0;
        })
        .slice(0, 3);
      var suggestionsBlock = document.getElementById("suggestions_block");
      suggestionsBlock.innerHTML = urlsArray.reduce(function(prev, cur) {
        return (
          prev +
          "<a class='suggestion' href='" +
          cur.url +
          "'>" +
          cur.text +
          "</a>"
        );
      }, "");
      return urlsArray;
    });

  function getScore(s1, s2) {
    var substringsScore = getAllSubstrings(s2, s1.length)
      .map(function(str) {
        return similarity(s1, str);
      })
      .sort(function(a, b) {
        if (a > b) {
          return -1;
        }
        if (b > a) {
          return 1;
        }
        return 0;
      });
    return substringsScore[0] || 0.0;
  }

  function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (
      (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
    );
  }

  function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0) costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  function getAllSubstrings(str, length) {
    var i,
      j,
      result = [];
    if (length >= str.length) {
      return [str];
    }

    for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
        result.push(str.slice(i, j));
      }
    }
    return result.filter(function(_str) {
      return _str.length === length;
    });
  }
})();
