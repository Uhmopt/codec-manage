(function() {
  var isFAQPage = document.getElementById("faq-page");
  var CollapseLabel =
    "Collapse all questions (to easily see them all back again)";
  var ExpandLabel =
    "Expand all questions (to perform a text search with your browser for example)";

  var isAllExpanded = false;
  var expandAllBtn = document.getElementById("expand-all-btn");
  var expandAllLabel = document.getElementById("expand-all-label");
  var faqQuestionWrappers = document.querySelectorAll(".faq-q-wrapper");
  faqQuestionWrappers = [].slice.call(faqQuestionWrappers);

  var faqExternalLinks = document.querySelectorAll(".faq-external-link");
  faqExternalLinks = [].slice.call(faqExternalLinks);

  var hiddenIds = document.querySelectorAll(".hidden-id");
  hiddenIds = [].slice.call(hiddenIds);
  var hash = window.location.hash.substr(1);

  if (hash) {
    var hashedQ = document.querySelector('[href="#' + hash + '"]');
    hashedQ.classList.remove("collapsed");
    hashedQ.querySelector(".expander").classList.add("expanded");
  }

  setTimeout(function() {
    hiddenIds.forEach(function(el) {
      el.parentNode.removeChild(el);
    });
  }, 1000);

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", function() {
      isAllExpanded = !isAllExpanded;
      if (isAllExpanded) {
        expandAllBtn.querySelector(".expander").classList.add("expanded");
        expandAllLabel.innerText = CollapseLabel;
      } else {
        expandAllBtn.querySelector(".expander").classList.remove("expanded");
        expandAllLabel.innerText = ExpandLabel;
      }
      faqQuestionWrappers.forEach(function(q) {
        if (isAllExpanded) {
          q.classList.remove("collapsed");
          q.querySelector(".expander").classList.add("expanded");
        } else {
          q.classList.add("collapsed");
          q.querySelector(".expander").classList.remove("expanded");
        }
      });
    });
  }

  faqQuestionWrappers.forEach(function(q) {
    q.addEventListener("click", function(e) {
      e.preventDefault();
      if (q.classList.contains("collapsed")) {
        q.classList.remove("collapsed");
        q.querySelector(".expander").classList.add("expanded");
      } else {
        q.classList.add("collapsed");
        q.querySelector(".expander").classList.remove("expanded");
      }
    });
  });

  faqExternalLinks.forEach(function(q) {
    q.addEventListener("click", function(e) {
      e.stopPropagation();
    });
  });
})();
