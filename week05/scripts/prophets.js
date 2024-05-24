const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.getElementById("cards");

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);
    // console.table(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        card.classList.add("card1");

        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        // setting attributes to img of portrait
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait image of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "400");
        portrait.setAttribute("height", "400");
        // appending fullname and portait as child to card
        card.appendChild(fullName);
        card.appendChild(portrait);
        // appending card to cards
        cards.append(card);
    });
}
