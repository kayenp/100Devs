// *Variables*
// Create a variable and console log the value
let variable = 1;
console.log(variable);

// Create a variable, add 10 to it, and alert the value
function alertValue() {
    let num = prompt("Enter a value");
    alert(`${num} + 10 = ${num + 10}`);
}

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour() {
    let arr = [];
    for(let i = 0; i < 4; i++) {
        let suffix;
        (i + 1) === 1 ? suffix = "st" :
        (i + 2) === 2 ? suffix = "nd" :
        (i + 3) === 3 ? suffix = "rd" : suffix = "th";
        
        arr.push(prompt(`Enter the ${i + 1}${suffix} number`));
    };
    alert(`${arr[0]} - ${arr[1]} - ${arr[2]} - ${arr[3]} = ${arr[0] - arr[1] - arr[2] - arr[3]}`);
}

// Create a function that divides one number by another and returns the remainder
function remainderOf() {
    let arr = [];
    for (i = 0; i < 2; i++) {
        let suffix;
        (i + 1) === 1 ? suffix = "st" : suffix = "nd";
        arr.push(prompt(`Enter the ${i + 1}${suffix} number`));
    };
    alert("Check the console");
    console.log(`The remainder of ${arr[0]} / ${arr[1]} = ${arr[0] % arr[1]}`);
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanjiOrNo() {
    let arr = [];
    for (i = 0; i < 2; i++) {
        let suffix;
        (i + 1) === 1 ? suffix = "st" : suffix = "nd";
        arr.push(prompt(`Enter the ${i + 1}${suffix} number`));
    };
    console.log(`${arr[0]} + ${arr[1]} = ${Number(arr[0]) + Number(arr[1])}`);
    (arr[0] + arr[1] > 50) ? alert("JUMANJIS!!!") : alert("NO JUMANJIS!");
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebraOrNo() {
    let arr = [];
    for (i = 0; i < 3; i++) {
        let suffix;
        (i + 1) === 1 ? suffix = "st" : 
        (i + 1) === 2 ? suffix = "nd" : suffix = "rd";
        arr.push(prompt(`Enter the ${i + 1}${suffix} number`));
    };
    console.log(`${arr[0]} * ${arr[1]} * ${arr[2]} = ${arr[0] * arr[1] * arr[2]} / 3 = ${(arr[0] * arr[1] * arr[2]) % 3}`);
    (arr[0] * arr[1]  * arr[2] % 3 === 0) ? alert("ZEBRAS!!!") : alert("NO ZEBRAS!");
}

