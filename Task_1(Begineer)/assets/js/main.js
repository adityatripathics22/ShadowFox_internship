const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section[id]");
const header = document.getElementById("header");
const scrollUp = document.getElementById("scroll-up");
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

const shadowHeader = () => {
  if (window.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
};

const showScrollUp = () => {
  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

    if (!sectionLink) {
      return;
    }

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink.classList.add("active-link");
    } else {
      sectionLink.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", () => {
  shadowHeader();
  showScrollUp();
  scrollActive();
});

if (window.Typed) {
  new Typed(".home__typed", {
    strings: ["responsive websites.", "portfolio projects.", "clean web layouts."],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1600,
    loop: true,
  });
}

if (contactForm && contactMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      contactMessage.textContent = "Please fill in all fields before sending your message.";
      contactMessage.className = "contact__message error";
      return;
    }

    contactMessage.textContent = "Thanks for reaching out! Your message is ready to send from this portfolio form.";
    contactMessage.className = "contact__message success";
    contactForm.reset();
  });
}

if (window.ScrollReveal) {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1200,
    delay: 150,
    reset: false,
  });

  sr.reveal(".home__content, .about__content, .resume__panel, .contact__content, .contact__form");
  sr.reveal(".home__image-wrapper, .about__image-wrapper", { origin: "top" });
  sr.reveal(".home__card, .skills__card, .projects__card, .about__item, .contact__card", {
    interval: 120,
  });
}
