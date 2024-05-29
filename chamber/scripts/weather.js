// adddimg weather feature to the home page of chamber commerce
const lagosurl = "https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=ad8f9dd0d19e36886a4588589ab06ace";

const setter = document.querySelector(".setter");
async function urlFetch(){
    try {
        const response = await fetch(lagosurl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayCompany(data.weather); // Pass the fetched data to the displayCompany function
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

urlFetch();
