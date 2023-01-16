const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("hidden");
  });
});
