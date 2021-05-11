(function () {
  var isDownloadPage = document.getElementById("download-page");
  if (isDownloadPage) {
    const platform = window.navigator.platform;
    const macosPlatforms = [
      "Macintosh",
      "MacIntel",
      "MacPPC",
      "Mac68K",
      "iPhone",
      "iPad",
      "iPod",
      "iOS",
    ];

    var currentPlatformIsWindows = macosPlatforms.indexOf(platform) == -1;

    if (currentPlatformIsWindows) {
      isDownloadPage.style["flex-direction"] = "row-reverse";
    }

    const checkPopUpBlocked = (url) => {
      var newWin = window.open(url);
      if (!newWin || newWin.closed || typeof newWin.closed == "undefined") {
        console.log("popup blocked");
        return true;
      }
      return false;
    };

    const downloadFromUrl = (uri = "", name = "") => {
      if (!Boolean(uri)) {
        console.log("not valid uri: ", uri);
        return false;
      }
      // if (checkPopUpBlocked(uri)) {
      //   return false;
      // }
      var link = document.createElement("a");
      link.target = "_blank";
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    const btn_win = document.getElementById("download-btn-win");
    const btn_mac = document.getElementById("download-btn-macos");
    const subscribe_modal = document.getElementById("subscribe_modal");
    const close_subscribe_modal = document.getElementById(
      "close_subscribe_modal"
    );
    const subscribe_form = document.getElementById(
      "mc-embedded-subscribe-form"
    );
    const alert_text = document.getElementById("subscribe_alert");

    const showAlert = (show = true) => {
      if (Boolean(show)) {
        alert_text.style.display = "block";
      } else {
        alert_text.style.display = "none";
      }
    };

    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    btn_win.addEventListener("click", (e) => {
      e.preventDefault();
      const targetUrl = btn_win?.href ?? "";
      downloadFromUrl(targetUrl, String(targetUrl).split("/").pop());
      // modal show
      subscribe_modal.style.opacity = 1;
      subscribe_modal.style.pointerEvents = "auto";
    });
    btn_mac.addEventListener("click", (e) => {
      e.preventDefault();
      const targetUrl = btn_mac?.href ?? "";
      downloadFromUrl(targetUrl, String(targetUrl).split("/").pop());
      // modal show
      subscribe_modal.style.opacity = 1;
      subscribe_modal.style.pointerEvents = "auto";
    });
    close_subscribe_modal.addEventListener("click", () => {
      // modal hide
      subscribe_modal.style.opacity = 0;
      subscribe_modal.style.pointerEvents = "none";
    });

    subscribe_form.addEventListener("submit", (e) => {
      const inputedEmail = e?.target?.[0]?.value;
      if (!validateEmail(inputedEmail)) {
        showAlert(true);
        e.preventDefault();
      } else {
        showAlert(false);
        // modal hide
        subscribe_modal.style.opacity = 0;
        subscribe_modal.style.pointerEvents = "none";
      }
    });

    setTimeout(function () {
      if (currentPlatformIsWindows) {
        btn_win.click();
      } else {
        btn_mac.click();
      }
    }, 2000);
  }
})();
