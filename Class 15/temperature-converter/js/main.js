//Write your pseduo code first! 
/*
research formula for farenheit/celsius conversion
write HTML form control that accepts numbers
include button to allow conversion from farenheit to celsius and vice versa
button text should show whether conversion is F -> C or C -> F
create JS variables of relevant DOM elements for manipulation
add event listeners to relevant elements
get value from form control input
perform operation with input depending on if mode is F -> C and vice versa
insert form control value and conversion value in html
*/

const btnConvert = document.querySelector(".btnConvert");
const btnSwitch = document.querySelector(".btnSwitch");
const h2 = document.querySelector(".h2");

btnConvert.addEventListener("click", convertTemp);
btnSwitch.addEventListener("click", switchTemp);

function convertTemp() {
    const value = Number(document.querySelector(".input").value);
    let converted;
    let measurement;
    btnSwitch.classList.contains("farenheit") ? converted = (value - 32) * (5/9) : converted = (value * 9/5) + 32;
    btnSwitch.classList.contains("farenheit") ? measurement = 'C' : measurement = 'F';
    h2.textContent = `${converted.toFixed(0)}${measurement}`;
}

function switchTemp() {
    btnSwitch.classList.contains("farenheit") ? btnSwitch.classList.replace("farenheit", "celsius") : btnSwitch.classList.replace("celsius", "farenheit");
    btnSwitch.classList.contains("farenheit") ? btnSwitch.textContent = "Farenheit -> Celsius" : btnSwitch.textContent = "Celsius -> Farenheit";
}