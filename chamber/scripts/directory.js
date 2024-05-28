
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


// Directory Javascript Dom manipultion and api Fetch
const grid_list = document.querySelector(".grid-list");
const grid = document.getElementById("grid");
const list = document.getElementById("list");
const article_sect = document.getElementById("article-section");


const companyUrl = "https://edemfrancis.github.io/wdd230/chamber/data/members.json";

async function companyApifetch() {
    try {
        const response = await fetch(companyUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data.company);
        displayCompany(data.company); // Pass the fetched data to the displayCompany function
    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}

function displayCompany(data) {
    data.forEach(company => {
        // Create a section for each week
        const section = document.createElement("section");
        section.classList.add("section-article");
        const h3 = document.createElement("h3");
        h3.classList.add("h3");
        const images = document.createElement("img");
        const p = document.createElement("p");
        const ancorTag = document.createElement("a");

        // setting create item attributes
        images.setAttribute("src", company.image);
        images.setAttribute("alt", company.name);
        images.setAttribute("width", "");
        images.setAttribute("height", "")
        images.setAttribute("loading", "lazy");
        console.log(company.name);
        h3.textContent = company.name;
        p.textContent = `Dedicated in the year ${company.year}`;
        ancorTag.href = company.websiteUrl;
        ancorTag.setAttribute("target", "_blank");
        ancorTag.textContent = "Details";

        section.append(images);
        section.append(h3);
        section.append(p);
        section.append(ancorTag);

        article_sect.appendChild(section);
        
    });
}

companyApifetch()

grid.addEventListener("click", () => {
	// example using arrow function
	article_sect.classList.add("grid");
	article_sect.classList.remove("list");
});

list.addEventListener("click", showList); // example using defined function

function showList() {
	article_sect.classList.add("list");
	article_sect.classList.remove("grid");
}
