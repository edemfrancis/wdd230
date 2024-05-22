const feedback = document.querySelector("#feedback1");
const feedback2 = document.querySelector("#feedback2");
const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password1");

pass2.addEventListener("focusout", checking);

function checking(){
    if (pass1.value !== pass2.value){
        pass1.value = "";
        pass2.value= "";
        pass1.focus();
        feedback2.textContent = "❌ Is does not match your first password";
    } else {
        feedback.textContent = "✔️";
        feedback2.textContent = "✔️";
    }
}

// checking the email
document.getElementById('move-center').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault(); // Prevent the form from submitting
        emailError.style.display = 'inline';
    } else {
        emailError.style.display = 'none';
    }
});


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

