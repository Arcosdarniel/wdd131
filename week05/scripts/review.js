
document.addEventListener("DOMContentLoaded", () => {

    let numReviews = Number(window.localStorage.getItem("reviewCount")) || 0;

    numReviews++;

    localStorage.setItem("reviewCount", numReviews);

    const countDisplay = document.getElementById("reviewCount");
    if (countDisplay) {
        countDisplay.textContent = numReviews;
    }

    let currentYear = new Date().getFullYear();
    let lastModified = document.lastModified;

    document.getElementById("currentYear").innerHTML = currentYear;
    document.getElementById("lastModified").innerHTML = 'Last modified: ' + lastModified;
});