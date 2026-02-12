document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const hiddenProducts = document.querySelectorAll("[data-hidden-product]");
  let isExpanded = false;

  showMoreBtn?.addEventListener("click", function () {
    isExpanded = !isExpanded;

    hiddenProducts.forEach((product) => {
      // Toggle the hidden class
      product.classList.toggle("hidden", !isExpanded);

      // Trigger the fade-in effect
      if (isExpanded) {
        // A tiny delay ensures the browser sees the 'hidden' removal first
        requestAnimationFrame(() => {
          product.classList.add("opacity-100");
        });
      } else {
        product.classList.remove("opacity-100");
      }
    });

    // Simple text toggle - This UX looks better to me
    btnText.textContent = isExpanded ? "Show Less" : "Show More";

    // or remove the button
    //this.remove();

    if (!isExpanded) {
      document
        .getElementById("mobileProductGrid")
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});
