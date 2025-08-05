
/*
================================
Javascript.info: Variables
================================
*/

/*Working with variables*/
const name = "john";
const admin = name;
alert(admin);

/*Giving the right name*/
let ourPlanetName;
let currentUserName;

/*Uppercase const?*/
const BIRTHDAY = '18.04.1982'; //birthday should be uppercase



/*
================================
Javascript.info: Function Basics
================================
*/

/*Is "else" required?*/
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
} //both functions behave the same

/*Rewrite the function using '?' or '||'*/
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}