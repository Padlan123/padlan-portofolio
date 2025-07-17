const navMenu = document.querySelector("#nav-menu");
const close = document.querySelector("#close-button");
const hamburger = document.querySelector("#hamburger-button");

hamburger.addEventListener("click", function () {
  navMenu.classList.add("block");
  navMenu.classList.remove("hidden");
});

close.addEventListener("click", function () {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("block");
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// smooth scrolling

const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //  scroll other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
