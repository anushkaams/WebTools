document.addEventListener("DOMContentLoaded", function () {
  fetch("/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      const navbarContainer = document.createElement("div");
      navbarContainer.innerHTML = data;
      document.body.insertBefore(navbarContainer, document.body.firstChild);
    })
    .catch((err) => console.error("Failed to load navbar:", err));
});
