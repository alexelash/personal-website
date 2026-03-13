(function () {
  function initGLightbox() {
    // Destroy any existing instance to avoid duplicates on Barba page transitions
    if (window.GLightboxInstance) {
      window.GLightboxInstance.destroy();
    }

    const elements = document.querySelectorAll(".glightbox");
    //console.log("GLightbox elements found:", elements.length);

    if (elements.length > 0) {
      window.GLightboxInstance = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        zoomable: false,
        skin: null,
      });
      //console.log("GLightbox initialized:", window.GLightboxInstance);

      // Manually prevent default on clicks
      elements.forEach((el, index) => {
        el.addEventListener(
          "click",
          (e) => {
            //console.log("GLightbox click detected on element", index);
            e.preventDefault();
            e.stopPropagation();
            window.GLightboxInstance.openAt(index);
            return false;
          },
          true
        ); // Use capture phase
      });
    }
  }

  // Run on DOMContentLoaded if document not ready, otherwise run immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGLightbox);
  } else {
    initGLightbox();
  }
})();
