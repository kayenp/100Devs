"use strict";

const theadTRList = document.querySelectorAll("thead tr");
const theadTHList = document.querySelectorAll("thead th");
const bodyTR = document.querySelector("tbody tr");
const bodyTDList = document.querySelectorAll ("tbody td");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", outputTemps, false);

function outputTemps(event) {
    const inputVal = Number(document.querySelector("input").value);
    const f = ((inputVal * 9)/ 5 - 459.67).toFixed(2);
    const c = (inputVal - 273.15).toFixed(2);

    for (let i = 0; i < bodyTDList.length; i++) {
        (i === 0) ? bodyTDList[i].textContent = `${inputVal}K`
        : (i === 1) ? bodyTDList[i].textContent = `${f}F`
        : bodyTDList[i].textContent = `${c}C`;
    };

    input.focus();

    event.preventDefault();
};
