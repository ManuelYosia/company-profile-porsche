// Navbar
const menuMobile = document.querySelector("nav .navigation-menu.mobile");
const hamBtn = document.querySelector("nav .menu-btn");

hamBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

const nav = document.querySelector("nav");
const brand = document.querySelector("nav .brand");
const navigationItem = document.querySelectorAll("nav .navigation-menu li a");
const language = document.querySelector("nav .language");

console.log(nav);

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = "#272829d2";
    menuMobile.style.backgroundColor = "#272829d2";
    brand.style.color = "white";
    language.style.color = "white";
    navigationItem.forEach((e) => {
      e.style.color = "white";
    });
  } else {
    nav.style.backgroundColor = "transparent";
    menuMobile.style.backgroundColor = "transparent";
    brand.style.color = "black";
    language.style.color = "black";
    navigationItem.forEach((e) => {
      e.style.color = "black";
    });
  }
});

// Section 1
const sectionList1 = document.querySelectorAll(
  ".section-1 .section-main__item"
);

sectionList1.forEach((e) => {
  e.addEventListener("click", () => {
    sectionList1.forEach((e) => e.classList.remove("active"));
    e.classList.add("active");
  });
});

const sectionList3 = document.querySelectorAll(
  ".section-3 .section-main__item"
);

sectionList3.forEach((e) =>
  e.addEventListener("click", () => {
    sectionList3.forEach((e) => e.classList.remove("active"));
    e.classList.add("active");
  })
);
