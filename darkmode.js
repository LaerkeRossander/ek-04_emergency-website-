// Dark mode toggle Funktionalitet
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const toggleIcon = darkModeToggle.querySelector(".toggle-icon");
  const body = document.body;
  const html = document.documentElement;

  // Tjek om dark mode tidligere er blevet aktiveret
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  if (isDarkMode) {
    body.classList.add("dark-mode");
    html.classList.add("dark-mode");
    toggleIcon.textContent = "☀️"; // Sol ikon for light mode
  } else {
    toggleIcon.textContent = "🌙"; // Måne ikon for dark mode
  }

  // Toggle dark mode når knappen klikkes
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    html.classList.toggle("dark-mode");

    // Skift ikon afhængig af tilstand
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleIcon.textContent = "☀️"; // Sol ikon når dark mode er aktiv
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleIcon.textContent = "🌙"; // Måne ikon når light mode er aktiv
    }

    // Animation effekt på knappen
    darkModeToggle.style.transform = "scale(0.8)";
    setTimeout(() => {
      darkModeToggle.style.transform = "scale(1)";
    }, 150);
  });

  // Keyboard navigation support
  darkModeToggle.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      darkModeToggle.click();
    }
  });
});
