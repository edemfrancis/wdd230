const button = document.querySelector("#button");
const navList = document.querySelector(".horizontal");

button.addEventListener("click", () => {
    navList.classList.toggle("open");
    button.classList.toggle("open");
})

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.querySelector(".span3").textContent = new Date().toLocaleDateString('en-US', options);

const userName = "Edem Francis";
document.querySelector(".span2").textContent = userName;

// Discover Javascripts
const visitor = document.querySelector(".visit");
const welcome = document.querySelector(".welcome");
const welcomBack = document.querySelector(".back");
const lastVisited = document.querySelector(".last-visited");

const dateNow = new Date();


function displayMessage(message) {
    welcome.textContent = message;
}

function calculateDaysBetweenDates(date1, date2) {
    const todayMs = 84600000; // milliseconds in one day
    const msDiff = Math.abs(date2 - date1);
    return Math.floor(msDiff / todayMs);
}

function checkLastVisit() {
    const lastVisit = localStorage.getItem('lastVisitDate');
    const now = new Date();
    
    if (!lastVisit) {
        // First visit
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        const lastVisitDate = new Date(lastVisit);
        const daysBetween = calculateDaysBetweenDates(lastVisitDate, now);

        if (daysBetween < 1) {
            displayMessage("Back so soon! Awesome!");
        } else if (daysBetween > 1) {
            displayMessage("You last visited 1 day ago.");
        } else {
            displayMessage(`You last visited ${daysBetween} days ago.`);
        }
    }

    // Store the current visit date
    localStorage.setItem('lastVisitDate', now.toISOString());
}

checkLastVisit();
