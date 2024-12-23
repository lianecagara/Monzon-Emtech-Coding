document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    try {
      const i = anchor.getAttribute("href");
      if (i.startsWith("#")) {
        document.querySelector(i).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.open(i);
      }
    } catch (error) {
      console.error(error);
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // backToTopButton.style.display = 'block';
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
    // backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
