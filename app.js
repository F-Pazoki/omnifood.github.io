////////////////////////////////
// update copy-right year

const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

////////////////////////////////
// mobile nav

const navBtn = document.querySelector(".nav-mobile-btns");
const header = document.querySelector(".header");
const links = document.querySelectorAll("a:link");

navBtn.addEventListener("click", function () {
  header.classList.toggle("open-nav");
});

// closing nav after click
links.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("links-nav")) {
      header.classList.toggle("open-nav");
    }
  });
});

////////////////////////////////
// sticky mobile nav

const target = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);

observer.observe(target);
