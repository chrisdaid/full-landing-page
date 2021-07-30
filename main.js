// Grab go to top button & background of the button
const topBtn = document.getElementById('top-btn');
const topBtnBg = document.getElementById('top-btn-bg');
// hover event
topBtn.addEventListener("mouseover", () => topBtnBg.style.backgroundColor = "rgba(50, 41, 47, 0.75)");
// unhover event
topBtn.addEventListener("mouseout", () => topBtnBg.style.backgroundColor = "");

// grab all details elements
const details = document.getElementsByTagName("details");
// convert object to array
const detailsArr = Object.values(details);
// close inactive detail in faq
detailsArr.forEach(targetDetail => {
    targetDetail.addEventListener("click", () => {
        detailsArr.forEach((detail) => {
            if (detail != targetDetail) {
                detail.removeAttribute("open");
            }
        });
    })
});

// grab all summary elements
const summary = document.getElementsByTagName("summary");
// convert object to array
const summaryArr = Object.values(summary);
// change background color if active
summaryArr.forEach(targetSummary => {
    targetSummary.addEventListener("click", () => {
        summaryArr.forEach((summary) => {
            if (summary === targetSummary) {
                summary.classList.toggle("summary-active-bg")
            }
        });
    })
});
// remove background on inactive summary
summaryArr.forEach(targetSummary => {
    targetSummary.addEventListener("click", () => {
        summaryArr.forEach((summary) => {
            if (summary != targetSummary) {
                summary.classList.remove("summary-active-bg")
            }
        });
    })
});

// Get Contact Button element
const contactBtn = document.getElementById("open-contact-form");
// Get the contact background
const contactModal = document.getElementsByClassName("bg-modal");

// when you click on Contact in navbar it opens the form
contactBtn.addEventListener("click", () => {
    contactModal[0].classList.toggle("hidden");
})

// when empty background is clicked, it closes out the form 
window.addEventListener("click", outsideClick)

function outsideClick (e) {
    if (e.target == contactModal[0]) {
        contactModal[0].classList.toggle("hidden");
    }
}
