"use strict";
/*
Looping a triangle
*/
//Write a loop that makes seven calls to console.log to output the following triangle:
/*
#
##
###
####
#####
######
#######
*/
const loop = () => {
    let octo = "";
    for (let i = 0; i < 7; i++) {
        console.log(octo += "#");
    };
}

/*
FizzBuzz
*/
function fizzBuzzAgain() {
    for (let i = 0; i < 100; i++) {
        ((i % 3 === 0) && (i % 5 !== 0)) ? console.log("Fizz")
        : ((i % 5 === 0) && (i % 3 !== 0)) ? console.log("Buzz")
        : ((i % 3 === 0) && (i % 5 === 0)) ? console.log("FizzBuzz!")
        : console.log(i);
    };
}

/*
Chessboard
*/
//Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
/*
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/
function chessboard() {
    for (let i = 0; i < 8; i++) {
        let row = "";
        (i % 2 === 0) ? evenRow() : oddRow();
        console.log(row);

    function evenRow() {
        for (let i = 0; i < 5; i++) {
            (i === 0) ? row += " " : row += "#";
        };
    }

    function oddRow() {
        for (let i = 0; i < 5; i++) {
            (i !== 4) ? row += "#" : row += " ";
        }
    }
    };
}

//When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
function outputCustomChessboard() {
    const width = Number(prompt("Input a width for the chessboard"));
    const height = Number(prompt("Input a height for the chesboard"));

    for (let i = 0; i < height; i++) {
        let row = "";
        for (let j = 0; j < width - 1; j++) {
            row += "#";
        };
        (i % 2 === 0) ? (row = " " + row) : (row = row + " ");
        console.log(row);
    };
}
