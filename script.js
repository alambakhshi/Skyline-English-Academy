/* ==========================================================================
   SKYLINE ENGLISH ACADEMY — SCRIPT
   Plain JavaScript, no libraries. Organized into small, independent blocks
   so you can find and edit each behavior easily.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ---- 1. Mobile navigation (hamburger menu) ---- */
  var hamburger = document.getElementById("hamburger");
  var mainNav = document.getElementById("main-nav");

  function closeMenu() {
    mainNav.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    mainNav.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Close menu");
  }

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", function () {
      var isOpen = mainNav.classList.contains("is-open");
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    // Close the menu whenever a nav link is tapped
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close the menu on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { closeMenu(); }
    });
  }

  /* ---- 2. Header shadow after scrolling ---- */
  var header = document.getElementById("site-header");
  function updateHeaderShadow() {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  if (header) {
    updateHeaderShadow();
    window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  }

  /* ---- 3. Course "Learn More" buttons pre-fill the registration form ---- */
  var courseLinks = document.querySelectorAll(".course-card__link");
  var courseSelect = document.getElementById("course");

  courseLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      var courseName = link.getAttribute("data-course");
      if (courseSelect && courseName) {
        courseSelect.value = courseName;
      }
    });
  });

  /* ---- 4. Registration form submit (placeholder — no backend yet) ---- */
  var form = document.getElementById("registration-form");
  var successMessage = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // TODO (site owner): send `form` data to your backend or a form
      // service (e.g. Formspree) here, then remove this placeholder block.

      form.reset();
      if (successMessage) {
        successMessage.hidden = false;
        successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  /* ---- 5. Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
