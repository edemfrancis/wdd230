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


