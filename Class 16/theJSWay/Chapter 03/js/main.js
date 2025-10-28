"use strict";

/*
Following day
*/
//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
function outputDayAfter() {
    const dayArr = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let userDay = prompt("Please input a day").toLowerCase();

    while (true) {
        if (dayArr.includes(userDay)) {
            console.log(dayArr[(dayArr.indexOf(userDay) + 1) % dayArr.length]);
            break;
        } else {
            userDay = prompt("Please CHECK your INPUT");
        }
    }
}

/*
Number comparison
*/
//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
function compareTwoNum() {
    let numArr = [];
    
    for (i = 0; i < 2; i++) {
        numArr.push(prompt("Please enter the first number"));
    };

    if (numArr[0] > numArr[1]) {
        console.log(`${numArr[0]} is greater than ${numArr[1]}`);
    } else if (numArr[0] < numArr[1]) {
        console.log(`${numArr[0]} is less than ${numArr[1]}`);
    } else {
        console.log(`${numArr[0]} and ${numArr[1]} are equal`);
    };
}

/*
Final values
*/
//Take a look at the following program.
/*
let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);
*/
//Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. Complete the following table.
/*
Initial values	   nb1 final value	  nb2 final value	  nb3 final value
nb1=nb2=nb3=4			0                    4                  12
nb1=4,nb2=3,nb3=2		4	                 3                  2
nb1=2,nb2=4,nb3=0		3                    4                  0	
*/
//Check your predictions by executing the program.
//A: All correct

/*
Number of days in a month
*/
//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

function daysPerMonth() {
    let monthArr = [];
    let nameArr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    let daysArr = [28, 30, 31];
    let newMonthObj;

    for (let i = 0; i < nameArr.length; i++) {
        switch (nameArr[i]) {
            case "january": 
            case "march":
            case "may":
            case "july":
            case "october":
            case "december":
                newMonthObj = new DateObj(nameArr[i], daysArr[2]);
                break;
            case "february":
                newMonthObj = new DateObj(nameArr[i], daysArr[0]);
                break;
            case "april":
            case "june":
            case "august":
            case "september":
            case "november":
                newMonthObj = new DateObj(nameArr[i], daysArr[1]);
                break;
        };
        monthArr.push(newMonthObj);
    };

    function DateObj(name, days) {
    this.name = name;
    this.days = days;
    }

    let monthIndex = (Number(prompt("Please enter a month in the form of a number from 1-12")) - 1);

    while (true) {
        if ((monthIndex > -1) && (monthIndex < 12) && Number.isInteger(monthIndex)) {
            console.log(monthArr[monthIndex].name, monthArr[monthIndex].days);
            break;
        } else {
            monthIndex = Number(prompt("Please enter an integer between 1-12") - 1);
            console.log(monthIndex);
        };
    };
}

/*
Following second
*/
//Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
//Examples
/*
14h17m59s should give 14h18m0s
6h59m59s should give 7h0m0s
23h59m59s should give 0h0m0s (midnight)
*/
function outputFollowingSecond() {
    let hour = Number(prompt("Input the hour"));
    let minute = Number(prompt("Input the minute"));
    let second = Number(prompt("Input the second"));

    while (true) {
        if ((hour < 24) && (hour > -1) && (minute < 60) && (minute > -1) && (second < 60) && (second > -1)) {
            if (second === 59) {
                second = 0;
                if (minute === 59) {
                    minute = 0;
                    if (hour === 23) {
                    hour = 0;
                    } else {
                        hour++;
                    };
                } else {
                    minute++;
                }
            } else {
                second++;
            }
            break;
        } else {
            hour = Number(prompt("Input the hour as an integer between 0-23"));
            minute = Number(prompt("Input the minute as an integer between 0-59"));
            second = Number(prompt("Input the second as an integer between 0-59"));
        }
    }

    if (hour < 10) {
    hour = '0' + hour;
    };

    if (minute < 10) {
        minute = '0' + minute;
    };

    if (second < 10) {
        second = "0" + second;
    };

    console.log(`${hour}h${minute}m${second}s`)
}
