// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1000);
});

// ==========================
// TYPING ANIMATION
// ==========================

const typingElement = document.getElementById("typing");

const roles = [
  "Software Developer",
  "Problem Solver",
  "Java Developer",
  "Web Developer",
  "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingElement.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn =
  document.getElementById("theme-toggle");

const body = document.body;

const savedTheme =
  localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light-mode");
  themeBtn.innerHTML =
    '<i class="fas fa-sun"></i>';
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (
    body.classList.contains("light-mode")
  ) {
    localStorage.setItem("theme", "light");

    themeBtn.innerHTML =
      '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem("theme", "dark");

    themeBtn.innerHTML =
      '<i class="fas fa-moon"></i>';
  }
});

// ==========================
// MOBILE MENU
// ==========================

const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu after click

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

// ==========================
// SCROLL PROGRESS BAR
// ==========================

window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  document.getElementById(
    "progress-bar"
  ).style.width = progress + "%";
});

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn =
  document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements =
  document.querySelectorAll(
    ".glass-card, .skill-card, .project-card"
  );

revealElements.forEach(el => {
  el.classList.add("reveal");
});

function revealOnScroll() {
  revealElements.forEach(element => {
    const top =
      element.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;

    if (top < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

// ==========================
// CONTACT FORM
// ==========================

const form =
  document.getElementById("contactForm");

form.addEventListener("submit", e => {
  e.preventDefault();

  alert(
    "Thank you for contacting me! I will get back to you soon."
  );

  form.reset();
});

// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(
    ".nav-links a"
  );

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop =
      section.offsetTop - 120;

    const sectionHeight =
      section.clientHeight;

    if (
      pageYOffset >= sectionTop
    ) {
      current =
        section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {
      link.classList.add("active");
    }
  });
});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters =
  document.querySelectorAll(".counter");

const startCounter = () => {
  counters.forEach(counter => {
    const target =
      +counter.getAttribute("data-target");

    let count = 0;

    const increment =
      target / 100;

    const updateCounter = () => {
      if (count < target) {
        count += increment;

        counter.innerText =
          Math.ceil(count);

        requestAnimationFrame(
          updateCounter
        );
      } else {
        counter.innerText =
          target + "+";
      }
    };

    updateCounter();
  });
};

startCounter();

// ==========================
// HERO BUTTON EFFECT
// ==========================

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener(
    "mouseenter",
    () => {
      button.style.transform =
        "translateY(-5px) scale(1.03)";
    }
  );

  button.addEventListener(
    "mouseleave",
    () => {
      button.style.transform =
        "translateY(0)";
    }
  );
});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log(
  "%cPortfolio Developed By Aman Kumar",
  "color:#6366f1;font-size:18px;font-weight:bold;"
);