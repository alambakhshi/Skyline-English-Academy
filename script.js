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
  /* ---- 4. Registration form ---- */
  // Formspree handles the registration form submission.

  /* ---- 5. Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
