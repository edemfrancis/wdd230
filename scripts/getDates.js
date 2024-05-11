const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("todaysdate").textContent = new Date().toLocaleDateString('en-US', options);

// week 3
const visit = document.querySelector("#visit");
let numOfVisitors = Number(window.localStorage.getItem("numOfVisitors-Listed")) || 0;

const button = document.querySelector("#button");
const ulList = document.querySelector(".horizontal-ul")


button.addEventListener("click", () => {
    ulList.classList.toggle('open');
    button.classList.toggle('open');
})

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const navigation = document.querySelector("nav");
const header = document.querySelector("header")
const normalMode = document.querySelector("#normal");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "rgb(23, 0, 38)";
		main.style.color = "rgb(255, 255, 255)";
        footer.style.background = "rgb(23, 0, 38)";
        footer.style.color = "rgb(255, 255, 255)";
        navigation.style.background = "rgb(23, 0, 38)";
        navigation.style.color = "rgb(255, 255, 255)";
        header.style.background = "rgb(23, 0, 38)";
        header.style.color = "rgb(255, 255, 255)";
        
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        footer.style.background = "#fff";
        footer.style.color = "#000";
        navigation.style.background = "#fff";
        navigation.style.color = "#000";
        header.style.background = "#fff";
        header.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

normalMode.addEventListener("click", () => {
    if (normalMode.textContent.includes("Normal Mode")){
        main.style.background = "#f1d7d5d5";
		main.style.color = "#000";
        footer.style.background = "#f1d7d5d5";
        footer.style.color = "#000";
        navigation.style.background = "#f1d7d5d5";
        navigation.style.color = "#000";
        header.style.background = "#f1d7d5d5";
        header.style.color = "#000";
		modeButton.textContent = "🕶️";
    }
})

// week 03
if (numOfVisitors !== 0){
    visit.textContent = numOfVisitors;
}
else {
    visit.textContent = `Hello this is your first time Visting. You're welcome 🥳`
}
numOfVisitors++;

localStorage.setItem("numOfVisitors-Listed", numOfVisitors);

