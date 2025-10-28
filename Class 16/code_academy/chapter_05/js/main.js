/*
Scope
*/
//At the top of main.js, declare a const variable named city and set it equal to 'New York City'. This variable will exist outside of the block.
//Below the city variable, write a function named logCitySkyline.
//Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.
//Inside the function, include a return statement like this:
//return 'The stars over the ' + skyscraper + ' in ' + city;
//Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console.

const city = "New York City";

function logCitySkyline() {
    let skyscraper = "Empire State Building";
    return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

//At the top of main.js, write three global variables:
//Name the first variable satellite and set it equal to 'The Moon'.
//Name the second variable galaxy and set it equal to 'The Milky Way'.
//Name the third variable stars and set it equal to 'North Star'.
//Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:
//return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
//Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.
const satellite = "The Moon";
const galaxy = "The Milky Way";
const stars = "North Star";

function callMyNightSky() {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//In main.js, define a function logVisibleLightWaves().
//Within the logVisibleLightWaves() function, create a const variable named lightWaves and set it equal to 'Moonlight'.
//Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.
//Call the logVisibleLightWaves() function from outside the function.
//Beneath the function call, log the value of lightWaves to the console from outside the function.
function logVisibleLightWaves() {
    const lightWaves = "Moonlight";
    console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);

//Let’s see what happens if we create a variable that overwrites a global variable.
//Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such:
//stars = 'Sirius';
//Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.
const satellite2 = "The Moon";
const galaxy2 = "The Milky Way";
const stars2 = "North Star";

function callMyNightSky2() {
    stars2 = "Sirius";
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(stars2);

//Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.
//Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.
//Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.
//Run the code and take note of the output. Inside the if block, console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.
const logVisibleLightWaves2 = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
  // Add if statement here:
    if (region === "The Arctic"){
        let lightWaves = "Northern Lights";
        console.log(lightWaves);
    }
    console.log(lightWaves);
};

logVisibleLightWaves2();