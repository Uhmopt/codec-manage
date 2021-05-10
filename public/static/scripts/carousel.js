(function() {
  var isCarouselPage = document.getElementById("product-carousel");
  if (isCarouselPage) {
    var productBoxes = document.querySelectorAll(".product-box-wrapper");
    productBoxes = [].slice.call(productBoxes);
    var productWrappers = document.querySelectorAll(".product-wrapper");
    productWrappers = [].slice.call(productWrappers);
    var chevronLeft = document.getElementById("chevron-left");
    var chevronRight = document.getElementById("chevron-right");
    var carouselDots = document.querySelectorAll(".carousel-dot");
    carouselDots = [].slice.call(carouselDots);
    var dotWrapper = document.getElementById("dot-wrapper");

    var visibleProductIndex = 0;
    var animating = false;

    function transitionToProduct(index) {
      animating = true;
      productBoxes.forEach(function(box) {
        box.style.opacity = "0";
      });
      setTimeout(function() {
        var newIndex = index;
        if (index < 0) {
          newIndex = productBoxes.length - 1;
        } else if (index >= productBoxes.length) {
          newIndex = 0;
        }
        visibleProductIndex = newIndex;
        setTimeout(function() {
          productBoxes.forEach(function(box) {
            box.style.opacity = "1";
          });
          carouselDots.forEach(function(dot) {
            dot.classList.remove("active");
            document
              .getElementById("dot-" + visibleProductIndex)
              .classList.add("active");
          });
          animating = false;
        }, 400);

        if (visibleProductIndex === 0) {
          chevronLeft.style.display = "none";
          chevronRight.style.display = "block";
        } else if (visibleProductIndex === productBoxes.length - 1) {
          chevronLeft.style.display = "block";
          chevronRight.style.display = "none";
        } else {
          chevronLeft.style.display = "block";
          chevronRight.style.display = "block";
        }

        productWrappers.forEach(function(wrapper) {
          wrapper.style.transform =
            "translate(-" + visibleProductIndex * 100 + "%, 0)";
        });
      }, 400);
    }

    var id = setInterval(function() {
      transitionToProduct(visibleProductIndex + 1);
    }, 10000);

    chevronLeft.addEventListener("click", function() {
      if (!animating) {
        transitionToProduct(visibleProductIndex - 1);
      }
      clearInterval(id);
    });

    chevronRight.addEventListener("click", function() {
      if (!animating) {
        transitionToProduct(visibleProductIndex + 1);
      }
      clearInterval(id);
    });

    dotWrapper.addEventListener("click", function(e) {
      var target = e.target;
      if (target.className.includes("carousel-dot") && !animating) {
        transitionToProduct(+target.getAttribute("id").slice(-1));
        clearInterval(id);
      }
    });
  }
})();
