// adding weather in information in my front page
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=ad8f9dd0d19e36886a4588589ab06ace";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResult(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;C`;
    const iconSrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    figcaption.textContent = desc;
}

apiFetch();



// Adding link to my Learning activity during the weeks
const baseUrl = "https://edemfrancis.github.io/wdd230/";
const linkUrl = "https://edemfrancis.github.io/wdd230/data/link.json";
// const ancor = document.querySelector("a");
// week 1 get id ancor tags


async function getLinks(){
    const response = await fetch(linkUrl);
    const data = await response.json();

    // url links of weeks
    const week1Links = data.weeks.find(week => week.week === "Week 1").links;
    displayLinks(data.weeks)
}

function displayLinks(data) {
    
        // li.textContent = data.week.links.title;
        data.forEach(week => {
            // Create a section for each week
            const card = document.getElementById("section");
            const weekUl = document.createElement('ul');
            const createSpan = document.createElement("span");
            createSpan.classList.add("spanner");
            weekUl.classList.add("ul");
            createSpan.textContent = `${week.week}`;
            weekUl.appendChild(createSpan);
            console.log(week.week);
            section.appendChild(weekUl);

            // Iterate over the links within the weeks
            week.links.forEach(link => {
                const li = document.createElement("li");
                const a = document.createElement('a');
                console.log(link.url);
                console.log(link.title);
                a.href = link.url;
                a.textContent = link.title;

                li.appendChild(a);
                weekUl.appendChild(li);
                 // Display each link as a block for better readability
                card.append(weekUl);
            });
        });
}

getLinks();
