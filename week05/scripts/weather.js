const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?q=trier&appid=ad8f9dd0d19e36886a4588589ab06ace";
const url2 = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=ad8f9dd0d19e36886a4588589ab06ace";

async function apiFetch() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResult(data) {
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    const iconSrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    figcaption.textContent = desc;
}

apiFetch();