(function() {
  function renderResults(results) {
    if (results.length === 0) {
      document.getElementById("search_results_wrapper").innerHTML = "";
      document.getElementById("no_results").style.display = "block";
    } else {
      document.getElementById("search_results_wrapper").innerHTML = "";
      var template = document.getElementById("template_search_item");
      results.forEach(function(result) {
        var newItem = template.cloneNode(true);
        newItem.setAttribute("href", result.link);
        newItem.setAttribute("id", "");
        newItem.style.display = "block";
        var image = newItem.querySelector("#search_item_image");
        if (result.pagemap && result.pagemap.cse_thumbnail) {
          image.setAttribute("src", result.pagemap.cse_thumbnail[0].src);
        } else {
          image.parentNode.removeChild(image);
        }
        newItem.querySelector("#search_item_title").innerHTML =
          result.htmlTitle;
        newItem.querySelector("#search_item_snippet").innerHTML =
          result.htmlSnippet;
        newItem.querySelector("#search_item_formatted_url").innerHTML =
          result.htmlFormattedUrl;
        document.querySelector("#search_results_wrapper").appendChild(newItem);
      });
    }
  }
  async function handleInput() {
    function showLoader() {
      document.getElementById("search_loader").style.display = "block";
    }

    function hideLoader() {
      document.getElementById("search_loader").style.display = "none";
    }

    showLoader();
    var body = {
      cx: "002486784329166580433:aqat006ycxm",
      key: "AIzaSyDBGG_Zz-xkClRBOuWzy96hnZT9r8XYzX4",
      fields:
        "items(formattedUrl,htmlFormattedUrl,htmlSnippet,htmlTitle,image/thumbnailLink,link,pagemap,snippet,title),queries"
    };
    var searchQuery = document.getElementById("search_input").value;
    if (!searchQuery) return;
    try {
      var data = await myXHR(
        [],
        `https://www.googleapis.com/customsearch/v1/siterestrict?cx=${body.cx}&key=${body.key}&fields=${body.fields}&q=${searchQuery}`,
        {}
      );
      renderResults(data.items || []);
      document.getElementById("search_results_label").innerHTML =
        "Search results for " + searchQuery;
    } catch (e) {
      window.open(
        "https://google.com/search?q=" + searchQuery + "+site:autokroma.com",
        "_blank"
      );
    }
    hideLoader();
  }

  function myXHR(headers, endpoint, json_input) {
    return new Promise(async function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", endpoint, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      if (null != headers) {
        for (var h in headers) {
          xhr.setRequestHeader(h, headers[h]);
        } // for()
      }
      xhr.onload = function() {
        var json_output = JSON.parse(xhr.responseText);
        resolve(json_output);
      };
      xhr.onerror = function() {
        reject("error");
      };
      s = JSON.stringify(json_input);
      xhr.send(s);
    });
  } // myXHR

  document
    .getElementById("search_submit")
    .addEventListener("click", handleInput);
  document
    .getElementById("search_input")
    .addEventListener("keypress", function(e) {
      if (e.keyCode == 13) {
        handleInput();
      }
    });
})();
