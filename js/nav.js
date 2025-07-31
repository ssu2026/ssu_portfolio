document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.getElementById("goAbout").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("goProjects").addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("goCardnews").addEventListener("click", function () {
  document.getElementById("cardnews").scrollIntoView({ behavior: "smooth" });
});
