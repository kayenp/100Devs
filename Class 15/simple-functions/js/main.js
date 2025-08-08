//create a function that adds two numbers and alerts the sum
function addTwo() {
    let arr = [];
    
    for(let i = 0; i < 2; i++) {
        let suffix;
        ((i + 1) === 1) ? suffix = "st" : suffix = "nd";
        arr.push(prompt(`Input the ${i + 1}${suffix} number.`));
    };
    
    let total = Number(arr[0]) + Number(arr[1]);
    console.log(`${arr[0]} + ${arr[1]} = ${total}`);
    alert(`The total of the two numbers is ${total}`);
}

//create a function that multiplys three numbers and console logs the product
function multiplyThree() {
    let arr = [];
    
    for(let i = 0; i < 3; i++) {
        let suffix;
        
        ((i + 1) === 1) ? suffix = "st" : 
        ((i + 1) === 2) ? suffix = "nd" : suffix = "rd";

        arr.push(prompt(`Input the ${i + 1}${suffix} number.`));
    };

    let total = arr[0] * arr[1] * arr[2];
    console.log(`${arr[0]} * ${arr[1]} * ${arr[2]} = ${total}`);
    alert(`The total of the three numbers multiplied is ${total}`);
}

//create a function that divides two numbers and returns the ???
function remainderOfTwo() {
    let arr = [];
    
    for(let i = 0; i < 2; i++) {
        let suffix;
        
        ((i + 1) === 1) ? suffix = "st" : suffix = "nd";

        arr.push(prompt(`Input the ${i + 1}${suffix} number.`));
    };

    let total = arr[0] % arr[1];
    console.log(`${arr[0]} % ${arr[1]} = remainder of ${total}`);
    alert(`The remainder of the two numbers divided is ${total}`);
}

remainderOfTwo();