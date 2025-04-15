
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("main-navbar");
    const hero = document.getElementById("hero");

    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
      navbar.classList.add("sticky-nav");
    } else {
      navbar.classList.remove("sticky-nav");
    }
  });

