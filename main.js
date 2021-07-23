const topBtn = document.getElementById('top-btn');
const topBtnBg = document.getElementById('top-btn-bg');


topBtn.addEventListener("mouseover", () => topBtnBg.style.backgroundColor = "var(--black)")

topBtn.addEventListener("mouseout", () => topBtnBg.style.backgroundColor = "")