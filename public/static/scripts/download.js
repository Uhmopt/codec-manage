(function() {
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
      "iOS"
    ];

    var currentPlatformIsWindows = macosPlatforms.indexOf(platform) == -1;

    if (currentPlatformIsWindows) {
      isDownloadPage.style["flex-direction"] = "row-reverse";
    }

    setTimeout(function() {
      if (currentPlatformIsWindows) {
        document.getElementById("download-btn-win").click();
      } else {
        document.getElementById("download-btn-macos").click();
      }
    }, 2000);
  }
})();
