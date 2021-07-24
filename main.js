const topBtn = document.getElementById('top-btn');
const topBtnBg = document.getElementById('top-btn-bg');


topBtn.addEventListener("mouseover", () => topBtnBg.style.backgroundColor = "rgba(50, 41, 47, 0.75)");

topBtn.addEventListener("mouseout", () => topBtnBg.style.backgroundColor = "");