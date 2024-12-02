const card = document.querySelector(".rotating-card .card-inner");
const btnFlip = document.querySelector("#btn-flip");
const btnFlipBack = document.querySelector("#btn-flip-back");

btnFlip.addEventListener("click", () => {
    // Flip to front
  card.style.transform = "rotateY(180deg)"; 
});

btnFlipBack.addEventListener("click", () => {
    // Flip back
  card.style.transform = "rotateY(0deg)"; 
});
