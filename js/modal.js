const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();
    const img = this.querySelector("img");
    const title = this.querySelector("h3");

    modalImg.src = img.src;
    modalTitle.textContent = title.textContent;

    modal.style.display = "block";
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
