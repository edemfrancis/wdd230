const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const listUl = document.querySelector("#list");

// Adding Eventlistener to button
button.addEventListener('click', () => {
    if (input.value != "") {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();

        input.value = "";
        input.focus();
        }
});

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
            // Creeating li and a delete button
            const listLi = document.createElement("li");
            const deleteButton = document.createElement("button");
    
    
            listLi.textContent = item;
            deleteButton.textContent = "❌";
    
            // appending li with delete button
            listLi.append(deleteButton);
    
            // appemding ul with li
            listUl.append(listLi);
    
            deleteButton.addEventListener("click", () => {
                listUl.removeChild(listLi);
                deleteChapter(listLi.textContent);
                input.focus();
            });
    
}

function setChapterList() {
    localStorage.setItem("myFavouriteList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavouriteList"));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
