// adddimg weather feature to the home page of chamber commerce
const lagosurl = "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=ad8f9dd0d19e36886a4588589ab06ace";

const setter = document.querySelector(".setters");
async function urlFetch(){
    try {
        const response = await fetch(lagosurl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayLagosWeather(data); // Pass the fetched data to the displayCompany function
    } catch (error) {
        console.error(error);
    }
}

const weatherImg = document.createElement("img");
weatherImg.classList.add("weather-icon");
const weatherSpan = document.createElement("span");
let p = document.createElement("p");
const humidity_span = document.querySelector(".span-humidity");

function displayLagosWeather(data){
    
    const iconSrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherImg.setAttribute("src", iconSrc);
    weatherImg.setAttribute("alt", data.weather[0].description);
    weatherSpan.textContent = `Temp: ${data.main.temp}°C `;
    p.textContent = `${data.name}, ${data.sys.country}`;
    const wp = document.createElement("p");

    wp.append(weatherImg);
    humidity_span.appendChild(wp);
    humidity_span.appendChild(weatherSpan); // The reasonn why i am leaving all this one here is because i am using the doms
    humidity_span.appendChild(p);

}
urlFetch();


// displaying search option for user
const apiKey = "31e85674573767ae1a37ac655bc641ca";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?";

const searchbox = document.querySelector(".lat");
const searchbutton = document.querySelector(".search button");
const searchbox2 = document.querySelector(".lon");
const metric = "metric";

async function weather(lat, lon){
    const response = await fetch(apiUrl + `lat=${lat}` + `&lon=${lon}` + `&units=${metric}` + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        humidity_span.style.display = "none";
    }
    else{
        var data = await response.json();
        console.log(data);
        weatherSpan.textContent = Math.round(data.list[3].main.temp) + "°C";
        p.textContent = `${data.city.name}, ${data.city.country}`;
        document.querySelector(".humidity").textContent = `Humidity ${data.list[3].main.humidity}%`;
        document.querySelector(".wind").textContent = `Wind speed ${data.list[3].wind.speed}km/h`;

        if(data.list[3].weather[0].main == "Clouds"){
            weatherImg.src = "images/cloudyweather.png";
        }
        else if (data.list[3].weather[0].main == "Clear"){
            weatherImg.src = "images/clear.png";
        }
        else if (data.list[3].weather[0].main == "Rain"){
            weatherImg.src = "images/rainning cloud.png";
        }
        else if (data.list[3].weather[0].main == "Drizzle"){
            weatherImg.src = "images/rainny weather.png";
        }
        else if (data.list[3].weather[0].main == "Mist"){
            weatherImg.src = "images/mist.png";
        }

        document.querySelector(".error").style.display = "none";
    }
    
    weatherImg.setAttribute("width", "70");
    weatherImg.setAttribute("height", "70");
    
}



searchbutton.addEventListener("click", () => {
    weather(searchbox.value, searchbox2.value);
})

weather(10.4,4.5);


// slide java script
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides,4000); // Change image every 2 seconds

//   javascript to close slide if button-x is click

}

const buttonX = document.querySelector(".button-x");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

const slideContain = document.querySelector(".slide-container");
buttonX.addEventListener("click", ()=>{
  slideContain.style.display = "none";
});
  button2.addEventListener("click", ()=>{
    slideContain.style.display = "none";
});
button3.addEventListener("click", ()=>{
    slideContain.style.display = "none";
});