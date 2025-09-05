"use strict";

/*
PLAN
    - Test how function behaves when attached using addEventListener
        - Check context of "this"
    - Test how function method behaves when attached using addEventListener
        - Check context of "this"
    - Test how new instance of object behaves vs the 2 situations above
*/

let testBtn = document.querySelector(".testBtn");
let output = document.querySelector(".output");

let objLiteral = {
    method: function() {
        console.log("objLiteral", this, this.innerText)
    },
};

function CreateConFnObj() {
    this.value = "";
    this.method = function(){
        console.log(`conFnObj`, this, this.innerText);
    };
};
let conFnObj = new CreateConFnObj();

function createFactFnObj() {
    return {
        method: function(){
            console.log("factFnObj", this, this.innerText);
        },
    };
}
let factFnObj = createFactFnObj();

let hello = "hello";

console.log(testBtn.innerText);
//testBtn.addEventListener("click", console.log);
testBtn.addEventListener("click", objLiteral.method);
//testBtn.addEventListener("click", conFnObj.method);
//testBtn.addEventListener("click", factFnObj.method);

