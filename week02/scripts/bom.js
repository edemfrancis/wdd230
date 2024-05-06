const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const listUl = document.querySelector("#list");

// Adding Eventlistener to button
button.addEventListener('click', () => {
    if (input.value != "") {
        // Creeating li and a delete button
        const listLi = document.createElement("li");
        const deleteButton = document.createElement("button");


        listLi.textContent = input.value;
        deleteButton.textContent = "❌";

        // appending li with delete button
        listLi.append(deleteButton);

        // appemding ul with li
        listUl.append(listLi);

        deleteButton.addEventListener("click", () => {
            listUl.removeChild(listLi);
            input.focus();
        });

        input.value = "";
        }
});


