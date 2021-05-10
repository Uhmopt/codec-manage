(function() {
  // Navigation Bar
  var topLinks = document.querySelectorAll(".top-nav-link");
  topLinks = [].slice.call(topLinks);
  if (topLinks.length) {
    topLinks.forEach(function(link) {
      link.addEventListener("mouseenter", function(e) {
        var title = e.target.getAttribute("title");

        var subMenus = document.querySelectorAll(".sub-menu-wrapper");
        subMenus = [].slice.call(subMenus);

        subMenus.forEach(function(sm) {
          sm.style.display = "none";
        });

        var subMenu = document.getElementById(
          "sub-menu-" + title.split(" ").join("-")
        );

        subMenu.style.display = "block";

        if (subMenu) {
          subMenu.addEventListener("mouseleave", function() {
            subMenu.style.display = "none";

            if (subMenu.parentNode) {
              subMenu.parentNode.replaceChild(subMenu.cloneNode(true), subMenu);
            }
          });
        }
      });
    });
  }

  // Platform Only
  var currentPlatformIsWindows = window.navigator.platform.indexOf("Win") > -1;
  var currentPlatformIsMac = window.navigator.platform.indexOf("Mac") > -1;
  var noPlatformDetected = !currentPlatformIsWindows && !currentPlatformIsMac;
  var platformOnlys = document.querySelectorAll(".platform-only");
  platformOnlys = [].slice.call(platformOnlys);
  platformOnlys.forEach(function(el) {
    var isStrict = el.classList.contains("strict");
    if (noPlatformDetected) {
      el.style.display = "none";
      return;
    }
    if (el.classList.contains("mac-only")) {
      if (currentPlatformIsMac) {
        var btn = el.querySelector(".platform-btn");
        btn.parentNode.removeChild(btn);
        el.querySelector(
          ".platform-content"
        ).style.display = el.classList.contains("inline") ? "inline" : "block";
      } else if (!isStrict) {
        var btn = el.querySelector(".platform-btn");
        btn.innerHTML = "Show content for Mac";
        btn.addEventListener("click", function(_ev) {
          var target = _ev.target;
          if (target.classList.contains("expanded")) {
            target.classList.remove("expanded");
            target.innerHTML = "Show content for Mac";
            target.parentNode.querySelector(".platform-content").style.display =
              "none";
          } else {
            target.classList.add("expanded");
            target.innerHTML = "Hide content for Mac";
            target.parentNode.querySelector(
              ".platform-content"
            ).style.display = target.classList.contains("inline")
              ? "inline"
              : "block";
          }
        });
      } else {
        el.style.display = "none";
      }
    }

    if (el.classList.contains("windows-only")) {
      if (currentPlatformIsWindows) {
        var btn = el.querySelector(".platform-btn");
        btn.parentNode.removeChild(btn);
        el.querySelector(
          ".platform-content"
        ).style.display = el.classList.contains("inline") ? "inline" : "block";
      } else if (!isStrict) {
        var btn = el.querySelector(".platform-btn");
        btn.innerHTML = "Show content for Windows";
        btn.addEventListener("click", function(_ev) {
          var target = _ev.target;
          console.log(target);
          if (target.classList.contains("expanded")) {
            target.classList.remove("expanded");
            target.innerHTML = "Show content for Windows";
            target.parentNode.querySelector(".platform-content").style.display =
              "none";
          } else {
            target.classList.add("expanded");
            target.innerHTML = "Hide content for Windows";
            target.parentNode.querySelector(
              ".platform-content"
            ).style.display = target.classList.contains("inline")
              ? "inline"
              : "block";
          }
        });
      } else {
        el.style.display = "none";
      }
    }

  });

  var noJsOnlys = document.querySelectorAll(".platform-only.no-js");
  noJsOnlys = [].slice.call(noJsOnlys);
  noJsOnlys.forEach(function(el) {
    el.style.display = "none";
  });

  var storeLinks = document.querySelectorAll(".store-link");
  storeLinks = [].slice.call(storeLinks);
  storeLinks.forEach(function(el) {
    el.style.display = "none";

    if (currentPlatformIsMac && el.classList.contains("mac-only")) {
      el.style.display = "block";
    }

    if (currentPlatformIsWindows && el.classList.contains("win-only")) {
      el.style.display = "block";
    }

    if (noPlatformDetected && el.classList.contains("no-js")) {
      el.style.display = "block";
    }

  });
})();
