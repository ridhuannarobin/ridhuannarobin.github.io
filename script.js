
"use strict";

// Select HTML elements using variables
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const yearElement = document.getElementById("year");

// Set the current year automatically
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Toggle the mobile navigation menu
menuToggle.addEventListener("click", function () {
    const isMenuOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
    menuToggle.textContent = isMenuOpen ? "✕" : "☰";
});

// Close the menu after selecting a navigation link
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});
