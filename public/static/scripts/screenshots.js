(function() {
  var opener = document.getElementById("lightbox-opener");
  if (opener) {
    opener.addEventListener("click", function() {
      document.querySelector("[data-lightbox]").click();
    });
  }
})();
