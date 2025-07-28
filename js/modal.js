const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.querySelector(".modal-title");
const closeBtn = document.querySelector(".modal-close");

// 모든 카드에 클릭 이벤트 추가
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault(); // a 링크 기본 동작 막기

    const img = card.querySelector("img");
    const title = card.querySelector("h3");

    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.textContent = title.textContent;

    modal.style.display = "block";
  });
});

// 닫기 버튼
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 모달 바깥 클릭하면 닫기
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
